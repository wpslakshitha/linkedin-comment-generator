chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateComment") {
        chrome.storage.sync.get(['groqApiKey'], async (result) => {
            const apiKey = result.groqApiKey;
            if (!apiKey) {
                sendResponse({ error: "Groq API Key not found. Please set it in the extension popup." });
                return true;
            }

            const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
            
            const prompt = `Generate three insightful and engaging comments for the following LinkedIn post. Each comment should be positive, professional, and encourage conversation. Respond with ONLY a valid JSON object in the format: { "comments": ["comment 1", "comment 2", "comment 3"] }. Do not include any other text or markdown. The post is:\n\n---\n\n${request.postText}`;

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        // Using the LATEST production model from the official list provided by the user
                        model: 'llama-3.1-8b-instant', 
                        messages: [
                            { 
                                role: 'user', 
                                content: prompt 
                            }
                        ],
                        response_format: { type: "json_object" }
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    const errorDetails = data?.error?.message || JSON.stringify(data);
                    throw new Error(`API Error: ${errorDetails}`);
                }
                
                const responseContent = JSON.parse(data.choices[0].message.content);
                const comments = responseContent.comments;

                if (!comments || !Array.isArray(comments) || comments.length === 0) {
                    throw new Error("API returned an unexpected format.");
                }

                sendResponse({ comments: comments });

            } catch (error) {
                console.error("Error calling Groq API:", error);
                sendResponse({ error: error.message });
            }
        });
        return true; 
    }
});
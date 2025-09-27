function addGenerateButton(postElement) {
    // Check if the button is already added to avoid duplicates
    if (postElement.querySelector('.ai-comment-generator-btn')) {
        return;
    }

    // Find the actions bar where Like/Comment buttons are located
    const actionsBar = postElement.querySelector('.feed-shared-social-action-bar__reactions-container, .social-details-social-activity, .feed-shared-social-action-bar');
    
    // If we can't find the actions bar, stop
    if (!actionsBar) {
        return;
    }

    const button = document.createElement('button');
    button.innerText = '✨ Generate Comment';
    button.className = 'ai-comment-generator-btn';
    
    // Styling for the button
    button.style.marginLeft = '8px';
    button.style.padding = '6px 12px';
    button.style.border = '1px solid #0a66c2';
    button.style.backgroundColor = 'white';
    button.style.color = '#0a66c2';
    button.style.borderRadius = '18px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = '600';
    button.style.fontSize = '14px';
    button.style.display = 'inline-flex';
    button.style.alignItems = 'center';

    button.onmouseover = () => { button.style.backgroundColor = '#eef3f8'; };
    button.onmouseout = () => { button.style.backgroundColor = 'white'; };


    button.onclick = async (e) => {
        e.preventDefault();
        
        // Find the main text content of the post
        const postContentElement = postElement.querySelector('.update-components-text, .feed-shared-update-v2__description-wrapper, .update-components-update-v2__commentary');
        
        if (!postContentElement) {
            alert('Could not find post content to analyze.');
            return;
        }

        const postText = postContentElement.innerText;
        button.innerText = 'Generating...';
        button.disabled = true;

        chrome.runtime.sendMessage({ action: "generateComment", postText: postText }, (response) => {
            button.innerText = '✨ Generate Comment';
            button.disabled = false;

            const oldSuggestions = postElement.querySelector('.ai-suggestions-container');
            if (oldSuggestions) {
                oldSuggestions.remove();
            }

            if (response.error) {
                alert(`Error: ${response.error}`);
            } else if (response.comments) {
                displaySuggestions(postElement, response.comments);
            }
        });
    };

    // Append the button to the actions bar
    actionsBar.appendChild(button);
}

function displaySuggestions(postElement, comments) {
    const container = document.createElement('div');
    container.className = 'ai-suggestions-container';
    container.style.border = '1px solid #ddd';
    container.style.borderRadius = '8px';
    container.style.padding = '12px';
    container.style.marginTop = '10px';
    container.style.backgroundColor = '#f9f9f9';

    const title = document.createElement('h4');
    title.innerText = 'AI Suggestions (Click to copy):';
    title.style.margin = '0 0 10px 0';
    title.style.color = '#333';
    container.appendChild(title);

    comments.forEach(commentText => {
        const suggestion = document.createElement('div');
        suggestion.innerText = `"${commentText}"`; // Add quotes for clarity
        suggestion.style.padding = '8px';
        suggestion.style.borderBottom = '1px solid #eee';
        suggestion.style.cursor = 'pointer';
        suggestion.style.borderRadius = '4px';

        suggestion.onmouseover = () => { suggestion.style.backgroundColor = '#eef3f8'; };
        suggestion.onmouseout = () => { suggestion.style.backgroundColor = 'transparent'; };

        suggestion.onclick = () => {
            navigator.clipboard.writeText(commentText).then(() => {
                const originalText = suggestion.innerText;
                suggestion.innerText = '✅ Copied!';
                suggestion.style.fontWeight = 'bold';
                suggestion.style.color = 'green';
                setTimeout(() => {
                    suggestion.innerText = originalText;
                    suggestion.style.fontWeight = 'normal';
                    suggestion.style.color = 'inherit';
                }, 1500);
            });
        };
        container.appendChild(suggestion);
    });
    
    // Place suggestions container right after the entire post block
    postElement.appendChild(container);
}


function scanForPosts() {
    // This selector is more stable for identifying individual feed items
    const posts = document.querySelectorAll('div[data-urn*="urn:li:activity:"], div[data-urn*="urn:li:share:"]');
    posts.forEach(addGenerateButton);
}

// Use a MutationObserver to detect when new posts are loaded into the feed (e.g., by scrolling)
const observer = new MutationObserver((mutations) => {
    // We run the scan function whenever the page structure changes
    scanForPosts();
});

// Start observing the main content area of the page for changes
const targetNode = document.querySelector('main');
if (targetNode) {
    observer.observe(targetNode, {
        childList: true,
        subtree: true
    });
}

// Run the initial scan when the script is first injected
setTimeout(scanForPosts, 2000); // Wait 2 seconds for the initial page load to settle
document.addEventListener('DOMContentLoaded', function() {
    const apiKeyInput = document.getElementById('apiKey');
    const saveBtn = document.getElementById('saveBtn');
    const statusDiv = document.getElementById('status');

    // Load saved API key (groqApiKey)
    chrome.storage.sync.get(['groqApiKey'], function(result) {
        if (result.groqApiKey) {
            apiKeyInput.value = result.groqApiKey;
        }
    });

    saveBtn.addEventListener('click', function() {
        const apiKey = apiKeyInput.value;
        if (apiKey) {
            // Save API key (groqApiKey)
            chrome.storage.sync.set({ 'groqApiKey': apiKey }, function() {
                statusDiv.textContent = 'API Key saved successfully!';
                setTimeout(() => {
                    statusDiv.textContent = '';
                }, 3000);
            });
        } else {
            statusDiv.textContent = 'Please enter a valid API Key.';
            statusDiv.style.color = 'red';
        }
    });
});
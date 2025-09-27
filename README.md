LinkedIn AI Comment Generator (Chrome Extension)
A powerful Chrome Extension that uses the blazing-fast Groq AI API to generate insightful and professional comments for LinkedIn posts. This tool helps you engage with your professional network more efficiently by providing relevant comment suggestions with a single click.
<!-- TODO: Add a GIF or screenshot of the extension in action. A short screen recording converted to a GIF is highly recommended. -->
![alt text](https://via.placeholder.com/800x450.png?text=Add+a+Screenshot+or+GIF+of+the+Extension)
✨ Features
Seamless Integration: Automatically adds a "✨ Generate Comment" button to every post in your LinkedIn feed.
Instant Suggestions: Generates three unique and context-aware comment suggestions.
Blazing Fast: Powered by the Groq API for near-instantaneous AI responses.
Completely Free: Uses Groq's generous free tier, requiring no credit card or billing information.
One-Click Copy: Simply click on your preferred suggestion to copy it to your clipboard.
Simple Setup: Easy to configure with your own free Groq API key.
🛠️ Technology Stack
Frontend: JavaScript (ES6+), HTML5, CSS3
Browser API: Chrome Extension Manifest V3
AI Backend: Groq API using the llama-3.1-8b-instant model.
🚀 Installation and Setup
Follow these steps to get the extension up and running on your local machine.
1. Clone the Repository
First, clone this repository to your local machine using Git:
code
Bash
git clone https://github.com/wpslakshitha/linkedin-comment-generator.git
(Replace your-username with your actual GitHub username)
2. Get a Free Groq API Key
This extension is powered by Groq, which offers a completely free and fast API.
Go to the Groq Console.
Sign up for a new account using your Google account or email (it's free and no credit card is required).
Once logged in, navigate to the API Keys section.
Click "+ Create API Key".
Give your key a name (e.g., "LinkedIn Extension") and click "Create".
Important: Your new API key (starting with gsk_...) will be displayed. Copy this key immediately and save it somewhere safe. You will not be able to see it again after you close the window.
3. Load the Extension in Chrome
Open your Google Chrome browser.
Navigate to chrome://extensions.
In the top-right corner, toggle on "Developer mode".
Three new buttons will appear. Click on "Load unpacked".
A file selection dialog will open. Navigate to and select the linkedin-comment-generator folder that you cloned in Step 1.
The extension icon should now appear in your Chrome toolbar.
4. Configure the Extension
Click on the "LinkedIn AI Comment Generator" icon in your Chrome toolbar.
A small popup will appear. Paste the Groq API key you copied in Step 2 into the input field.
Click the "Save Key" button.
That's it! The setup is complete.
💡 How to Use
Navigate to your LinkedIn Feed.
Find any post you want to comment on. You will see a new "✨ Generate Comment" button next to the standard "Like" and "Comment" buttons.
Click the button. It will show "Generating..." for a moment.
A box with three AI-generated comment suggestions will appear below the post.
Click on any suggestion you like. It will automatically be copied to your clipboard.
Click on the main "Comment" button on LinkedIn, paste (Ctrl+V or Cmd+V) your copied comment, and post it!
📂 File Structure
A brief overview of the key files in this project:
code
Code
.
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── background.js       # Handles communication with the Groq API.
├── content.js          # Injects the button and suggestions into the LinkedIn page.
├── manifest.json       # The core configuration file for the Chrome Extension.
├── popup.html          # The HTML for the API key entry popup.
├── popup.js            # The JavaScript logic for saving the API key.
└── README.md           # You are here!
📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

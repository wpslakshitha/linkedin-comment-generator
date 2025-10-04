# LinkedIn AI Comment Generator (v1.1)

A professional Chrome Extension that uses the blazing-fast Groq AI API to generate insightful and engaging comments for LinkedIn posts. This advanced tool helps you build your professional brand and engage with your network more efficiently by providing relevant, customizable comment suggestions with a single click.

<!-- TODO: Add a GIF or screenshot of the extension in action. A short screen recording converted to a GIF is highly recommended. -->
![Demo Screenshot](https://via.placeholder.com/800x450.png?text=Add+a+Screenshot+or+GIF+of+the+Extension)

## ✨ Features

-   **Seamless Integration:** Automatically adds a "✨ Generate Comment" button to posts in your LinkedIn feed and on individual profile pages.
-   **Professional UI:** A clean, modern, and intuitive user interface for managing settings.
-   **Customizable AI Prompts:** Personalize the AI's tone and style by editing and saving your own default prompt.
-   **Instant Suggestions:** Generates three unique and context-aware comment suggestions per post.
-   **Blazing Fast:** Powered by the Groq API for near-instantaneous AI responses.
-   **Completely Free:** Uses Groq's generous free tier, requiring no credit card or billing information.
-   **One-Click Copy:** Simply click on your preferred suggestion to copy it to your clipboard.
-   **Email Subscription:** A one-time, mandatory email subscription on first use to receive updates and news about the extension.

## 🛠️ Technology Stack

-   **Frontend:** JavaScript (ES6+), HTML5, CSS3
-   **Browser API:** Chrome Extension Manifest V3
-   **AI Backend:** Groq API using the `llama-3.1-8b-instant` model.

## 🚀 Installation and Setup

You can install this extension in two ways: via the Chrome Web Store (recommended for most users) or by loading it manually (for developers).

### Method 1: Install from Chrome Web Store (Coming Soon!)

*(Once your extension is published, you can add the link here.)*

1.  Go to the [LinkedIn AI Comment Generator page on the Chrome Web Store]().
2.  Click "Add to Chrome".
3.  The extension will be installed and ready to configure.

### Method 2: Manual Installation (For Developers)

Follow these steps to get the extension up and running on your local machine.

1.  **Download or Clone:** Download this repository as a ZIP file and unzip it, or clone it using Git:
    ```bash
    git clone https://github.com/wpslakshitha/linkedin-comment-generator.git
    ```
    *(Replace `your-username` with your actual GitHub username)*

2.  **Load the Extension in Chrome:**
    1.  Open your Google Chrome browser and navigate to `chrome://extensions`.
    2.  In the top-right corner, toggle on **"Developer mode"**.
    3.  Click on the **"Load unpacked"** button.
    4.  Select the `linkedin-comment-generator` folder that you downloaded/cloned.

The extension icon will now appear in your Chrome toolbar.

## ⚙️ First-Time Configuration

The first time you click the extension icon, you'll be asked to subscribe. This is a one-time step.

1.  **Subscribe:**
    *   Click the extension icon in your Chrome toolbar.
    *   A professional popup will appear asking for your name and email.
    *   Fill in your details and click "Subscribe & Continue". This is mandatory to unlock the settings.

2.  **Configure Settings:**
    *   After subscribing, the settings page will appear.
    *   **Get a Free Groq API Key:** Go to the [Groq Console](https://console.groq.com/keys), sign up for a free account (no credit card needed), and create a new API key. Copy the key (`gsk_...`).
    *   **Enter API Key:** Paste your Groq API key into the "Groq API Key" field.
    *   **Customize Prompt (Optional):** You can edit the default prompt in the "Custom Prompt" text area to change the AI's tone or instructions.
    *   Click **"Save Settings"**.

That's it! The setup is complete.

## 💡 How to Use

1.  Navigate to your [LinkedIn Feed](https://www.linkedin.com/feed/) or any user's profile page.
2.  Find any post you want to comment on. You will see a new **"✨ Generate Comment"** button next to the standard action buttons.
3.  Click the button. It will show "Generating..." for a moment.
4.  A box with three AI-generated comment suggestions will appear below the post.
5.  Click on any suggestion you like. It will automatically be copied to your clipboard.
6.  Click on the main "Comment" box on LinkedIn, paste (`Ctrl+V` or `Cmd+V`) your copied comment, and post it!

## 📂 File Structure

```
.
├── images/
│   ├── icon16.png, icon48.png, icon128.png
├── background.js       # Handles communication with the Groq API.
├── content.js          # Injects the button and suggestions into the LinkedIn page.
├── content.css         # Basic styles for injected elements.
├── manifest.json       # The core configuration file for the Chrome Extension.
├── popup.html          # The HTML for the professional settings popup.
├── popup.css           # Styles for the popup UI.
├── popup.js            # The JavaScript logic for subscription and saving settings.
└── README.md           # You are here!
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

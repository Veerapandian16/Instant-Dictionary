# 📘 Instant Dictionary Chrome Extension

**Instant Dictionary** is a user-friendly Chrome extension designed to enhance your browsing experience by providing instant word definitions and example sentences. Simply double-click any word on a webpage, and a stylish popup appears with the word’s definition and an example sentence, fetched from the Dictionary API.

The extension features a modern gradient-styled popup with a smooth fade-in animation, making it both functional and visually appealing. Built with HTML, CSS, and JavaScript, it’s lightweight, privacy-conscious, and works on any webpage.

---

## 🚀 Features

- 🔍 **Instant Word Lookup**: Double-click a word to instantly view its definition and example sentence.
- 🎨 **Elegant Popup Design**: Gradient background (gray to blue), white text, rounded corners, and a smooth fade-in animation.
- 🔐 **Privacy-Focused**: No user data is collected or stored. Uses only the Dictionary API.
- 🌐 **Universal Compatibility**: Operates on all webpages via `<all_urls>` permission.
- ❗ **Error Handling**: Gracefully handles API errors or missing data.
- ⏳ **Loading State**: Displays a “Loading...” message during API fetch for a smooth user experience.

---

## 🧰 Installation

### ✅ Prerequisites

- Google Chrome browser
- (Optional) VS Code for editing
- (Optional) Git for cloning

### 📦 Steps

1. **Clone or Download the Repository**:
   - Clone:  
     ```bash
     git clone https://github.com/your-username/instant-dictionary-extension.git
     ```
   - Or download the ZIP and extract it to a folder named `instant-dictionary-extension`.

2. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked**
   - Select the `instant-dictionary-extension` folder

3. **Verify Folder Contents**:
   Ensure the folder contains:
   - `manifest.json`
   - `content.js`
   - `content.css`
   - *(Optional)* `icon16.png`, `icon48.png`, `icon128.png`

---

## 🧪 Usage

1. Go to any webpage (e.g., [Wikipedia](https://en.wikipedia.org/wiki/Main_Page))
2. Double-click any word like **"dog"** or **"learn"**
3. A popup appears near your cursor showing:
   - **Definition**: e.g., "A canine mammal..."
   - **Example Sentence**: e.g., "The dog barked loudly." (or “No example available”)

4. Click anywhere outside the popup to dismiss it.

---

## 🖼️ Screenshots

Add screenshots to a folder named `screenshots/`.  
Include images like:

- Popup after double-click
- Extension enabled in Chrome
- Responsive behavior on smaller screens

---



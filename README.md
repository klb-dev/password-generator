# 🔐 Modern Password Generator Extension

A sleek and secure browser extension that generates strong, customizable passwords instantly — with a stylish dark/light mode toggle and clean user interface.

## ✨ Features

- ✅ Generate passwords **with or without symbols**
- 🎨 Toggle between **dark and light themes**
- ⚡ Instantly displays a single password with smooth animation
- 📦 Works on **Chrome**, **Edge**, and **Firefox**
- 📋 Clean, minimal UI using modern CSS (Inter font, responsive layout)

## 📸 Preview

![password generator screenshot](./screenshot.png) *(Optional — add a screenshot of the popup)*

## 🔧 How to Use

1. Click on either:
   - `With Symbols` — for full-strength passwords including `!@#$%^&*()`
   - `Without Symbols` — for alphanumeric-only passwords

2. Copy the password from the generated output field.
3. Use the `Dark/Light` toggle for theme switching.

## 🔌 Installation (Unpacked)

1. Download or clone this repo.
2. Go to your browser's extension settings:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
   - **Firefox**: `about:debugging#/runtime/this-firefox`
3. Enable **Developer Mode**.
4. Click **"Load unpacked"** and select the extension folder.

## 📁 Project Structure

/extension-root/ 
├── index.html # Extension popup layout 
├── script.js # Password generation + theme logic 
├── style.css # Styling and animation 
├── manifest.json # Extension manifest (v3) └── icons/ # Browser action icons 
├── icons # icons for extention different sizes
├── background.js for extention feature
├── moon.svg # moon icon for toggle feature 
└── sun.svg # sun icon for toggle feature


## 🛡️ Password Logic

- Default length: `15 characters`
- Symbol characters include: `~!@#$%^&*()_+-=[]{},.<>?/`
- Alphanumeric passwords filter out non-letter/number characters
- No spaces, no weak stuff — just pure password power

## 📌 TODO (Future Enhancements)

- [ ] "Copy to Clipboard" button
- [ ] Password strength meter
- [ ] Options to choose length and character types
- [ ] Auto-copy on click

## 🧠 Author

**Karen B.** – Blue Byrd Development [Blue Byrd Development Logo](icons/bbd-logo.png) 
Made with love and passion for web development. 🚀�

## 📄 License

MIT License — free to use, modify, and improve.


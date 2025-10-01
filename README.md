# Unitaste Redirect Portal

A professional redirect portal for Unitaste with dealer registration form functionality.

## 🚀 Live Demo

Visit: [https://yourusername.github.io/unitaste-redirect-portal](https://yourusername.github.io/unitaste-redirect-portal)

## 📋 Features

- ✅ Clean redirect portal with two options:
  - **Sygmetiv** → Redirects to Sygmetiv platform
  - **Dealer Benefit Scheme 2025** → Local registration form
- ✅ Professional dealer registration form
- ✅ Email notifications via EmailJS
- ✅ Responsive design for mobile and desktop
- ✅ Kerala districts dropdown
- ✅ Form validation and error handling

## 🛠️ Setup for GitHub Pages

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and login
2. Click "New Repository"
3. Name it: `unitaste-redirect-portal`
4. Make it **Public**
5. Don't initialize with README (we have one)
6. Click "Create repository"

### 2. Upload Files
```bash
git init
git add .
git commit -m "Initial commit - Unitaste redirect portal"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/unitaste-redirect-portal.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Your Live URL
After 2-3 minutes, your site will be live at:
`https://YOURUSERNAME.github.io/unitaste-redirect-portal`

## 📧 Email Configuration

The form uses EmailJS for sending emails. Current configuration:
- **Service**: Gmail integration
- **Recipients**: shakirshaki245@gmail.com, renjithpm@unitaste.in
- **Template**: Dealer registration details

## 📁 Project Structure

```
├── index.html          # Main redirect page
├── form.html           # Dealer registration form  
├── style.css           # Styling for all pages
├── script.js           # EmailJS functionality
├── logo-unitaste.png   # Company logo
├── package.json        # Project metadata
└── README.md           # This file
```

## 🎯 Usage

1. **QR Code Solution**: Point your QR codes to the GitHub Pages URL
2. **Users see two options**: Sygmetiv or Dealer Registration
3. **Form submissions**: Automatically sent via email
4. **Mobile responsive**: Works on all devices

## 🔧 Customization

- **Update redirect URLs**: Edit `script.js` → `redirectTo()` function
- **Change styling**: Modify `style.css`
- **Update email recipients**: Change EmailJS config in `script.js`
- **Add/remove form fields**: Edit `form.html` and update email template

## 📱 Mobile Optimized

- Responsive design works on all screen sizes
- Touch-friendly interface
- Optimized for mobile QR code scanning

## 🎨 Design Features

- Modern gradient background
- Smooth animations and transitions
- Professional company branding
- Clean, minimal interface
- Fast loading times

## 📞 Support

For issues or modifications, contact the development team.

---

**Built for Unitaste - Premium Food Supplier & Distribution**
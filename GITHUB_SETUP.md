# Unitaste Redirect Portal - GitHub Setup Instructions

## 🚀 Quick GitHub Pages Deployment

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and login
2. Click **"New Repository"** (green button)
3. Repository name: `unitaste-redirect-portal`
4. Make it **Public**
5. **Don't** check "Initialize with README"
6. Click **"Create repository"**

### Step 2: Upload Your Files
Open PowerShell in your Form folder and run these commands:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Unitaste redirect portal"

# Set main branch
git branch -M main

# Add your GitHub repository (replace YOURUSERNAME with your GitHub username)
git remote add origin https://github.com/YOURUSERNAME/unitaste-redirect-portal.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** tab (at the top)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**

### Step 4: Get Your Live URL
After 2-5 minutes, your site will be live at:
```
https://YOURUSERNAME.github.io/unitaste-redirect-portal
```

## 🎯 What You Get

✅ **Free Hosting**: GitHub Pages is completely free
✅ **Custom Domain**: You can add your own domain later  
✅ **HTTPS**: Automatic SSL certificate
✅ **Fast CDN**: Global content delivery
✅ **Auto Deploy**: Updates automatically when you push changes

## 📱 Perfect for QR Codes

Your QR codes can now point to:
`https://YOURUSERNAME.github.io/unitaste-redirect-portal`

## 🔄 Making Updates

To update your site later:
```powershell
# Make your changes to files
# Then run:
git add .
git commit -m "Updated form/design/etc"
git push origin main
```

Site updates automatically in 1-2 minutes!

## 🌐 Optional: Custom Domain

If you want to use your own domain (like `redirect.unitaste.com`):
1. Go to repository Settings → Pages
2. Add your custom domain
3. Update your DNS settings
4. GitHub will provide SSL certificate

## 🎉 You're Done!

Your professional redirect portal is now live on the internet with:
- Fast loading times
- Mobile responsive design  
- Working email functionality
- Professional appearance
- Zero hosting costs

Perfect solution for your QR code redirect needs! 🚀
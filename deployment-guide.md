# Hepatoburn Affiliate Landing Page - Deployment Guide

## Files Included in Package

- `index.html` - The main HTML file for the landing page
- `styles.css` - The primary stylesheet for the landing page
- `optimization.css` - Additional CSS optimizations for performance and accessibility
- `conversion-tracking.js` - JavaScript for tracking user interactions and conversions
- `images/` - Directory containing all image assets for the landing page

## Deployment Instructions

### Option 1: Deploy to a Web Hosting Service

1. **Sign up for web hosting**:
   - Choose a reliable web hosting provider (e.g., Bluehost, HostGator, SiteGround)
   - Select a basic hosting plan (shared hosting is sufficient for this landing page)
   - Register a domain name related to weight loss or liver health if you don't already have one

2. **Upload files to your hosting**:
   - Access your hosting control panel (usually cPanel)
   - Use the File Manager or FTP client to upload all files
   - Maintain the same directory structure as in the package
   - Upload all files to the public_html directory (or www directory depending on your host)

3. **Verify deployment**:
   - Visit your domain in a web browser
   - Check that all elements load correctly
   - Test all links and buttons
   - Verify that your affiliate ID is correctly included in all links

### Option 2: Deploy Using GitHub Pages (Free)

1. **Create a GitHub account** if you don't already have one

2. **Create a new repository**:
   - Name it something related to your landing page (e.g., "hepatoburn-landing")
   - Make it public

3. **Upload files to the repository**:
   - Upload all files maintaining the same directory structure
   - Commit the changes

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to GitHub Pages section
   - Select "main" branch as the source
   - Click Save

5. **Access your published site**:
   - GitHub will provide a URL like `https://yourusername.github.io/hepatoburn-landing`
   - Your landing page is now live

### Option 3: Deploy Using Netlify (Free)

1. **Create a Netlify account** at netlify.com

2. **Deploy your site**:
   - Drag and drop the entire folder containing your landing page files onto the Netlify dashboard
   - Netlify will automatically upload and deploy your site
   - You'll get a random URL like `random-name.netlify.app`

3. **Configure custom domain** (optional):
   - Purchase a domain from a domain registrar
   - Add the domain in Netlify settings
   - Follow Netlify's instructions to configure DNS settings

## Customization Instructions

### Changing Your Affiliate ID

1. Open `index.html` in a text editor
2. Search for "hop=zzzzz" (appears multiple times)
3. Replace "zzzzz" with your actual Hepatoburn affiliate ID
4. Save the file and re-upload if already deployed

### Adding Your Own Images

1. Replace the placeholder images in the `images/` directory with your own
2. Make sure to maintain the same filenames or update the references in the HTML
3. Optimize your images for web (compress them) using tools like TinyPNG

### Updating Contact Information

1. Modify the footer section in `index.html` to include your contact information
2. Update privacy policy and terms of service links if you have your own

## Tracking and Analytics

### Setting Up Google Analytics

1. Create a Google Analytics account if you don't have one
2. Set up a new property for your landing page
3. Get your tracking code
4. Add the tracking code just before the closing `</head>` tag in `index.html`

### Tracking Conversions

The landing page already includes conversion tracking code in `conversion-tracking.js`. To connect it to your analytics:

1. Open `conversion-tracking.js`
2. Find the `trackEvent` function
3. Uncomment and modify the Google Analytics section with your tracking code
4. Save and re-upload the file

## Maintenance and Updates

- Regularly check that all links are working
- Update testimonials and offers as new information becomes available
- Monitor your analytics to identify areas for improvement
- A/B test different headlines or CTAs to optimize conversion rates

## Need Help?

If you need assistance with deployment or have questions about customizing your landing page, please don't hesitate to reach out.

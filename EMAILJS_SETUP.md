# EmailJS Setup Guide

Your contact form is now configured to use EmailJS! Follow these steps to get it working:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your email account
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. You'll see a template editor with several fields:

### Fill in these fields exactly:

**Subject Line:**
```
New Contact from {{name}}
```

**Content (the main email body):**
```
You received a new message from your website!

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent from fitzhaile.com contact form
```

**Settings (on the right side):**
- **To Email:** fitz@fitzhaile.com *(your email)*
- **From Name:** {{name}}
- **From Email:** *(leave as default, usually noreply@emailjs.com)*
- **Reply To:** {{email}}

4. Click **Save** at the top
5. **Copy your Template ID** from the top of the page (it looks like `template_abc123xyz`)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (starts with letters/numbers)
3. **Copy your Public Key**

## Step 5: Add Credentials to Your Code
Open `app/[[...section]]/HomePageClient.js` and replace:

```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID from Step 3
  e.target,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key from Step 4
);
```

## Step 6: Test It!
1. Save your changes
2. Refresh your website
3. Click "Get Started" or "Let's Talk"
4. Fill out the form and submit
5. Check your email!

## Example Template Variables
Your form sends these fields to EmailJS:
- `{{name}}` - From the name input
- `{{email}}` - From the email input  
- `{{message}}` - From the message textarea

## Troubleshooting
- **Not receiving emails?** Check your spam folder
- **Getting errors?** Make sure all three IDs are correct
- **Need help?** Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

## Security Note
The credentials you're adding are **public keys** - they're safe to include in your frontend code. EmailJS handles all the security on their end.


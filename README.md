# Next.js 15 + NextAuth.js + Google Provider Setup

This project uses Next.js 15 with NextAuth.js and Google as the authentication provider.

## 🔧 Getting Started

1. Clone the repository:
   git clone <your-repo-url>
   cd <your-project-folder>

2. Install dependencies:
   npm install

3. Create a .env.local file in the root directory and add the following:

   NEXTAUTH_SECRET=your_random_secret_key  
   NEXTAUTH_URL=http://localhost:3000  
   GOOGLE_CLIENT_ID=your_google_client_id  
   GOOGLE_CLIENT_SECRET=your_google_client_secret  

   To generate a secure NEXTAUTH_SECRET, run:
   openssl rand -base64 32

4. Start the development server:
   npm run dev

   App should now be running at: http://localhost:3000

## 🔐 Google OAuth Setup

1. Go to https://console.cloud.google.com/
2. Create a new project (or use an existing one).
3. Go to APIs & Services > Credentials.
4. Click "Create Credentials" > "OAuth client ID".
5. Select "Web Application" and configure:
   - Authorized redirect URI:
     http://localhost:3000/api/auth/callback/google

6. Copy the generated Client ID and Client Secret into your .env.local file.

## ✅ Production Notes

- Update NEXTAUTH_URL to your production domain before deploying.
- Add your production callback URL to Google Cloud Console.
- Keep NEXTAUTH_SECRET safe and secure.
- Consider using HTTPS in production environments.

## 🧪 Useful Commands

- Install dependencies: npm install  
- Run dev server: npm run dev  
- Generate secret: openssl rand -base64 32

---

Happy hacking! 🚀

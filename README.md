# 🔎 Automation Hub - A simplified way to find & share automation ideas 🚀

Unlike other webpages which provides automation codes for dedicated automation tool - We focused more on centralizing this, letting the users to share variety of automations ideas using different automation tools such as n8n, Blue Prism, Zapier, and many more...

## 🚀 Features

### 🛠️ Explore Automations
- Diversity of ideas
- One-click to copy workflows
- Options to share ideas on a variety of automation tools  

### 🔐 Authentication System
- JWT-based authentication  
- Secure user registration with email verification and Authorization 
- Profile management with ability to clear user's data  

### 🔍 Advanced Search & Discovery
- Multi-source search across different automation tools.
- Real-time filtering by title and use-case.

### ⚡ UI/UX
- User-friendly and intuitive experience  
- Beautiful loading skeletons for handling blocking requests
  
## 🛠️ Tech Stack

### Full Stack
- **Next.js** - Full-stack React framework (frontend + backend APIs)  
- **NeonDB** - Serverless PostgreSQL database  
- **Simple JWT** - Authentication system    

### UI & Styling
- **React 18** - UI library (used within Next.js)  
- **TailwindCSS** - Utility-first styling

# 🚀 Getting Started & Quick Set-ups

### Project Structure 

'''bash
'''

### ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/automation-hub.git
cd automation-hub
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**

Create a `.env` file in the root directory:
```env
DATABASE_URL=your-neondb-url
JWT_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

### 🌐 Access the Application

- Next.js App: http://localhost:3000
- Check out **sitemap.xml** for endpoints

## Deployment

Want to have a look of project?
[https://automation-nth1jkt0w-abhis-projects-2707c71b.vercel.app/](https://automation-hub-tawny.vercel.app/)

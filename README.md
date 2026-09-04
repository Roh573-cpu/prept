# 🎯 Prept — The AI-Powered Interview Marketplace

**Prept** is a full-stack SaaS marketplace that connects **interviewees** with real **interviewers** for live, 1-on-1 mock interview sessions — enhanced with an AI-assisted question panel, in-call chat, screen sharing, session recording, and a built-in credit-based payout system for interviewers.

🔗 **Live App:** [prept-nine-tan.vercel.app](https://prept-nine-tan.vercel.app)

---

## ✨ Overview

Most interview prep tools are either static question banks or one-sided AI chatbots. **Prept** is different — it's a real **marketplace**: interviewers set their availability and get paid (in credits) for every session they take, while interviewees book real people for real practice, on their own schedule.

Every session runs through a live video call with chat, screen sharing (for task-based rounds), and recording — and interviewers get an **AI-powered question panel** to generate topic-specific questions on the fly, keeping every interview sharp and relevant.

---

## 🚀 Key Features

### For Interviewees
- 🔍 **Browse & Book Interviewers** — Choose an available interviewer and pick a convenient time slot
- 🎥 **Live 1-on-1 Video Calls** — Real-time interviews powered by Stream
- 💬 **In-Call Chat** — Message alongside the video during the session
- 🖥️ **Screen Sharing** — For coding rounds or task-based assignments
- 📼 **Session Recording** — Revisit your interview afterward

### For Interviewers
- 🗓️ **Availability Management** — Set and update the time slots you're open to interview in
- 💳 **Credit System** — Earn **+1 credit** automatically whenever an interviewee books your slot
- 🏦 **Redeemable Earnings** — Redeem credits via an admin-verified process, with verification emails sent through Resend
- 🧠 **AI Question Panel** — Select a topic mid-call and instantly generate relevant questions to ask the candidate
- 💬 **In-Call Chat & Screen Share** — Same real-time tools available to run a structured, task-based interview

### Platform-Wide
- 🔐 **Dual-Role Authentication** — Sign in as either an Interviewer or an Interviewee via Clerk
- 🛡️ **Abuse & Bot Protection** — Powered by Arcjet
- 📧 **Transactional & Verification Emails** — Booking confirmations and credit-redemption verification via Resend
- 🗄️ **Type-Safe Data Layer** — Prisma ORM over Supabase (PostgreSQL)
- 🎨 **Clean, Accessible UI** — Built with shadcn/ui and Tailwind CSS
- ⚡ **Modern, Fast Frontend** — Next.js App Router

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js16](https://nextjs.org/) , React19 |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + Tailwind CSS |
| Authentication | [Clerk](https://clerk.com/) (dual-role: interviewer / interviewee) |
| Real-Time Video & Chat | [Stream](https://getstream.io/) |
| Database | [Supabase](https://supabase.com/) (PostgreSQL) |
| ORM | [Prisma](https://www.prisma.io/) |
| Security / Rate Limiting | [Arcjet](https://arcjet.com/) |
| Transactional Email | [Resend](https://resend.com/) |
| Hosting / Deployment | [Vercel](https://vercel.com/) |

---

## 🏗️ How It Works

### As an Interviewee
1. Sign in and browse available interviewers
2. Book a 1-on-1 session at a time slot the interviewer has marked available
3. Join the call — chat, share your screen for tasks, and get recorded automatically
4. Booking the slot deposits **+1 credit** into the interviewer's account

### As an Interviewer
1. Sign in and set your availability
2. Get booked by interviewees — earn credits per session
3. During the call, use the **AI question panel**: pick a topic, generate questions, and ask them live
4. Redeem earned credits through an admin email-verification flow (powered by Resend)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- A Supabase project (PostgreSQL database)
- API keys for Clerk, Stream, Arcjet, and Resend

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/prept.git
cd prept

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# then fill in your keys (see below)

# Push Prisma schema to your database
npx prisma generate
npx prisma db push

# Run the development server
npm run dev
```

Visit `http://localhost:3000` to see it running locally.

---

## 🔑 Environment Variables

Create a `.env.local` file with the following:

```env
# Database
DATABASE_URL=
DIRECT_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

# Stream
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

# Arcjet
ARCJET_KEY=
ARCJET_ENV=

# Resend
RESEND_API_KEY=
ADMIN_PAYOUT_PASSWORD=

# OpenAI for AI Integration (Gemini)
GEMINI_API_KEY=

```

---

## 📁 Project Structure

```
prept/
├── app/                # Next.js App Router pages & API routes
├── components/         # Reusable UI components (shadcn/ui based)
├── lib/                # Utility functions, service clients (Stream, Resend, Arcjet, etc.)
├── prisma/              # Prisma schema & migrations
└── public/              # Static assets
```

---

## 🗺️ Roadmap

- [ ] Post-interview AI feedback reports
- [ ] Interviewer ratings & reviews
- [ ] Direct payout integration (beyond credit redemption)
- [ ] Analytics dashboard for interviewers (sessions taken, earnings)
- [ ] Mobile-friendly interview experience

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a PR.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

Built by **[Your Name]** — feel free to reach out for feedback, collaboration, or questions.

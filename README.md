🧠 AssignMate — AI-Assisted Assignment Rewriter

AssignMate is a multi-mode AI writing assistant designed for students who want clearer, more natural assignment writing without losing academic credibility.

Unlike typical “AI rewriters,” AssignMate is built around an honest trade-off model:
professional quality vs AI-detection risk — and gives users control over that balance.

🚀 Live Demo

Frontend: 👉 your Vercel URL here

Backend API: 👉 your Render URL here

✨ Key Features
🔁 Three Rewrite Modes (Core Innovation)
Mode Purpose AI Detection Risk
🎓 Academic Formal, professional rewriting High
⚖️ Balanced (Recommended) Academic + light human variation Medium
🔥 Aggressive Strong human-style rewriting Low

Each mode is intentionally designed for different real-world needs, not false promises.

🧠 Two-Stage AI Pipeline (Balanced Mode)

Balanced mode uses a two-stage rewriting architecture:

Stage 1: Academic-quality rewrite (clarity & correctness)

Stage 2: Light humanization (sentence rhythm & variation)

This approach significantly reduces AI detection without compromising academic tone.

🚦 Built-in Safety & Cost Controls

✅ Rate limiting (5 requests/min per IP)

✅ Input caps (1000 words max)

✅ Clear user feedback for limits

✅ API key fully protected (never exposed to frontend)

Designed to be safe for public deployment.

🌗 Clean, Modern UI

Light & Dark mode

Glassmorphism-inspired design

Smooth transitions & animations

Mobile-friendly

Clear UX explanations for rewrite modes

🛠️ Tech Stack
Frontend

React (TypeScript)

Vite

Tailwind CSS

Deployed on Vercel

Backend

Node.js

Express

Google Gemini API

express-rate-limit

Deployed on Render

🧩 How It Works (High Level)

User selects a rewrite mode

Text is sent securely to backend

Backend:

validates input

applies rate limits

selects AI prompt strategy

Gemini API generates rewritten text

Result is returned to frontend with UX feedback

All AI logic and secrets remain server-side.

⚠️ Important Disclaimer

AssignMate does not guarantee:

plagiarism immunity

Turnitin bypass

AI-detector evasion

AI detection tools are inconsistent and evolving.
AssignMate is designed to improve writing quality and human-likeness, not to deceive academic systems.

🎯 Why This Project Matters

Most student AI tools:

chase “0% AI detection”

hide trade-offs

ignore academic realism

AssignMate takes a transparent, ethical, and engineering-driven approach:

users choose the balance

risks are explained

system behavior is predictable

📸 Screenshots

(Add screenshots of UI here once you want extra polish)

👨‍💻 Author

Built by Devansh Yadav
Computer Science undergraduate exploring AI systems, product engineering, and responsible AI tooling.

📌 Future Improvements

User accounts & usage history

Mode usage analytics

Paid tiers with higher limits

Export formats (PDF / DOCX)

Caching & performance optimizations

⭐ Final Note

This project was built to learn real-world AI product engineering, not just to call an API.

If you’re a student, developer, or recruiter — feel free to explore the code and architecture.

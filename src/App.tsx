import { useEffect, useState } from "react";

type Mode = "academic" | "balanced" | "aggressive";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<Mode>("balanced");
  const [dark, setDark] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Clear error when user edits text or mode
  useEffect(() => {
    if (error) setError(null);
  }, [text, mode]);

  const handleRewrite = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult("");
    setError(null);

    try {
      const res = await fetch("https://assignmate-backend-wkq9.onrender.com/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Request failed. Please try again.");
        return;
      }

      setResult(data.rewrittenText);
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border-b border-white/20 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            ✍️ AssignMate
          </h1>
          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-3 py-1 rounded-lg bg-gray-200/60 dark:bg-slate-700/60 transition"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto mt-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-lg p-6">
        <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
          Paste your assignment text
        </label>

        <textarea
          rows={10}
          className="w-full rounded-xl p-4 border border-gray-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition"
          placeholder="Paste your assignment content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {text.trim() ? text.trim().split(/\s+/).length : 0} words (max 1000)
        </p>

        {/* Mode Selector */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["academic", "balanced", "aggressive"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as Mode)}
              className={`px-4 py-1.5 rounded-full text-sm transition
                ${
                  mode === m
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200"
                }`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowInfo(true)}
          className="mt-2 text-sm underline text-gray-500 dark:text-gray-400"
        >
          What do these modes mean?
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-4 rounded-xl border border-red-300 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-3 text-sm">
            ⚠️ {error}
          </div>
        )}

        <button
          onClick={handleRewrite}
          disabled={loading || !text.trim()}
          className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-xl font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Rewrite"}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="max-w-4xl mx-auto mt-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 animate-fadeIn">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Rewritten Output
          </h2>
          <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
            {result}
          </p>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="mt-3 border px-4 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            Copy
          </button>
        </div>
      )}

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-semibold mb-4">
              Rewrite Modes Explained
            </h3>
            <div className="space-y-4 text-sm">
              <p><strong>🎓 Academic:</strong> Professional, formal, higher AI detection.</p>
              <p><strong>⚖️ Balanced:</strong> Best mix of quality and human feel.</p>
              <p><strong>🔥 Aggressive:</strong> Lowest AI detection, less formal.</p>
            </div>
            <button
              onClick={() => setShowInfo(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-10 pb-6">
        ⚠️ AI-based assistance. Not an official plagiarism or AI-detection guarantee.
      </p>
    </div>
  );
}

export default App;

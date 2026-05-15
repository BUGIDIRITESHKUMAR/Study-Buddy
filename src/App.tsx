import { BookOpen } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <BookOpen size={28} color="#6366f1" />
        <h1>StudyBuddy</h1>
      </header>
      <main className="app-main">
        <div className="app-card">
          <h2>Welcome to StudyBuddy</h2>
          <p>
            Your AI-powered study companion. Ask questions, get explanations,
            and accelerate your learning — all powered by Google Gemini.
          </p>
        </div>
      </main>
    </div>
  );
}

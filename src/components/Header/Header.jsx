import "./Header.css";

export default function Header() {
  return (
    <header className="game-header">
      <h1 className="game-title">The Last High-Level Language</h1>
      <p className="game-instructions">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
    </header>
  );
}

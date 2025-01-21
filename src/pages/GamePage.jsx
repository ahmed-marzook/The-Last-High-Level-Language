import "./GamePage.css";

export default function GamePage() {
  return (
    <div className="game-content">
      <header className="game-header">
        <h1 className="game-title">The Last High-Level Language</h1>
        <p className="game-instructions">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section>
        <div className="game-notice">&quot;Farewell HTML & CSS&quot;</div>
      </section>
      <section className="languages-lives">
        <div className="language-life">Python</div>
        <div className="language-life">JavaScript</div>
        <div className="language-life">Java</div>
        <div className="language-life">C++</div>
        <div className="language-life">Ruby</div>
        <div className="language-life">C#</div>
        <div className="language-life">C</div>
        <div className="language-life">Assembly</div>
      </section>
      <section className="user-answer-grid">
        <div className="letter-answer">R</div>
        <div className="letter-answer">R</div>
        <div className="letter-answer">R</div>
        <div className="letter-answer">R</div>
        <div className="letter-answer"></div>
        <div className="letter-answer"></div>
        <div className="letter-answer">R</div>
        <div className="letter-answer">R</div>
      </section>
      <main className="game-keyboard">
        <div className="row">
          <button className="key">Q</button>
          <button className="key">W</button>
          <button className="key">E</button>
          <button className="key">R</button>
          <button className="key">T</button>
          <button className="key">Y</button>
          <button className="key">U</button>
          <button className="key">I</button>
          <button className="key">O</button>
          <button className="key">P</button>
        </div>
        <div className="row">
          <button className="key">A</button>
          <button className="key">S</button>
          <button className="key">D</button>
          <button className="key">F</button>
          <button className="key">G</button>
          <button className="key">H</button>
          <button className="key">J</button>
          <button className="key">K</button>
          <button className="key">L</button>
        </div>
        <div className="row">
          <button className="key">Z</button>
          <button className="key">X</button>
          <button className="key">C</button>
          <button className="key">V</button>
          <button className="key">B</button>
          <button className="key">N</button>
          <button className="key">M</button>
        </div>
      </main>
      <footer>
        <div>
          A{" "}
          <a href="https://github.com/ahmed-marzook">KaizenFlow Technologies</a>{" "}
          project by{" "}
          <a href="https://github.com/ahmed-marzook/The-Last-High-Level-Language-Learning-React">
            Ahmed Marzook
          </a>
        </div>
        <div>
          Inspired by <a href="https://scrimba.com/@bobziroll">Bob Ziroll</a>
        </div>
      </footer>
    </div>
  );
}

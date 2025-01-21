import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import UserAnswers from "../components/WordGrid/WordGrid";
import "./GamePage.css";

export default function GamePage() {
  return (
    <div className="game-content">
      <Header />
      <section>
        <div className="game-notice">&quot;Farewell HTML & CSS&quot;🫡</div>
      </section>
      <LivesDisplay />
      <UserAnswers />
      <Keyboard />
      <Footer />
    </div>
  );
}

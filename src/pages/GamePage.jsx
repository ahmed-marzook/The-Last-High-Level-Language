import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import Notice from "../components/Notice/Notice";
import UserAnswers from "../components/WordGrid/WordGrid";
import "./GamePage.css";

export default function GamePage() {
  return (
    <div className="game-content">
      <Header />
      <Notice />
      <LivesDisplay />
      <UserAnswers />
      <Keyboard />
      <Footer />
    </div>
  );
}

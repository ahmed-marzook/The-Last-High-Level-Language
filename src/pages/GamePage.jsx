import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import UserAnswers from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import { keyboardLayout } from "../data/keyboardLayout";

export default function GamePage() {
  return (
    <div className="game-content">
      <Header />
      <LivesDisplay attemptsLeft={8} />
      <UserAnswers />
      <Keyboard keyboardLayout={keyboardLayout} />
      <Footer />
    </div>
  );
}

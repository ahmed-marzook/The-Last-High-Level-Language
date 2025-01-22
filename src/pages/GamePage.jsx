import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Keyboard from "../components/Keyboard/Keyboard";
import LivesDisplay from "../components/LivesDisplay/LivesDisplay";
import WordGrid from "../components/WordGrid/WordGrid";
import "./GamePage.css";
import { keyboardLayout } from "../data/keyboardLayout";

export default function GamePage() {
  return (
    <div className="game-content">
      <Header />
      <LivesDisplay attemptsLeft={0} />
      <WordGrid word={"PINEAPPlE"} />
      <Keyboard keyboardLayout={keyboardLayout} />
      <Footer />
    </div>
  );
}

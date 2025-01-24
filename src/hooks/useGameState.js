import { useState } from "react";

import JSConfetti from "js-confetti";

import { keyboardLayout } from "../data/keyboardLayout";
import { getRandomCategory } from "../utility/getRandomCategories";
import { updateKeyboardLayout } from "../utility/updateKeyboardLayout";
import { generateWord } from "../utility/wordGenerator";

const INITIAL_ATTEMPTS = 8;
const GAME_STATES = {
    PLAYING: "playing",
    WON: "won",
    GAME_OVER: "gameOver",
};

export default function useGameState() {
    const [keyboard, setKeyboard] = useState(keyboardLayout);
    const [category, setCategory] = useState(getRandomCategory());
    const [word, setWord] = useState(() => generateWord(category));
    const [guessedLetters, setGuessedLetters] = useState(new Set([]));
    const [remainingAttempts, setRemainingAttempts] = useState(INITIAL_ATTEMPTS);
    const [gameStatus, setGameStatus] = useState("playing");
    const [showHint, setShowHint] = useState(false);

    const wordSet = new Set(word.toUpperCase());
    const jsConfetti = new JSConfetti();

    const newGame = () => {
        const newCategory = getRandomCategory();
        setCategory(newCategory);
        setShowHint(false);
        setWord(generateWord(newCategory));
        setKeyboard(keyboardLayout);
        setGuessedLetters(new Set());
        setRemainingAttempts(INITIAL_ATTEMPTS);
        setGameStatus(GAME_STATES.PLAYING);
    };

    const handleGameWon = () => {
        setGameStatus(GAME_STATES.WON);
        jsConfetti.addConfetti({
            emojis: ["🏆", "⭐", "🎉", "🎊", "🌟", "✨"],
        });
    };

    const handleGameOver = () => {
        setGameStatus(GAME_STATES.GAME_OVER);
        setGuessedLetters(wordSet);
        jsConfetti.addConfetti({
            emojis: ["😢", "💔", "😭", "🤦", "😫", "💀"],
        });
    };

    const handleLetterGuess = (letter) => {
        setKeyboard((prevKeyboard) => {
            if (wordSet.has(letter)) {
                setGuessedLetters((prev) => {
                    const newGuessed = new Set(prev).add(letter);
                    if (newGuessed.size === wordSet.size) {
                        handleGameWon();
                    }
                    return newGuessed;
                });
                return updateKeyboardLayout(prevKeyboard, letter, "correct");
            } else {
                setRemainingAttempts(() => {
                    const newAttempts = remainingAttempts - 1;
                    if (newAttempts < 1) {
                        handleGameOver();
                    }
                    return newAttempts;
                });
                return updateKeyboardLayout(prevKeyboard, letter, "incorrect");
            }
        });
    };

    return {
        newGame,
        handleLetterGuess,
        setShowHint,
        keyboard,
        category,
        word,
        guessedLetters,
        remainingAttempts,
        gameStatus,
        showHint
    }
}
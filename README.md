# The Last High-Level Language

A dystopian twist on the classic Hangman game where the stakes are humanity's programming future. With each failed guess, another programming language is eliminated from existence. Fail to guess the word in time, and the world will be forever doomed to program only in Assembly.

Project from [Scrimba Learn React Cource](https://scrimba.com/learn-react-c0e)

## Features

- 🎯 8 attempts to save the programming world
- 💻 Programming-themed word bank
- 🌍 Progressive language elimination system
- 🎮 Interactive keyboard interface
- 📱 Responsive design for all devices

## Technologies Used

- React
- npm
- node
- Modern JavaScript (ES6+)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/last-high-level-language.git
cd The-Last-High-Level-Language-Learning-React
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Customization

### Adding New Words

Modify the `WORDS` array in the main component:

```javascript
const WORDS = [
  "PROGRAMMING",
  "JAVASCRIPT",
  // Add more words here
];
```

### Modifying Language Elimination Sequence

Update the `LANGUAGE_ELIMINATIONS` array to change the order or add new languages:

```javascript
const LANGUAGE_ELIMINATIONS = [
  {
    attempts: 7,
    message: "⚠️ [Language] has been eliminated...",
    language: "[Language]",
  },
  // Add more eliminations
];
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License - feel free to use this project for learning, inspiration, or building your own version!

## Credit

Created by Kaizenflow - A tribute to all high-level languages that make our programming lives easier.

## Future Enhancements

- [ ] Add difficulty levels
- [ ] Include programming language-specific word categories
- [ ] Add sound effects for eliminations
- [ ] Create an "Assembly Mode" visual theme
- [ ] Add multiplayer support
- [ ] Include programming language logos
- [ ] Add hints system

## Support

If you find any bugs or have feature requests, please create an issue in the GitHub repository.

---

Remember: Every line of high-level code you save brings humanity one step further from the Assembly apocalypse! 🚀

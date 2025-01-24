const CATEGORIES = ["animals", "food", "transportation", "sports", "place"];

export const getRandomCategory = () =>
    CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
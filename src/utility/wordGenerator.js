import { generateSlug } from "random-word-slugs";

export const generateWord = (category) => {
    const options = {
        format: "camel",
        partsOfSpeech: ["noun"],
        categories: {
            noun: [category],
        },
    };
    return generateSlug(1, options).toUpperCase();
};
import { useState } from "react";
import { shuffle } from "../utils/arrayUtils";


export const useDeck = () => {
    const cards = Array.from(Array(54).keys());
    const [drawnDeck, setDrawnDeck] = useState<number[]>([]);
    const [mainDeck, setMainDeck] = useState<number[]>(shuffle(cards));
    const [currentCard, setCurrentCard] = useState<number>();

    const generateBoard = (): number[] => {
        const shuffledDeck: number[] = shuffle(cards);
        return shuffledDeck.slice(0, 16);
    };

    const draw = () => {
        if (mainDeck.length) {
          const drawnCard = mainDeck.pop();
          if(drawnCard) {
            setCurrentCard(drawnCard);
            setDrawnDeck([...drawnDeck, drawnCard]);
          }
        }
    };
    
    const reset = () => {
        setDrawnDeck([]);
        const shuffledDeck: number[] = shuffle(cards);
        setMainDeck(shuffledDeck);
        setCurrentCard(0);
    }

    return {
        generateBoard,
        draw,
        drawnDeck,
        mainDeck,
        currentCard,
        reset,
    };
}

import { FC, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDeck } from "../hooks/useDeck";
import Card from "./Card";

import back from "../img/back.png";
import CardFrame from "./CardFrame";
import useGameData from "../hooks/useGameData";
import { useParams } from "react-router-dom";

const Deck: FC = () => {
  const { code } = useParams();
  const { gameData } = useGameData(code ?? '');

  const { drawnDeck, mainDeck, draw, reset } = useDeck();
  return (
    <>
      <section className="d-flex justify-content-center flex-row align-items-start">
        <Button variant="link" onClick={draw}>
          {mainDeck.length ? (
            <img width={80} src={back} alt="facedown deck" />
          ) : null}
        </Button>
        <div className="ms-4 mt-3 position-relative">
          {drawnDeck.map((card) => (
            <CardFrame key={card} seed={card}>
              <Card cardNumber={card} />
            </CardFrame>
          ))}
        </div>
      </section>
      <Button onClick={reset}>Reset</Button>
    </>
  );
};

export default Deck;

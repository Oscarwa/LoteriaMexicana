import { FC, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useDeck } from "../hooks/useDeck";
import useValidator from "../hooks/useValidator";
import Card from "./Card";

interface BoardProps {
  boardCards: number[];
}

const Board: FC<BoardProps> = ({ boardCards }) => {
  const { validate } = useValidator();
  const [tokens, setTokens] = useState<Record<number, boolean>>({});

  const handleClick = (cardIndex: number) => {
    const copy = {...tokens};
    const t = copy[cardIndex] ?? false;
    copy[cardIndex] = !t;
    setTokens(copy);
    // console.log('---------');
    // console.log('horizontal', validateHorizontalLines(schema, copy));
    // console.log('vertical', validateVerticalLines(schema, copy));
    // console.log('center', validateCenter(schema, copy));
    // console.log('corners', validateCorners(schema, copy));
    // console.log('diagonals', validateDiagonals(schema, copy));
    // console.log('loteria!', validateLoteria(schema, copy));
    // console.log('They won', validate(schema, copy));
  };

  const onReset = () => {
    setTokens({})
  }

  const schema = useMemo((): number[][] => {
    const result: number[][] = [];
    const chunkSize = 4;
    for (let i = 0; i < boardCards.length; i += chunkSize) {
        const chunk = boardCards.slice(i, i + chunkSize);
        result.push(chunk);
    };
    return result;
  }, [boardCards]);

  return (
    <section className="d-flex flex-column justify-content-center">
      {schema.map((row, i) => (
        <div key={i} className="d-flex">
          {row.map((c, j) => (
            <Card key={j} cardNumber={c} onClick={() => handleClick(c)} hasToken={tokens[c]} />
          ))}
        </div>
      ))}
      <Button onClick={onReset} >Reset</Button>
    </section>
  );
};

export default Board;

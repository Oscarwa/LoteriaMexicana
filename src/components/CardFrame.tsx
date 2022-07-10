import { FC } from "react";
import useOffset from "../hooks/useOffset";
import './cards.css';

interface CardFrameProps {
    seed?: number;
}

const HALF_DECK = 27;

const CardFrame: FC<CardFrameProps> = ({seed = HALF_DECK, children}) => {
  const { getOffset } = useOffset();

    return (
      <div
        className={`card-frame`}
        style={{
          transform: `rotate(${getOffset(
            seed,
            20
          )}deg) translateX(${getOffset(seed, 16)}px) translateY(${getOffset(
            seed,
            17
          )}px)`,
        }}
      >
        {children}
      </div>
    );
}

export default CardFrame;
import { FC } from "react";
import useImage from "../hooks/useImage";
import useOffset from "../hooks/useOffset";
import token from "../img/token.png";

interface CardProps {
    cardNumber: number;
    onClick?: () => void;
    hasToken?: boolean;
}

const Card: FC<CardProps> = ({cardNumber, onClick, hasToken}) => {
    const { image } = useImage(cardNumber);
    const { getOffset } = useOffset();
    
    return (
      <div onClick={onClick} className="position-relative">
        {hasToken ? (
          <img
            src={token}
            alt="token"
            className="position-absolute"
            width={40}
            style={{top: 20 + getOffset(cardNumber, 40), left: 8 + getOffset(cardNumber, 10)}}
          />
        ) : null}
        <img className="lottery-card" src={image ?? ""} alt={`${cardNumber}`} />
      </div>
    );
}

export default Card;
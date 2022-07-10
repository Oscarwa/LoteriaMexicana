import { FC } from "react";
import { Link } from "react-router-dom";

const NewGame: FC = () => {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <Link className="h2 my-4" to="/join">Join a game</Link>
        <Link className="h2 my-4" to="/host">Host a game</Link>
      </ div>
    );
}

export default NewGame;
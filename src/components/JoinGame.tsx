import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGameData from "../hooks/useGameData";
import useGameList from "../hooks/useGameList";

const JoinGame: FC = () => {
  const navigate = useNavigate();

  const { joinableGameList } = useGameList();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const { joinGame, gameData } = useGameData(code ?? "");

  const onJoin = useCallback(() => {
    joinGame(code, name);
    navigate(`/game/${code}/${name}`);
  }, [code, joinGame, name, navigate]);

  useEffect(() => {
    if (!!code && gameData.status === "success") {
      onJoin();
    }
  }, [code, gameData.status, onJoin]);

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Your name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      {joinableGameList?.map((game, index) => { 
        console.log(`game ${index + 1}`, game)
        return (
        <div key={index}>
          {`[${game.host}] is hosting a game (${Object.keys(game.players ?? {})?.length} players) ...`}{" "}
          <button
            disabled={name.length <= 2}
            onClick={() => setCode(game.code)}
          >
            Join
          </button>
        </div>
      )})}
    </section>
  );
};

export default JoinGame;

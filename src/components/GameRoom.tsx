import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGameData from "../hooks/useGameData";

const GameRoom: FC = () => {
  const { code = "", nameTag = "" } = useParams();
  const { gameData } = useGameData(code);

  useEffect(() => {
    console.log("game:", gameData);
  }, [gameData]);

  return (
    <section className="container">
      {!!gameData && !!gameData.data ? (
        <>
          <div>
            Host: &nbsp;
            {gameData.data.host}
          </div>
          {gameData.data.players ? (
            <div>
              Players in room:
              {Object.values(gameData.data.players).map((p, index) => (
                <div key={index}>{p === nameTag ? <b>{p}</b> : p}</div>
              ))}
            </div>
          ) : null}
        </>
      ) : <>Waiting for players to join...</>}
    </section>
  );
};

export default GameRoom;

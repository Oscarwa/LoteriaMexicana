import { getDatabase, push, ref, set } from "firebase/database";
import { useDatabaseObjectData, useFirebaseApp } from "reactfire";
import { GameState, IGame } from "../models/game";

const useGameData = (code: string) => {
  const app = useFirebaseApp();
  const db = getDatabase(app);

  const gameRef = ref(db, `games/${code}`);
  const playersRef = ref(db, `games/${code}/players`)

  const createGame = (code: string, nameTag: string) => {
    if (gameData.status === "success") {
      // do stuff
      if (gameData.data === null) {
        console.log("game created");
        const newGame: IGame = {
          host: nameTag,
          state: GameState.Waiting,
          code: code.toString(),
          players: [],
          active: true,
        };
        set(gameRef, newGame);
      }
    }
  };

  const joinGame = (code: string, nameTag: string) => {
    if (gameData.status === "success") {
      // do stuff
      if (gameData.data !== null) {
        console.log("Joined to game");
        push(playersRef, nameTag);
      }
    }
  };

  const gameData = useDatabaseObjectData<IGame>(gameRef);

  return { gameData, createGame, joinGame };
};

export default useGameData;

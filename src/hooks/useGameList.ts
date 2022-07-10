import { getDatabase, ref } from "firebase/database";
import { useMemo } from "react";
import { useDatabaseListData, useFirebaseApp } from "reactfire"
import { GameState, IGame } from "../models/game";

const useGameList = () => {
    const app = useFirebaseApp();
    const db = getDatabase(app);
    
    const gameRef = ref(db, `games`);

    const { data } = useDatabaseListData<IGame>(gameRef);

    const joinableGameList = useMemo(() => {
        return data?.filter((item) => {
            return item.active && item.state === GameState.Waiting;
        })
    }, [data])

    return { joinableGameList };
}

export default useGameList;
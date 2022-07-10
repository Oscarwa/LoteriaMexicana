export enum GameState {
    Waiting = 0,
    Started = 1,
    Finished = 2
}

export interface IGame {
    code: string;
    host: string
    players: string[];
    active: boolean;
    state: GameState;
}

export interface IPlayer {
    name: string;
}
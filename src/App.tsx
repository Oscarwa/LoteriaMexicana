import { getAuth } from 'firebase/auth';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import Board from './components/Board';
import GameRoom from './components/GameRoom';
import JoinGame from './components/JoinGame';
import NewGame from './components/NewGame';
import NewRoom from './components/NewRoom';
import { useDeck } from './hooks/useDeck';

const App: FC = () => {
  const auth = getAuth();
  const { generateBoard } = useDeck();

  return (
    <AuthProvider sdk={auth}>
      <div>
        <h1 className="h1">Loteria Mexicana</h1>
        <Container className='py-5'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NewGame />} />
              <Route path="/join" element={<JoinGame />} />

              <Route
                path="/board"
                element={<Board boardCards={generateBoard()} />}
              />
              <Route path="/host" element={<NewRoom />} />
              <Route path="/game/:code/:nameTag" element={<GameRoom />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;

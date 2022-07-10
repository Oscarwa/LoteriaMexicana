import { FC, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useGameData from "../hooks/useGameData";

const NewRoom: FC = () => {
  const navigate = useNavigate();
  const [code] = useState(new Date().getTime().toString());
  const [name, setName] = useState('');
  const { createGame } = useGameData(code);

  const handleCreate = () => {
    createGame(code, name);
    navigate(`/game/${code}/${name}`);
  };
  return (
    <Container>
      <h1>Create a game</h1>
      <div className="p-4"></div>
      <div>
        <input
          type="text"
          placeholder="Your name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>

      <Button onClick={handleCreate} disabled={name.length <= 2}>Create</Button>
    </Container>
  );
};

export default NewRoom;

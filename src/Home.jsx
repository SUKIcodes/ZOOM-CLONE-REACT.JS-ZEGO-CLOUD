import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/room/${roomID}`);
  };
  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="YOUR ROOM"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
        />
        <button type="submit">ENTER ROOM</button>
      </form>
    </div>
  );
};

export default Home;

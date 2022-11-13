import React, { useEffect, useState } from "react";

class Connection {
  constructor(roomId) {
    this.roomId = roomId;
  }
  connect() {
    console.info(`connecting to #${this.roomId}`);
  }
  disconnect() {
    console.info(`disconnecting to #${this.roomId}`);
  }
}

const ChatRoom = ({ roomId }) => {
  console.info(`render ChatRoom: #${roomId}`);

  useEffect(
    function chatRoomUseEffectCallback() {
      const connection = new Connection(roomId);

      connection.connect();

      return function disconnectRoom() {
        connection.disconnect();
      };
    },
    [roomId]
  );

  return <h3>Welcome to {roomId} </h3>;
};

const ROOM_IDS = ["general", "travel", "food"];

function Example() {
  console.info(`render Example`);

  const [roomId, setRoomId] = useState("general");

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  useEffect(function appUseEffectCallback() {
    console.info(`useEffect in Example`);

    return function cleanupInApp() {
      console.info(`clean up in Example`);
    };
  });

  return (
    <div>
      <select onChange={handleRoomIdChange}>
        {ROOM_IDS.map((id) => (
          <option value={id} key={id}>
            {id}
          </option>
        ))}
      </select>
      <ChatRoom roomId={roomId} />
    </div>
  );
}

export default function App() {
  console.info(`render App`);
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    console.info(`useEffect in app`);

    return function appCleanup() {
      console.info(`app cleanup`);
    };
  });

  const handleButtonClick = () => {
    setShowExample((prev) => !prev);
  };

  return (
    <React.Fragment>
      <button onClick={handleButtonClick}>toggle</button>
      {showExample && <Example />}
    </React.Fragment>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 862746656;
    const serverSecret = "ab6bcb4fb76b4e436cdb1c2f5023301d";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "KING"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;

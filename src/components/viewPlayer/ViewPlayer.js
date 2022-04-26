import React, { useEffect, useState } from "react";
import { getPlayer } from "../../service";

function ViewPlayer(props) {
  const [player, setPlayer] = useState({});
  console.log(props);
  useEffect(() => {
    getPlayer().then((res) => {
      console.log(res);
    });
  });
  return <div>Nishant Sahoo</div>;

}

export default ViewPlayer;

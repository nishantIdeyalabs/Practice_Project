import React, { useEffect, useState } from "react";
import { getPlayers } from "../../service";
import Player from "../player/Player";

function Players() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPlayers().then((res) => {
      //   console.log(res.data);
      setData(res.data);
    });
  });
  //   console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        // console.log(item);
        return <Player key={index} item={item} />;
      })}
    </div>
  );
}

export default Players;

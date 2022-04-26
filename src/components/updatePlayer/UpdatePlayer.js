import React, { useEffect, useState } from "react";
import { getPlayers } from "../../service";
import Player from "../player/Player";

function UpdatePlayer() {
  const [player, setplayer] = useState({
    id: 0,
    name: "",
    country: "",
    category: "",
    image: "",
  });
  const CATEGORIES = [
    "Select Category",
    "batter",
    "All Rounder",
    "bowler",
    "Fielder",
  ];
  useEffect(() => {
    // getPlayers().then((res) => {
    //   //   console.log(res.data);
    //   setData(res.data);
    // });
  });
  //   console.log(data);
  return <div>Update Player</div>;
}

export default UpdatePlayer;

import React, { useEffect, useState } from "react";
import { deletePlayer, getPlayers } from "../../service";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Header from "../header/Header";

function Player(props) {
  const [isOpen, setIsOpen] = useState("");
  //   console.log(props);
  const buttons = (view, id) => {
    if (!view) {
      return (
        <Button
          color="danger"
          onClick={() => (window.location = `/player/${id}`)}
        >
          View Player
        </Button>
      );
    } else {
      return (
        <ButtonGroup>
          <Button color="danger">Edit Player</Button>
          <Button
            onClick={() =>
              deletePlayer(id).then((res) => (window.location = `/players`))
            }
            color="danger"
          >
            Delete Player
          </Button>
        </ButtonGroup>
      );
    }
  };
  return (
    <>
      <Header />
      <Card className="ml-4 Player">
        <CardImg
          top
          style={{ width: 400, height: 400 }}
          src={props.item.image}
          // alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.item.name}</CardTitle>
          <CardSubtitle>{props.item.id}</CardSubtitle>
          <CardText>
            {props.item.category}, {props.item.country}
          </CardText>
          {buttons(props.view, props.item.id)}
        </CardBody>
      </Card>
    </>
  );
}

export default Player;

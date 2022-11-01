import React from "react";
import "./MainContainerStyle.css";
import { Window } from "../window/Window";

const MainContainer = () => {
  const date = new Date();
  const currentDate = date.getDate();

  // the beginning of the counting is november 3rd, so the first window is marked as thisDay=3

  return (
    <div className="background">
      <Window currentDate={currentDate} name="diver" thisDay={3} num={0} />
      <Window currentDate={currentDate} name="shark" thisDay={4} num={1} />
      <Window currentDate={currentDate} name="submarine" thisDay={5} num={2} />
      <Window currentDate={currentDate} name="astrodome" thisDay={6} num={3} />
      <Window currentDate={currentDate} name="plant" thisDay={7} num={4} />
      <Window currentDate={currentDate} name="fish" thisDay={8} num={5} />
      <Window currentDate={currentDate} name="bubble" thisDay={9} num={6} />
      <div className="hydropolis" />
      <div className="bubbles bub1" />
      <div className="bubbles bub2" />
      <div className="bubbles bub3" />
      <div className="bubbles bub4" />
      <div className="fish-circle" />
    </div>
  );
};

export { MainContainer };

import React from 'react';
import "./MainContainerStyle.css";
import { Window } from '../window/Window';

const MainContainer = () => {
  const date = new Date();
  const currentDate = date.getDate();

  return (
    <div className="background">
      <Window currentDate={currentDate} name="diver" thisDay={1} />
      <Window currentDate={currentDate} name="shark" thisDay={1} />
      <Window currentDate={currentDate} name="plant" thisDay={1} />
      <Window currentDate={currentDate} name="astrodome" thisDay={1} />
      <Window currentDate={currentDate} name="fish" thisDay={1} />
      <Window currentDate={currentDate} name="bubble" thisDay={1} />
      <Window currentDate={currentDate} name="submarine" thisDay={1} />
      <div className="hydropolis"/>
      <div className="bubbles bub1"/>
      <div className="bubbles bub2"/>
      <div className="bubbles bub3"/>
      <div className="bubbles bub4"/>
      <div className="fish-circle"/>
    </div>
  )
};

export { MainContainer };
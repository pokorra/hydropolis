import React from 'react';
import "./MainContainerStyle.css";
import { Window } from '../window/Window';

const MainContainer = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const [isOn, setIsOn] = React.useState(false)
  const handleToggle = () => isOn ? setIsOn(false) : setIsOn(true);

  return (
    <div className="background">
      <Window currentDate={currentDate} name="diver" thisDay={9} isBtnDsbled={isOn}/>
      <Window currentDate={currentDate} name="shark" thisDay={6} isBtnDsbled={isOn}/>
      <Window currentDate={currentDate} name="plant" thisDay={7} isBtnDsbled={isOn}/>
      <Window currentDate={currentDate} name="astrodome" thisDay={5} isBtnDsbled={isOn}/>
      <Window currentDate={currentDate} name="fish" thisDay={8} isBtnDsbled={isOn}/>
      <Window currentDate={currentDate} name="bubble" thisDay={4} isBtnDsbled={isOn}/>
      <Window currentDate={currentDate} name="submarine" thisDay={3} isBtnDsbled={isOn}/>
      <div className="hydropolis"/>
      <div className="bubbles bub1"/>
      <div className="bubbles bub2"/>
      <div className="bubbles bub3"/>
      <div className="bubbles bub4"/>
      <div className="fish-circle"/>
      <button className="toggle" onClick={handleToggle}>on/off</button>
    </div>
  )
};

export { MainContainer };
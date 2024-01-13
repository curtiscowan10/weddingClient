import { useTheme } from "@mui/material/styles";
import "./Home.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import React from "react";
import FlowerArrangement from '../../../assets/whiteFloral.png';

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Typography variant="h2" fontWeight={700} style={{ fontFamily: "Alex Brush" }}>Curtis<br />&<br />Rebecca</Typography>
        <Typography variant="subtitle1" fontWeight='600'>04.07.2024</Typography>
        <Typography variant="subtitle1" fontWeight='600'>Castle Leslie Estate, Monaghan</Typography>
      </div>
      <div className="home__content__img" style={{backgroundImage: `url(${FlowerArrangement})`}}/>
    </div>
  );
}

export default Home;

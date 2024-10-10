import React, { useState } from "react";
import Background from "./Compnents/Background/Background";
import Navbar from "./Compnents/Navbar/Navbar";
import Hero from "./Compnents/Hero/Hero";
const App = () => {
  let heroData = [
    { text1: "dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to ", text2: "your passion" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background  playStatus={playStatus} heroCount = {heroCount} />
      {/* as a props passs kiya playStatus aur heroCount ko */}
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData = {heroData [heroCount] }
      heroCount = {heroCount}
      setHeroCount= {setHeroCount}
      playStatus = {playStatus}
      />
    </div>
  );
};
export default App;




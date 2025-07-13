import React from "react";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import locations from "../../data.json"

function Home() {

  return (
    <div>
      <Hero
        image="IMG.png"
        text="Chez vous, partout et ailleurs"
      />
      <Gallery locations={locations} />
    </div>
  );
}

export default Home;

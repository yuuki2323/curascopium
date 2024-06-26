import React from "react";
import Header from "../../topComponets/Header";
import News from "@/app/topComponets/News";

export const runtime = "edge";

const Home = () => {
  return (
    <>
      <Header />
      <News />
    </>
  );
};

export default Home;

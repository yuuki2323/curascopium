import React from "react";
import { format } from "date-fns";
import Title from "../../ui/Title";
import Header from "../../topComponets/Header";
import { Link } from "@/navigation";
import { MicroCMSPost, getList } from "../../../../libs/client";
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

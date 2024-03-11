import Header from "@/app/topComponets/Header";
import React from "react";
import { getList } from "../../../../libs/client";


const Home = async () => {
  const { contents } = await getList;
  return (
    <main className="">
        <Header />
        <section className="container pt-36 pb-4 text-xl mx-auto">
          <h2></h2>
        </section>
    </main>
  );
};

export default Home;

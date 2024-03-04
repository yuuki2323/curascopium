import Image from "next/image";
import Header from "./topComponets/Header";
import Topphoto from "./topComponets/Topphoto";
import News from "./topComponets/News";
import History from "./topComponets/History";
import Purpose from "./topComponets/Purpose";
import Member from "./topComponets/Member";
import Business from "./topComponets/Business";
import Contact from "./topComponets/Contact";

export default function Home() {
  return (
    <main className="bg-bg-black ">
      <Header />
      <Topphoto/>
      <div className="bg-bg bg-contain bg-opacity-10">
        <News/>
        <History/>
        <Purpose/>
        <Member/>
        <Business/>
        <Contact/>
      </div>
    </main>
  );
}

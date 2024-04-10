
import Header from "./topComponets/Header";
import Topphoto from "./topComponets/Topphoto";
import News from "./topComponets/News";
import History from "./topComponets/History";
import Purpose from "./topComponets/Purpose";
import Member from "./topComponets/Member";
import Business from "./topComponets/Business";
import Contact from "./topComponets/Contact";
import ReturnTopButton from "./topComponets/ReturnTopButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Topphoto/>
      
      <div className="mx-8 md:mx-0">
      <News/>
        <History/>
        <Purpose/>
        <Member/>
        <Business/>
        <Contact/>
        <ReturnTopButton/>
      </div>

    </main>
  );
}

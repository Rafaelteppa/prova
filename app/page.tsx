import Header from "./components/Header";
import Banner from "./components/Banner";


import Program from "./components/Program";
import Header2 from "./components/Header2";
//import Personal from "./components/Personal";
import Join_Grid from "./components/Join_Grid";
import Footer_Bar from "./components/Footer_Bar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Program/>
      <Header2/>
     <Join_Grid/>
     <Footer/>
     <Footer_Bar/>
    </div>
 
  )
}
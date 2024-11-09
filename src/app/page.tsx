
import Header from "./components/header";
import About from "./components/about";
import Navbar from "./components/navbar";
import Aallary from "./components/gallary";
import Menu from "./components/menu";
import Client from "./components/client";


export default function Home(){
    return(
        <div className="bg-[#f5f5dc]">
        <Header />
        <About />
        <Menu />
        <Aallary/>
        <Client />
        </div>
    )
}
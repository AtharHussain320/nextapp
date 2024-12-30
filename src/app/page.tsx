
import Header from "./components/header";
import About from "./components/about";
import Navbar from "./components/navbar";
import Gallary from "./components/gallary";
import Menu from "./components/menu";
import Client from "./components/client";
import Slide from "./components/slide";


export default function Home(){
    return(
        <div className="bg-[#f5f5dc]">
        <Header />
        <About />
        <Menu />
        <Gallary/>
        <Client />
        <Slide />
        </div>
    )
}
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"


export const Layout = () =>{
    return(
        <main>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </main>
    )
}
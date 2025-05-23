import { Outlet } from "react-router";
import ProfileHeader from "./components/UniversalComponents/ProfileHeader";
import Footer from "./components/UniversalComponents/Footer";
import { useLocation } from "react-router";

import Portrait from "/assets/profile.svg";

export default function Layout() {
    const location = useLocation();
    let headerContent;
    let footerContent;


    if(location.pathname === "/dogs") {
        headerContent = <ProfileHeader 
        portrait={Portrait}
        />;
        footerContent = <Footer/>;
    }else if(location.pathname.startsWith("/details/")) {
        headerContent = <header></header>;
    }else{
        headerContent = <header></header>;
    }
    return (
        <>
        <header>
        {headerContent}
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            {footerContent}
        </footer>
        </>
    )
}
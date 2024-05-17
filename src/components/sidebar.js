import { Link, useLocation } from "react-router-dom/dist";

// component
import SidebarBtn from "./sidebar-btn";

// utili
import { navs } from "../utilities/navs";

// media
import logo_text from './../medias/imgs/onix_logo_text.png'
import wallet_angle from './../medias/icons/ang_down.png'
import eth_logo from './../medias/imgs/eth.png'






const Sidebar = () => {

    const pathlocation = useLocation()

    return ( 
        <div className="sidebar-column flex column justify-space-between">
            <div className="">
                <div className="sidebar-logo-cont">
                    <img src={logo_text} alt="" />
                </div>

                {navs.map((nav, index) => (
                    <SidebarBtn
                        linkPath={nav.pathlink}
                        linkName={nav.pathname}
                        iconsrc={nav.icon}
                        classProps={pathlocation.pathname === nav.pathlink ? 'active' : ''}
                    />
                ))}
            </div>

            <div className="">
                <div className="flex row align-center gap-7 network-wallet-btn cursor-pointer">
                    <img src={eth_logo} className="network-icon" alt="" />
                    <p className="cairo_f semi-bold_w">0x....8447</p>
                    <div className="network-angle-box flex justify-center align-center">
                        <img src={wallet_angle} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;
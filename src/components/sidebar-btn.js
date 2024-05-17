import { Link } from "react-router-dom/dist";

const SidebarBtn = ({ iconsrc, classProps, linkName, linkPath }) => {
    return (
        <Link className={`sidebar-btn ` + classProps} to={linkPath}>
            <img src={iconsrc} alt="" />
            <p className={`semi-bold_w cairo_f`}>{linkName}</p>
        </Link>
    );
}
 
export default SidebarBtn;
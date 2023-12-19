
import "../Header/Header.scss"
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";


export default function Header() {
    // const [changeColor, setChangeColor] = useState(false)

    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 10) {
    //         setChangeColor(true);
    //     } else {
    //         setChangeColor(false);
    //     }
    // };
    // window.addEventListener("scroll", changeNavbarColor);

    const navigate = useNavigate()

    // togggle parents
    const closeNavbar = () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        // Check if the navbar is currently open before toggling
        if (navbarToggler.classList.contains("collapsed")) {
            return;
        }

        navbarToggler.classList.add("collapsed");
        navbarCollapse.classList.remove("show");
    };

    // toggle sub parent
    const navigateAndCloseNavbar = (to) => {
        navigate(to);
        closeNavbar();
    };


    return (
        <section className="header-wrapper  stickyNav shadow-lg ">
            <div className="header-container ">

                <nav id={"navbar"} className="navbar navbar-expand-lg bg-body-tertiary p-0   ">
                    <div className={`container-fluid px-4 `}>

                        <NavLink className="navbar-brand">
                            <img loading="lazy" src="https://www.bhutanigroup.com/front/img/logo.png" alt="img" />
                        </NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-iconn"><BiMenuAltRight /></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                                <li className="nav-item navItem">
                                    <NavLink onClick={closeNavbar} to={"/"} className="nav-link  navLink " >Home</NavLink>
                                </li>

                                <li className="nav-item navItem">
                                    <NavLink onClick={closeNavbar} to={"/about"} className="nav-link navLink " >About Us</NavLink>
                                </li>

                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link navLink dropdown-toggle " onClick={() => { navigate("/ourproject") }} role="button" data-bs-toggle="dropdown" aria-expanded="false">Properties</NavLink>
                                    <ul className="dropdown-menu">

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link" onClick={() => navigateAndCloseNavbar("ourproject/alphathum")} role="button" data-bs-toggle="dropdown" aria-expanded="false">Alphathum</NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/alphainfinity"} className="dropdown-item">Alpha Infinity</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/alphapride"} className="dropdown-item">Alpha Pride</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/ultimapods"} className="dropdown-item">Ultima Pods</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/cloudcowork"} className="dropdown-item">Cloud Co Works</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/alphathummypod"} className="dropdown-item">Alphathum Mypod</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/skybhutani"} className="dropdown-item">Sky Bhutani</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/terminalaz"} className="dropdown-item">Terminal AZ</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/alphathum/ethereacowork"} className="dropdown-item">Etherea co Work</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link" onClick={() => navigateAndCloseNavbar("ourproject/cyberthum")} role="button" data-bs-toggle="dropdown" aria-expanded="false">Cyberthum</NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/cyberthum/retailspace"} className="dropdown-item">Retail Space</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/cyberthum/officespace"} className="dropdown-item">Office Space</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/cyberthum/gamingandentertainment"} className="dropdown-item">Gaming & Entertainment</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/cyberthum/coworkingspace"} className="dropdown-item">Co Working Space</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/cyberthum/foodandbeverage"} className="dropdown-item">Food & Beverage</NavLink>
                                                </li>

                                            </ul>
                                        </li>


                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/bhutanicitycenter150")} role="button" data-bs-toggle="dropdown" aria-expanded="false">City Center 150</NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/centralglam"} className="dropdown-item">Central Glam</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/gadgetstreet"} className="dropdown-item">Gadget Street</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/citycentrbolt"} className="dropdown-item">City Center Bolt</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/centraldine"} className="dropdown-item">Central Dine</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/centralpatliputra"} className="dropdown-item">Central Patliputra</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/bakersalley"} className="dropdown-item">Baker`s Alley</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/lasportzia"} className="dropdown-item">La Sportzia</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/citycenter150/foodcourt150"} className="dropdown-item">Food Court 150</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/avenue62")} role="button" data-bs-toggle="dropdown" aria-expanded="false">Avenue 62</NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/avenue62/bolt"} className="dropdown-item">Bolt</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/avenue62/sohosuite"} className="dropdown-item">Soho Suite</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/avenue62/wellness"} className="dropdown-item">Wellness</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/avenue62/cp62"} className="dropdown-item">CP62</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/avenue62/foodcourt62"} className="dropdown-item">Food Court 62</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link" onClick={() => navigateAndCloseNavbar("ourproject/bhutanitechnopark")} role="button" data-bs-toggle="dropdown" aria-expanded="false">Bhutani Technopark</NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/bhutanitechnopark/bhutanihive"} className="dropdown-item">Bhutani Hive</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/bhutanitechnopark/bhutanimypod"} className="dropdown-item">My Pod</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/bhutanitechnopark/foodybay"} className="dropdown-item">Foodybay</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/bhutanitechnopark/foodypicasso"} className="dropdown-item">Food Picasso</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/bhutanitechnopark/bolt"} className="dropdown-item">bolt</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/cyberpark/")} role="button" data-bs-toggle="dropdown" aria-expanded="false">Cyber Park</NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/cyberpark/etherea"} className="dropdown-item">Cyberpark Etherea</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"ourproject/cyberpark/ethereaaibot"} className="dropdown-item">Etherea Al Bot</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/citycentergzb")} role="button" data-bs-toggle="dropdown" aria-expanded="false">City Center GZB
                                            </NavLink>
                                            <ul className="dropdown-menu">

                                                <li>
                                                    <NavLink to={"ourproject/citycentergzb/bhutanicineple"} className="dropdown-item">Bhutani Cineple</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend ">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/avenue133")} role="button" data-bs-toggle="dropdown" aria-expanded="false">Avenue 133</NavLink>
                                            {/* hidden ul west */}
                                            <ul className="dropdown-menu hidden">

                                                <li>
                                                    <NavLink to={"/"} className="dropdown-item">Bhutani Cineple</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/ithum")} role="button" data-bs-toggle="dropdown" aria-expanded="false">I Thum</NavLink>
                                            <ul className="dropdown-menu hidden">

                                                <li>
                                                    <NavLink to={"/"} className="dropdown-item">Bhutani Cineple</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item dropend">
                                            <NavLink className="nav-link " onClick={() => navigateAndCloseNavbar("ourproject/365office")} role="button" data-bs-toggle="dropdown" aria-expanded="false">365 Office</NavLink>
                                            <ul className="dropdown-menu hidden">

                                                <li>
                                                    <NavLink to={"/"} className="dropdown-item">Bhutani Cineple</NavLink>
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li className="nav-item navItem">
                                    <NavLink onClick={closeNavbar} className="nav-link navLink " to={"/blog"} >Blog</NavLink>
                                </li>

                                <li className="nav-item navItem">
                                    <NavLink onClick={closeNavbar} to={"/career"} className="nav-link navLink " >Career</NavLink>
                                </li>

                                <li className="nav-item navItem">
                                    <NavLink onClick={closeNavbar} to={"/contact"} className="nav-link navLink " >Contact Us</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

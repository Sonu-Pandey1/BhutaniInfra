import "../Sidebar/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

function Sidebar() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed out
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
        // console.log("signed out")
      } else {
        // console.log("signed in")
      }
    }, []);

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [navigate]);

  

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">

      <div className="top">
        <NavLink to={"/dashboard"} style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel &nbsp;</span>
          <img style={{ height: "1.5rem" }} src="https://cdn-icons-png.flaticon.com/128/9909/9909937.png"></img>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <NavLink to={"/dashboard"} style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <p className="title">LISTS</p>

          <NavLink to={"/dashboard/users"} style={{ textDecoration: "none" }}>
            <li>
              <PermIdentityOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </NavLink>

          <NavLink to={"/dashboard/propertys"} style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <span>Properties</span>
            </li>
          </NavLink>

          <NavLink to={"/dashboard/querys"} style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongOutlinedIcon className="icon" />
              <span>Queries</span>
            </li>
          </NavLink>

          <NavLink to={"/dashboard/blogs"} style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingOutlinedIcon className="icon" />
              <span>Blogs</span>
            </li>
          </NavLink>

          {/* <div className="unusefullinks">
            <p className="title">USEFUL</p>
            <li>
              <AddchartOutlinedIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationAddOutlinedIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </div> */}
          <p className="title">USER</p>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <NavLink to={"/login"} style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppOutlinedIcon className="icon" />
              <span onClick={() => { handleSignOut() }}>Logout</span>
            </li>
          </NavLink>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div> */}
    </div >
  );
}

export default Sidebar;

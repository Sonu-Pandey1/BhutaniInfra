import "../Navbar/Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const { dispatch } = useContext(DarkModeContext);
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

  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="items">

          <div className="item" >
            <LanguageOutlinedIcon className="icon" />

          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item" >

            <div className="dropdown-center bg-infoo">
              <button className="btn btn-outline-info " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://firebasestorage.googleapis.com/v0/b/bhutani-adminpanel.appspot.com/o/myimg.jpg?alt=media&token=c8d5119d-c22e-4c1c-88c6-5b12b3a028a8" alt="img" className="avatar" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end ">
                <li><a className="dropdown-item" onClick={() => { handleSignOut() }}>LogOut</a></li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

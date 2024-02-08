
import { useState } from "react"
import "../Signin/Signin.scss"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../FirebaseConfig"
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";
import Header from "../../ComponentsForApp/Header/Header"

// // for create new user replace it only---> createUserWithEmailAndPassword 


function Login() {

    const [error, setError] = useState(false)
    const [data, setData] = useState()

    //   const [email, setEmail] = useState("")
    //   const [password, setPassword] = useState("")

    const navitage = useNavigate()

    //   const { dispatch } = useContext(AuthContext)

    const handelSignin = (e) => {
        e.preventDefault();

        // const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((data) => {
                // Signed up 
                localStorage.setItem("user", JSON.stringify(data.user.email));
               
                setData(data.user.email)
                // console.log(data.user.email)
                data.user.email && navitage("/dashboard")
            })
            .catch((error) => {
                setError(true)
                console.log(error.message)
            });
            // console.log(data)
        // data && navitage("/dashboard")
    }


    return (

        <div className="">
            <Header />
            <div className="container d-flex justify-content-between">
                <div className="row">
                    <div className="col ram" data-aos="zoom-in-up">
                        <img className="loginIconImage mt-5 pt-5" src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
                    </div>
                </div>
                <div className="col ramm" data-aos="zoom-in-up">
                    <div className="loginWrapper">
                        <form className={`form_main  `}>
                            <p className="heading">Sigin</p>


                            <button id="button" onClick={handelSignin}>Submit</button>
                            <a className="forgotLink" href="#">{error && <span style={{ color: "red" }}>Wrong Email or Password!</span>}</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Login;





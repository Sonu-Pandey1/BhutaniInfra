
import { useState } from "react";
import "../Form/Form.scss"

// eslint-disable-next-line react/prop-types
export default function Form({ size }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
    })


    let name, value;
    const inputHandller = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const formHandller = async (e) => {
        e.preventDefault();
        const { name, email, phone, city, message } = user;
        const res = await fetch("https://bhutaniproject-795f4-default-rtdb.firebaseio.com/bhutani-project.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    city,
                    message
                })
            });
        res && setUser({
            name: "",
            email: "",
            phone: "",
            city: "",
            message: "",
        })
        alert("Form Submitted")
        // console.log("data submited")
        // console.log(user)
        // console.log(res)
    }


    return (
        <>
            <div className={`col form shadow-lg col-12 form-col1 col-sm-12 col-md-12 col-lg-${size} `}>
                <h6 className="mb-4">Get In Touch</h6>

                <form className="row g-3 " method="POST"  >

                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6   ">
                        <input type="text" className="form-control" id="name" autoComplete="off" onChange={inputHandller} value={user.name} placeholder="Name" name={"name"} required />

                    </div>

                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control" id="email" name={"email"} autoComplete="off" onChange={inputHandller} value={user.email} placeholder="Email" required />
                    </div>

                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control" id="phone" name={"phone"} autoComplete="off" onChange={inputHandller} value={user.phone} placeholder="Phone" required />
                    </div>

                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control" id="city" name={"city"} autoComplete="off" onChange={inputHandller} required value={user.city} placeholder="City" />
                    </div>

                    <div className="col-12">
                        <textarea className="textarea" onChange={inputHandller} name={"message"} autoComplete="off" id={"textarea"} cols="54" rows="3" value={user.message} placeholder="Message..."></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button onClick={formHandller} className="btn btn-dark " >Send Now</button>
                    </div>

                </form>

            </div>
        </>
    )
}

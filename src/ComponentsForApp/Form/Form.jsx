
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db} from "../../FirebaseConfig";
import "../Form/Form.scss"

// // eslint-disable-next-line react/prop-types
export default function Form({size}) {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    const year = currentDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    // console.log(formattedDate);

    const [data, setData] = useState({});
    // console.log(titles)

    // useEffect(() => {

        const handleAdd = async (e) => {
            e.preventDefault();
    
            try {
                const aa = await addDoc(collection(db, "querys"), {
                    ...data,
                    formattedDate,
                    timeStamp: serverTimestamp()
                });
                aa && setData({
                    name: "",
                    email: "",
                    phone: "",
                    budget:"",
                    size:"",
                    for:"",
                    city: "",
                    message: "",
                })
                alert("Form Submitted")
        
            } catch (error) {
                console.log(error.message)
            }
        }
        // console.log(data)
    
        const handleInput = (e) => {
            const id = e.target.id;
            const value = e.target.value;
            // here data write because when we store inputs value in data then he replce again and again so prevent that we spread data so that preveous data is also present there.
            setData({ ...data, [id]: value });
    
        };
    // });

    return (
        <>
            <div className={`col form shadow-lg col-12 form-col1 col-sm-12 col-md-12 col-lg-${size} `}>
                <h6 className="mb-4">Get In Touch</h6>

                <form className="row g-3" onSubmit={handleAdd} >

                    {/* <label className="label" htmlFor="name">Name</label> */}
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6   ">
                        Name<input type="text" className="form-control" id="name" autoComplete="off" onChange={handleInput} value={data.name} placeholder="Name" name={"name"} required />

                    </div>
                    {/* <label className="label" htmlFor="email">Email</label> */}
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        Email<input type="text" className="form-control" id="email" name={"email"} autoComplete="off" onChange={handleInput} value={data.email} placeholder="Email" required />
                    </div>
                    {/* <label className="label" htmlFor="phone">Phone</label> */}
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        Phone<input type="text" className="form-control" id="phone" name={"phone"} autoComplete="off" onChange={handleInput} value={data.phone} placeholder="Phone No" required />
                    </div>
                    {/* <label className="label" htmlFor="budget">Budget</label> */}

                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        Budget<input type="text" className="form-control" id="budget" name={"budget"} autoComplete="off" onChange={handleInput} value={data.budget} placeholder="Your Estimate Budget (In Cr) " required />
                    </div>

                    {/* <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="date" className="form-control" id="queryDate" name={"queryDate"} autoComplete="off" onChange={handleInput} value={data.queryDate} placeholder="" required />
                    </div> */}
                    {/* <label className="label" htmlFor="city">City</label> */}
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                       City <input type="text" className="form-control" id="city" name={"city"} autoComplete="off" onChange={handleInput} required value={data.city} placeholder="City" />
                    </div>
                    {/* <label className="label" htmlFor="size">Size</label> */}
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        Size<input type="text" className="form-control" id="size" name={"size"} autoComplete="off" onChange={handleInput} required value={data.size} placeholder=" 2BHK ,3BHK ,4BHK ,etc" />
                    </div>
                    {/* <label className="label" htmlFor="for">For</label> */}
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
                        For<input type="text" className="form-control" id="for" name={"for"} autoComplete="off" onChange={handleInput} required value={data.for} placeholder="Rent, Buy, Resale ,etc" />
                    </div>
                    {/* <label className="label" htmlFor="message">Message</label> */}
                    <div className="col-12">
                        Message<textarea className="textarea" onChange={handleInput} name={"message"} autoComplete="off" id={"message"} cols="54" rows="3" value={data.message} placeholder="Message..."></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-dark " >Send Now</button>
                    </div>

                </form>

            </div>
        </>
    )
}




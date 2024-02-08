
// import React from 'react'
import ListingCard from "../ListingCard/ListingCard"
import "../OurProjects/OurProject.scss"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { useEffect, useState } from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function OurProject() {

    const [data, setData] = useState([]);

    // instance data render the Query form--->>

    // Get Realtime Data From Firebase.
    useEffect(() => {

        const unsub = onSnapshot(collection(db, "propertys"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list)
        }, (error) => {
            console.log(error)
        });

        return () => {
            unsub();
        }
    }, [])
    // console.log(data);

    return (
        <section className="ourProjectWrapper">
            <Header />
            <div className="whatsapplogo">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/918766325423?text=I'm%20interested%20in%20your%20Propertys%20for%20Buy"> <img alt="Chat on WhatsApp" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" width={50} />
                </a>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="imgWrapper">
                        <img className="img1" loading="lazy" src="https://www.bhutanigroup.com/assets/images/pages/938068cbd1f2d4c05c19a33a0fabaa3e.jpg" alt="img" />

                    </div>
                </div>
            </div>
            <div className="container py-4">
                <h6>Our Projects</h6>
                <div className="row">
                    {
                        data.map((items) => {
                            {/* console.log(items) */ }

                            return <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3" key={items.id}>
                                <ListingCard title={items.title} imgUrl={items.img} about={items.description ? items.description.slice(0, 120) : "content not found"} onClick={items.route} />
                            </div>
                        })
                    }
                </div>
            </div>
            <Footer />
        </section>
    )
}

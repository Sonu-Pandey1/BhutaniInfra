/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import "../ListingCard/ListingCard.scss"

export default function ListingCard({ title, imgUrl, about, onClick }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="card shadow " >
                <img loading="lazy" src={imgUrl} className="card-img-top img-fluid img-thumbnail" alt="img" />
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text ">{about}</p>
                    <div className="btncontainer">
                        <button className="btn btn-outline-primary" onClick={() => navigate(onClick)} >Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

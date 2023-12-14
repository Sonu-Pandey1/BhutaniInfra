
// import React from 'react'
import ListingCard from "../ListingCard/ListingCard"
import "../OurProjects/OurProject.scss"
import ProjectListing from "../../assets/ProjectListing.json"

export default function OurProject() {
    return (
        <section className="ourProjectWrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="imgWrapper">
                        <img loading="lazy" src="https://www.bhutanigroup.com/assets/images/pages/938068cbd1f2d4c05c19a33a0fabaa3e.jpg" alt="img" />
                    </div>
                </div>
            </div>
            <div className="container py-4">
            <h6>Our Projects</h6>
                <div className="row">
                    {
                        ProjectListing.map((items)=>{
                            {/* console.log(items) */}

                            return <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"  key={items.id}>
                                <ListingCard title={items.Title} imgUrl={items.imgUrl} about={items.Body ? items.Body.slice(0,120):"content not found"} onClick={items.onClick}/>
                            </div>
                        })
                        
                    }
                    
                </div>
            </div>

        </section>
    )
}

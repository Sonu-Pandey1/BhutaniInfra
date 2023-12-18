import "../Blogs/Blog.scss"
import ListingCard from "../ListingCard/ListingCard"
import BlogListing from "../../assets/BlogListing.json"
import { useState } from "react"


export default function Blog() {

  let data = BlogListing
  const [visiable, setVisiable] = useState(12)

  let HandlePrevBtn = () => {
    setVisiable(visiable - 12)
  }

  let HandleNextBtn = () => {
    setVisiable(visiable + 12)
  }


  return (
    <section className="blog-wrapper">

      <div className="container-fluid bg-danger">
        <div className="img-wrapper">
          <img loading="lazy" src="https://www.bhutanigroup.com/assets/images/pages/35fff9f5e576a87612c06ecfeb225c38.jpg" alt="Careerimg" />
        </div>
      </div>

      <div className="container">
        <div className="blogTitle mt-5 text-center">
          <h1> Our Blogs</h1>
        </div>
        <div className=" row blogs-container mt-2 ">
          {data.slice(0, visiable).map((item) => {
            {/* console.log(item) */ }
            return <div className="mb-3 col-12 col-xxl-4 col-xl-4 col-lg-4  col-md-4 col-sm-6 blogsSubContainer" key={item.id} >

              <ListingCard title={item.title ? item.title.slice(0, 50) : "title not found"} about={item.body ? item.body.slice(0, 160) : "not found"} imgUrl={item.imgUrl} />

            </div>
          })}

        </div>
        <div className="btn-wrapper d-flex justify-content-between pt-4">
          <button className="prevBtn btn btn-outline-dark" disabled={visiable <= 12} onClick={HandlePrevBtn}>Previous</button>
          <button className="nextBtn btn btn-outline-dark" disabled={visiable >= data.length} onClick={HandleNextBtn}>Next</button>
        </div>
      </div>
    </section>
  )
}

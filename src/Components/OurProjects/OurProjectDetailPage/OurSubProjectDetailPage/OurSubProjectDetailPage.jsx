

import { NavLink } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Subdata from "../../../../assets/ProjectDetailPage.json"
import "../../../ProjectsPages/Alphathum/OverView/AoverView.scss"
import { useEffect, useState } from "react"

export default function OurProjectDetailPage() {
  // const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const { subid } = useParams()

  useEffect(() => {
    getProduct();
  },)

  const getProduct = () => {
    const newProduct = Subdata.find((items) => items.subid === subid)
    console.log(newProduct)
    setProduct(newProduct)
  }


  return (
    <section className="AoverviewWrapper">
      <h1>project detail page project name is -- {subid}  </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="imgWrappper ">
            <img loading="lazy" src={`${product.imgUrl}`} alt="img" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title">
          <div className="imgWrappper text-center pt-5">
            {product.titleImgUrl && <div><img loading="lazy" src={`${product.titleImgUrl}`} alt="img" /></div>}

          </div>
        </div>

        <div className="aboutAlphathum">
          <h6 className="pb-3">{`${product.aboutAlphathumTitle}`}</h6>
          <p className="paras">{`${product.aboutAlphathumContent1}`}.</p>
          <p>{`${product.aboutAlphathumContent2}`}</p>
          <p>{`${product.aboutAlphathumContent3}`}</p>
          <p>{`${product.aboutAlphathumContent4}`}</p>
        </div>
      </div>

      <div className="container-fluid">

        <div className="row subnavrow">
          <div className="subNav">
            <ul>
              <li>
                <NavLink to={""}>{`${product.subNavLink1}`}</NavLink>
              </li>
              <li><a href="#">{`${product.subNavLink2}`}</a></li>
              <li><a href="#">{`${product.subNavLink3}`}</a></li>
              <li><a href="#">{`${product.subNavLink4}`}</a></li>
              <li><a href="#">{`${product.subNavLink5}`}</a> </li>
              <li><a href="#">{`${product.subNavLink6}`}</a></li>
            </ul>
          </div>
        </div>

        {/* location */}
        {product.locationImgUrl && <div>
          <div className="container ">
            <div className="locationWrapper">
              <div className="row">
                <h6>Location</h6>
                <div className="imgWrappper">
                  {product.locationImgUrl && <div><img src={`${product.locationImgUrl}`} alt="img" /></div>}

                </div>
                <div className="locationContent d-flex justify-content-between mt-4">
                  <p><span>Site Address :</span>{`${product.locationAddress}`} </p>
                  <p><span>Contact :</span>09837837839</p>
                </div>
              </div>
            </div>
          </div>
        </div>}



        {/* price list */}

        <div className="container mt-4 ">
          <div className="priceListWrapper">
            <div className="row">
              <h6>Price List</h6>
              <div className="imgWrappper">
                <img src={`${product.priceListImgUrl}`} alt="img" />
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plan */}
        <div className="container mt-4">
          <div className="floorPlanWrapper ">
            <h6>Floor Plan</h6>
            <div className="row floorPlanRow  ">

              <div className="col-6">
                <h6 className="text-center">Plan I</h6>
                <div className="imgWrapper ">
                  <img src={`${product.floorPlan1ImgUrl}`} alt="img" />
                </div>
              </div>

              <div className="col-6">
                <h6 className="text-center">Plan II</h6>
                <div className="imgWrapper ">
                  <img src={`${product.floorPlan2ImgUrl}`} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Site View */}
        {product.siteViewUrl && <div>
          <div className="container mt-4">
            <div className="siteViewWrapper">
              <h6>Site View</h6>
              <div className="row">
                <div className="videoWrapper">
                  <video width="500" height="100" controls >
                    <source src={`${product.siteViewUrl}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>}


        {/* contact us */}
        <div className="container mt-5">
          <div className="row  ">
            <div className=" col form shadow-lg ">
              <h6 className="mb-4">Get In Touch</h6>
              <form className="row g-3 needs-validation" noValidate>
                <div className=" col-6 ">
                  <input type="text" className="form-control" id="name" autoComplete="true" placeholder="Name" required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className=" col-6 ">
                  <input type="text" className="form-control" autoComplete="true" id={"email"} placeholder="Email" required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className=" col-6 ">
                  <input type="text" className="form-control" autoComplete="true" id={"phone"} placeholder="Phone" required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className=" col-6 ">
                  <input type="text" className="form-control" id={"city"} required placeholder="City" />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col text-center">
                  <textarea className="textarea " name="CommentSection" id={"textarea"} cols="130" rows="4" placeholder="Comment..."></textarea>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-dark " type="submit">Send Now</button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}



import { NavLink } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import data from "../../../assets/ProjectDetailPage.json"
import "../../ProjectsPages/Alphathum/OverView/AoverView.scss"
import { useEffect, useState } from "react"

export default function OurProjectDetailPage() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getProduct();
  },)

  const getProduct = () => {
    const newProduct = data.find((items) => items.id === id)
    console.log(newProduct)
    setProduct(newProduct)
  }


  return (
    <section className="AoverviewWrapper">
      {/* <h1>project detail page project name is --{id} {subid}  </h1> */}
      <div className="container-fluid">
        <div className="row">
          <div className="imgWrappper ">
            <img loading="lazy" src={`${product.imgUrl}`} alt="img" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title">
          <div className="imgWrappper text-center pt-3">
            <img loading="lazy" src={`${product.titleImgUrl}`} alt="img" />
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


        <div className="container">
          <div className="alphathumSubProjects" >
            <div className="row">
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick1}`) }} className="navlink">
                  {product.subProject1Url && <div><img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject1Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject1Url && <div><img loading="lazy" className="subprojectlogo img-fluid img-thumbnail" src={`${product.subProject1SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick2}`) }} className="navlink">
                  {product.subProject2Url && <div><img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject2Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject2Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject2SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick3}`) }} className="navlink">
                  {product.subProject3Url && <div><img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject3Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject3Url && <div> <img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject3SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick4}`) }} className="navlink">
                  {product.subProject4Url && <div> <img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject4Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject4Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject4SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick5}`) }} className="navlink">
                  {product.subProject5Url && <div> <img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject5Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject5Url && <div> <img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject5SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick6}`) }} className="navlink">
                  {product.subProject6Url && <div><img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject6Url}`} alt="img" /><br /></div>}
                  <div className="subprojectlogoWrapper">
                    {product.subProject6Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject6SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick7}`) }} className="navlink">
                  {product.subProject7Url && <div><img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject7Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject7Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject7SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className="col-4">
                <NavLink onClick={() => { navigate(`${product.onClick8}`) }} className="navlink">
                  {product.subProject8Url && <div><img loading="lazy" className=" img-fluid img-thumbnail" src={`${product.subProject8Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject8Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject8SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
            </div>

          </div>
        </div>
        {/* location */}
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

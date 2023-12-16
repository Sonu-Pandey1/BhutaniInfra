

import { NavLink } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import data from "../../../assets/ProjectDetailPage.json"
import "../OurProjectDetailPage/AoverView.scss"
import { useEffect, useState } from "react"
import Form from "../../Form/Form"

export default function OurProjectDetailPage() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getProduct();
  },)

  const getProduct = () => {
    const newProduct = data.find((items) => items.id === id)
    // console.log(newProduct)
    setProduct(newProduct)
  }


  return (
    <section className="AoverviewWrapper">
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
          <div className="subNav text-center">
            <ul>
              {product.subNavLink1 && <li>
                <NavLink to={""}>{`${product.subNavLink1}`}</NavLink>
              </li>}
              <li><a href="#">{`${product.subNavLink2}`}</a></li>
              <li><a href="#">{`${product.subNavLink3}`}</a></li>
              {product.subNavLink4 && <li><a href="#">{`${product.subNavLink4}`}</a></li>}
              {product.subNavLink5 && <li><a href="#">{`${product.subNavLink5}`}</a> </li>}
              <li><a href="#">{`${product.subNavLink6}`}</a></li>
            </ul>
          </div>
        </div>


        <div className="container">
          <div className="alphathumSubProjects" >
            <div className="row">
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick1}`) }} className="navlink">
                  {product.subProject1Url && <div><img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject1Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper ">
                    {product.subProject1Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject1SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick2}`) }} className="navlink">
                  {product.subProject2Url && <div><img loading="lazy" className=" img img-fluid img-thumbnail" src={`${product.subProject2Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject2Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject2SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick3}`) }} className="navlink">
                  {product.subProject3Url && <div><img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject3Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject3Url && <div> <img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject3SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick4}`) }} className="navlink">
                  {product.subProject4Url && <div> <img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject4Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject4Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject4SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick5}`) }} className="navlink">
                  {product.subProject5Url && <div> <img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject5Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject5Url && <div> <img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject5SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick6}`) }} className="navlink">
                  {product.subProject6Url && <div><img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject6Url}`} alt="img" /><br /></div>}
                  <div className="subprojectlogoWrapper">
                    {product.subProject6Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject6SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick7}`) }} className="navlink">
                  {product.subProject7Url && <div><img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject7Url}`} alt="img" /><br /></div>}

                  <div className="subprojectlogoWrapper">
                    {product.subProject7Url && <div><img loading="lazy" className=" subprojectlogo img-fluid img-thumbnail" src={`${product.subProject7SecondUrl}`} alt="imglogo" /></div>}

                  </div>
                </NavLink>

              </div>
              <div className=" coll-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <NavLink onClick={() => { navigate(`${product.onClick8}`) }} className="navlink">
                  {product.subProject8Url && <div><img loading="lazy" className="img img-fluid img-thumbnail" src={`${product.subProject8Url}`} alt="img" /><br /></div>}

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
              <div className=" row locationContent d-flex justify-content-between mt-4">
                <p className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-9"><span>Site Address :</span>{`${product.locationAddress}`} </p>
                <p className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3"><span>Contact :</span>09837837839</p>
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

              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <h5 className="text-center">Plan I</h5>
                <div className="imgWrapper ">
                  <img src={`${product.floorPlan1ImgUrl}`} alt="img" />
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <h5 className="text-center plan2">Plan II</h5>
                <div className="imgWrapper ">
                  <img src={`${product.floorPlan2ImgUrl}`} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Site View */}
        {product.siteViewUrl && <div>
          <div className="container mt-5">
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
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

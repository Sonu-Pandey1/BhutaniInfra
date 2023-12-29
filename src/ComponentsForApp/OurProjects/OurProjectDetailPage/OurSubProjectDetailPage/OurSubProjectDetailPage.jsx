
import { useParams } from "react-router-dom"
import Subdata from "../../../../assets/ProjectDetailPage.json"
import "../../OurProjectDetailPage/AoverView.scss"
import { useEffect, useState } from "react"
import Form from "../../../Form/Form"
import Header from "../../../Header/Header"
import Footer from "../../../Footer/Footer"

export default function OurProjectDetailPage() {
  const [product, setProduct] = useState({})
  const { subid } = useParams()

  useEffect(() => {
    getProduct();
  },) 

  const getProduct = () => {
    const newProduct = Subdata.find((items) => items.subid === subid)
    // console.log(newProduct)
    setProduct(newProduct)
  }


  return (
    <section className="AoverviewWrapper">
    <Header/>
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
              {product.subNavLink1 && <li><a href="#">{`${product.subNavLink1}`}</a></li>}
              {product.subNavLink2 && <li><a href="#">{`${product.subNavLink2}`}</a></li>}
              {product.subNavLink3 && <li><a href="#pricelist">{`${product.subNavLink3}`}</a></li>}
              {product.subNavLink4 && <li><a href="#floorplan">{`${product.subNavLink4}`}</a></li>}
              {product.subNavLink5 && <li><a href="#">{`${product.subNavLink5}`}</a></li>}
              {product.subNavLink6 && <li><a href="#contact">{`${product.subNavLink6}`}</a></li>}
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

        <div id="pricelist" className="container mt-4 ">
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
        <div id="floorplan" className="container mt-4">
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
        {/* {product.siteViewUrl && <div>
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
        </div>} */}


        {/* contact us */}
        <div id="contact" className="container mt-5">
          <div className="row  ">
            <Form />
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

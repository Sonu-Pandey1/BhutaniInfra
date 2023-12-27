
import './App.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import OurProject from './Components/OurProjects/OurProject.jsx';


//! For Error Boundary ----->>
// import ErrorFallback from './ErrorBoundery.jsx'
// import { ErrorBoundary } from 'react-error-boundary'

//! For Normal Loding ---->>>
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero'
import About from './Components/AboutUs/About.jsx'
import Career from './Components/Career/Career.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import Blog from './Components/Blogs/Blog.jsx'
import ScrollToTop from 'react-scroll-to-top';
import BlogDetail from './Components/Blogs/BlogDetail.jsx';
// import { GetrealtimeData } from './Components/GetDatafromdb/index.jsx';
// import OurProjectDetailPage from './Components/OurProjects/OurProjectDetailPage/OurProjectDetailPage.jsx';
// import OurSubProjectDetailPage from './Components/OurProjects/OurProjectDetailPage/OurSubProjectDetailPage/OurSubProjectDetailPage.jsx';

//! for Lazy Loding ----->>>>
// const Header = lazy(() => import("./Components/Header/Header.jsx"))
// const Footer = lazy(() => import("./Components/Footer/Footer.jsx"))
// const Hero = lazy(() => import("./Components/Hero/Hero.jsx"))
// const About = lazy(() => import("./Components/AboutUs/About.jsx"))
// const Career = lazy(() => import("./Components/Career/Career.jsx"))
// const Contact = lazy(() => import("./Components/ContactUs/Contact.jsx"))
// const Blog = lazy(() => import("./Components/Blogs/Blog.jsx"))
const OurProjectDetailPage = lazy(() => import("./Components/OurProjects/OurProjectDetailPage/OurProjectDetailPage.jsx"))
const OurSubProjectDetailPage = lazy(() => import("./Components/OurProjects/OurProjectDetailPage/OurSubProjectDetailPage/OurSubProjectDetailPage.jsx"))


function App() {

  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // This useEffect will run whenever the location.pathname changes

  return (
    <>
    <ScrollToTop smooth color="#6f00ff" />

      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/ourproject' element={<OurProject />} />
        <Route path='/ourproject/:id' element={<Suspense fallback={<HashLoader className='spiner' size={65} color="#36d7b7" />}>
          <OurProjectDetailPage />
        </Suspense>} />
        <Route path='/ourproject/:id/:subid' element={<Suspense fallback={<HashLoader className='spiner' size={65} color="#36d7b7" />}>
          <OurSubProjectDetailPage />
        </Suspense>} />
        {/* <Route path='/ourproject/alphathum/overview' element={<Aoverview/>}/> */}
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
      {/* <GetrealtimeData/> */}

      {/* <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}> */}

      {/* </ErrorBoundary> */}
      {/* component based error boundary if you want atteched e boundary in routing there is diifrent way to perform this this only component based e boundat and lazy loding */}

    </>
  )
}

export default App;

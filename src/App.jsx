
import './App.scss'
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation, Navigate, useParams } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import OurProject from './ComponentsForApp/OurProjects/OurProject.jsx';

/* eslint-disable react/prop-types */

import "../src/App.scss"
import "../src/Styles/Dark.scss"
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"
import Login from "./Pages/Login/Login"
import New from "./Pages/New/New"
import Single from "./Pages/Single/Single"
import { blogsInputs, productInputs, querysInputs, userInputs } from "./formsource"
import { useContext } from "react"
import { DarkModeContext } from "./Context/darkModeContext"
import { AuthContext } from "./Context/AuthContext"
import Page404 from "./Pages/404 Page/Page404"
// import { blogsColumns, querysColumns } from "./datatablesource"


//! For Error Boundary ----->>
// import ErrorFallback from './ErrorBoundery.jsx'
// import { ErrorBoundary } from 'react-error-boundary'

//! For Normal Loding ---->>>
import Header from './ComponentsForApp/Header/Header'
import Footer from './ComponentsForApp/Footer/Footer.jsx'
import Hero from './ComponentsForApp/Hero/Hero'
import About from './ComponentsForApp/AboutUs/About.jsx'
import Career from './ComponentsForApp/Career/Career.jsx'
import Contact from './ComponentsForApp/ContactUs/Contact.jsx'
import Blog from './ComponentsForApp/Blogs/Blog.jsx'
import ScrollToTop from 'react-scroll-to-top';
import BlogDetail from './ComponentsForApp/Blogs/BlogDetail.jsx';
import Showhedaer from './ComponentsForApp/Showheader/Showhedaer.jsx';
import Showfooter from './ComponentsForApp/Showfooter/Showfooter.jsx';

//! for Lazy Loding ----->>>
const OurProjectDetailPage = lazy(() => import("./ComponentsForApp/OurProjects/OurProjectDetailPage/OurProjectDetailPage.jsx"))
const OurSubProjectDetailPage = lazy(() => import("./ComponentsForApp/OurProjects/OurProjectDetailPage/OurSubProjectDetailPage/OurSubProjectDetailPage.jsx"))


function App() {
  // 

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // This useEffect will run whenever the location.pathname changes

  // for Dark Mode ---
  const { darkMode } = useContext(DarkModeContext);
  // For Login --- if User Not Login Then he Redirect to Login
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <ScrollToTop smooth color="#6f00ff" />
        {/* <Header /> */}
        {/* <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/*' element={<h1>404 Page Not Found</h1>} />
          <Route path='/ourproject' element={<OurProject />} />
          <Route path='/ourproject/:id' element={<Suspense fallback={<HashLoader className='spiner' size={65} color="#36d7b7" />}>
            <OurProjectDetailPage />
          </Suspense>} />
          <Route path='/ourproject/:id/:subid' element={<Suspense fallback={<HashLoader className='spiner' size={65} color="#36d7b7" />}>
            <OurSubProjectDetailPage />
          </Suspense>} />
        </Routes> */}
        {/* <Footer /> */}
        {/* <Showhedaer>
          <Header />
        </Showhedaer> */}
        <Routes>
          <Route path="/">
            <Route index element={<Hero />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About />} />
            <Route path='career' element={<Career />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='*' element={<Page404 />} />
            <Route path='ourproject'>
              <Route index element={<OurProject />} />
              <Route path=':id'>
                <Route index element={
                  <Suspense fallback={<HashLoader className='spiner' size={65} color="#36d7b7" />}>
                    <OurProjectDetailPage />
                  </Suspense>} />
                <Route path=':subid' element={
                  <Suspense fallback={<HashLoader className='spiner' size={65} color="#36d7b7" />}>
                    <OurSubProjectDetailPage />
                  </Suspense>} />
              </Route>
            </Route>

            <Route path='dashboard'>
              <Route index element={<RequireAuth><Home /></RequireAuth>} />

              <Route path="users">
                <Route index element={<RequireAuth><List titles={"users"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={userInputs} titles="users" /></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" titles="users" /></RequireAuth>} />
              </Route>

              <Route path="propertys">
                <Route index element={<RequireAuth><List titles={"propertys"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={productInputs} titles="propertys" />
                </RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New propertys" titles="propertys" /></RequireAuth>} />
              </Route>

              <Route path="querys">
                <Route index element={<RequireAuth><List titles={"querys"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={querysInputs} titles="querys" />
                </RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={querysInputs} title="Add New querys" titles="querys" /></RequireAuth>} />
              </Route>

              <Route path="blogs">
                <Route index element={<RequireAuth><List titles={"blogs"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={blogsInputs} titles="blogs" />
                </RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={blogsInputs} title="Add New blogs" titles="blogs" /></RequireAuth>} />
              </Route>
            </Route>

          </Route>
        </Routes>
        {/* <Showfooter>
          <Footer />
        </Showfooter> */}

        {/* <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />

            <Route path="users">
              <Route index element={<RequireAuth><List titles={"users"} /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single inputs={userInputs} titles="users" /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" titles="users" /></RequireAuth>} />
            </Route>

            <Route path="propertys">
              <Route index element={<RequireAuth><List titles={"propertys"} /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single inputs={productInputs} titles="propertys" />
              </RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New propertys" titles="propertys" /></RequireAuth>} />
            </Route>

            <Route path="querys">
              <Route index element={<RequireAuth><List titles={"querys"} /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single inputs={querysInputs} titles="querys" />
              </RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={querysInputs} title="Add New querys" titles="querys" /></RequireAuth>} />
            </Route>

            <Route path="blogs">
              <Route index element={<RequireAuth><List titles={"blogs"} /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single inputs={blogsInputs} titles="blogs" />
              </RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={blogsInputs} title="Add New blogs" titles="blogs" /></RequireAuth>} />
            </Route>

            <Route path="*" element={<Page404 />} />

          </Route>
        </Routes> */}

        {/* <GetrealtimeData/> */}
        {/* <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}> */}
        {/* </ErrorBoundary> */}
        {/* component based error boundary if you want atteched e boundary in routing there is diifrent way to perform this this only component based e boundat and lazy loding */}

        {/* lsjksdjnwdnjw */}
        {/* <Route path='dashboard'>
              <Route index element={<RequireAuth><Home /></RequireAuth>} />

              <Route path="users">
                <Route index element={<RequireAuth><List titles={"users"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={userInputs} titles="users" /></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" titles="users" /></RequireAuth>} />
              </Route>

              <Route path="propertys">
                <Route index element={<RequireAuth><List titles={"propertys"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={productInputs} titles="propertys" />
                </RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New propertys" titles="propertys" /></RequireAuth>} />
              </Route>

              <Route path="querys">
                <Route index element={<RequireAuth><List titles={"querys"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={querysInputs} titles="querys" />
                </RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={querysInputs} title="Add New querys" titles="querys" /></RequireAuth>} />
              </Route>

              <Route path="blogs">
                <Route index element={<RequireAuth><List titles={"blogs"} /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single inputs={blogsInputs} titles="blogs" />
                </RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={blogsInputs} title="Add New blogs" titles="blogs" /></RequireAuth>} />
              </Route>
            </Route> */}
      </div>
    </>
  )
}

export default App;




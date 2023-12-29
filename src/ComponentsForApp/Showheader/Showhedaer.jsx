import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Showhedaer({children}) {
    const location = useLocation();
    const [showNavBar,setShowNavBar] = useState(false)

    useEffect(()=>{
        console.log("this is current Location",location)

        // if(location.pathname === "/" || location.pathname === "/about" || 
        // location.pathname === "/ourproject" || location.pathname === "/ourproject/avenue62" || 
        // location.pathname === "/ourproject/citycentergzb" || location.pathname === "/ourproject/bhutanitechnopark" || 
        // location.pathname === "/ourproject/bhutanicitycenter150" || location.pathname === "/ourproject/365office" || location.pathname === "/ourproject/cyberpark" || location.pathname === "/ourproject/alphathum" || location.pathname === "/ourproject/ithum" || location.pathname === "/ourproject/cyberthum"  ){
        //     setShowNavBar(true)
        // } else{
        //     setShowNavBar(false)
        // }
        // if(location.pathname === "/dashboard" || location.pathname === "/dashboard/users" || 
        // location.pathname === "/dashboard/propertys" || location.pathname === "/dashboard/querys" || 
        // location.pathname === "/dashboard/blogs" || location.pathname === "/dashboard/blogs/new" || 
        // location.pathname === "/dashboard/users/new" || location.pathname === "/dashboard/propertys/new" || location.pathname === "/dashboard/querys/new" || location.pathname === "/dashboard/querys/xyz"  ){
        //     setShowNavBar(false)
        // } else{
        //     setShowNavBar(true)
        // }

    },[location])




    return(
        <div>{showNavBar && children}</div>
    )
 
}

export default Showhedaer;

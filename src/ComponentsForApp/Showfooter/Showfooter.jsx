import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Showfooter({children}) {
    const location = useLocation();
    const [showFooter,setShowFooter] = useState(false)

    useEffect(()=>{
        console.log("this is current Location",location)

        if(location.pathname === "/dashboard" || location.pathname === "/dashboard/users" || 
        location.pathname === "/dashboard/propertys" || location.pathname === "/dashboard/querys" || 
        location.pathname === "/dashboard/blogs" || location.pathname === "/dashboard/blogs/new" || 
        location.pathname === "/dashboard/users/new" || location.pathname === "/dashboard/propertys/new" || location.pathname === "/dashboard/querys/new"      ){
            setShowFooter(false)
        } else{
            setShowFooter(true)
        }

    },[location])




    return(
        <div>{showFooter && children}</div>
    )
 
}

export default Showfooter;

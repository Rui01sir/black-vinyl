import React from "react";
import { FaBars, FaTimes, FaRegUserCircle, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

// function Divbar() {
    const Divbar=()=>{
        const auth = localStorage.getItem("user");
        const navigate = useNavigate();
        const logout =() =>{
            localStorage.clear();
            navigate("/Loginpage");
        }
    
    return(
        <div className="b-nav">
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
          <FaBars/>
          </label>
          <label className="logo"><Link to="/index.html"><img src="./img/logo.svg" alt="黑碟" style={{width:'60px',paddingbottom:'10px'}}/></Link></label>
            <ul>
                <input type="b-checkbox" id="check"/>
                <li> <label htmlFor="check" className="checkbtn1"><FaTimes/></label></li>
                <li><Link to="/index.html">首頁</Link></li>
                <li><Link to="/">客製化</Link></li>
                <li><Link to="/">黑膠唱片</Link></li>
                <li><Link to="/">購物車</Link></li>
                <li><Link to="/">關於我們</Link></li>
                <li>{ auth ? <Link onClick={logout} to="/Loginpage">登出  <FaRegUserCircle/></Link>:
                <Link to="/Loginpage">會員登入  <FaRegUserCircle/></Link>}</li>

                <li><Link to="/"><FaShoppingBag/></Link></li>
            </ul>
        </div>
    )
}

export default Divbar;
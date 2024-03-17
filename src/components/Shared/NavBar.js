import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";


const NavBar = () => {
  
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (


    <>
    <header className="main-header header-two">
  {/*Header-Upper*/}
  <div className="header-upper">
    <div className="container clearfix">
      <div className="header-inner rel d-flex align-items-center">
        {
          logo.map(l=><div className="logo-outer">
          <div className="logo"><a href="/"><img src={l.logo} alt="Logo" title="Logo" /></a></div>
        </div> )
        }
        
        <div className="nav-outer clearfix">
          {/* Main Menu */}
          <nav className="main-menu navbar-expand-lg">
            <div className="navbar-header">
              {
                logo.map(p=>   <div className="mobile-logo my-15">
                <a href="/">
                  <img src={p.logo} alt="Logo" title="Logo" />
                </a>
              </div> )
              }
           
              {/* Toggle Button */}
              
            </div>
            <div className="navbar-collapse collapse clearfix">
              <ul className="navigation clearfix">
                
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </nav>
          {/* Main Menu End*/}
        </div>
        {/* Nav Search */}
        <div className="nav-search py-15">
        
          <form action="#" className="hide">
            <input type="text" placeholder="Search" className="searchbox" required />
            <button type="submit" className="searchbutton far fa-search" />
          </form>
        </div>
        {/* Menu Button */}
        <div className="menu-btns">
          

          {
                user ?
                <div className="cta-btn">
                <a href="/dashboard" className="theme-btn">
                  
                  Dashboard
                </a>
              </div>
              :
              <div className="cta-btn">
              <a href="/login" className="theme-btn">
               
                Log in
              </a>
            </div>
              }
              {
                users.map(u=> u.userEmail === user?.email && u.userRole === 'Admin' &&
                <div className="cta-btn">
                <Link to="/admin" className="theme-btn">
                 
                  Admin
                </Link>
              </div>
              )
            
              }
          {/* menu sidbar */}
          
        </div>
      </div>
    </div>
  </div>
  {/*End Header Upper*/}
</header>

    
    </>
  );
};

export default NavBar;

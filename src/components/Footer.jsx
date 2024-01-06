import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";

const Footer = () => {
  return (
    <>
    <div className="foter">
    <footer>
        <div className="f_cards">
            <h4>THE BMW DIFFERENCE</h4>
             <br />
            <p>My BMW App</p>
            <p>BMW Individual</p>
            <p>BMW All-Electric</p>
            <p>Plug-in Hybrid Electric</p>
            <p>Concept Vehicles</p>
            <p>BMW ConnectedDrive</p>
            <p>Remote Software Upgrades</p>
            <p>BMW Driver Assistance</p>
        </div>

        <div className="f_cards">
            <h4>EXPERIENCE & PARTNESHIPS</h4>
             <br />
            <p>Performance Driving School</p>
            <p>Ultimate Driving Experience</p>
            <p>Performance Center Delivery</p>
            <p>M Track Days</p>
            <p>BMW M Motorsport</p>
            <p>BMW Championship</p>
            <p>Monticello Motor Club</p>
        </div>

        <div className="f_cards">
            <h4>ONLINE SHOPPING TOOLS</h4>
             <br />
            <p>Shop BMW Parts & Accessories</p>
            <p>UShop New Inventory</p>
            <p>Shop Pre-Owned Inventory</p>
            <p>Build Your Own</p>
            <p>Shop Online</p>
            <p>Access by BMW</p>
            <p>Lease & Financing Offers</p>
            <p>Estimate Payment</p>
            <p>Request a Test Drive</p>
            <p>Contact a BMW Center</p>
            <p>Find a BMW Center</p>
            <p>Subscribe to Updates</p>
            <p>Protection Products</p>
        </div>

        <div className="f_cards">
            <h4>FINANCE & INCENTIVES</h4>
             <br />
            <p>Apply for Financing</p>
            <p>BMW Financial Servicesv</p>
            <p>Manage Your BMW Financial Services Account</p>
            <p>BMW Military Program</p>
            <p>BMW Corporate Fleet Program</p>
            <p>MW Corporate Sales Program</p>
            <p>BMW College Graduate Program</p>
        </div>

        
    </footer>

    
    


    <div className="f_bottt">
        <div className="f_botttr">
            <h1>THE BMW DIFFERENCE</h1>
           <GrNext size={"27px"} />
        </div>
        <div className="f_botttr">
        <h1>EXPERIENCE & PARTNESHIPS</h1>
        <GrNext size={"27px"} />
        </div>
        <div className="f_botttr">
        <h1>ONLINE SHOPPING TOOLS</h1>
        <GrNext  size={"27px"} />
        </div>
        <div className="f_botttr">
        <h1>FINANCE & INCENTIVES</h1>
        <GrNext size={"27px"} />
        </div>
    </div>

    <div className="f_bot">
    <FaInstagram size={"25px"}  />
    <FaYoutube  size={"25px"}  />
    <FaFacebook size={"25px"}  />
    <FaXTwitter size={"25px"}  />
    </div>

    <div className="f_bott">
    <p>© 2023  BMW of North America, LLC. The BMW name, BMW logo, model names, and other trademarks are trademarks of BMW AG.</p>
    </div>
    </div>
    </>
  )
}

export default Footer
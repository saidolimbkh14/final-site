import Local from '@/pages/Local';
import Link from 'next/link';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RxFontSize, RxHamburgerMenu } from "react-icons/rx";

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <div className="container">
        <div className="nav_parent">
          <div className="nav_left">
           <Link href={"/"} > <img src="https://www.bmwusa.com/content/dam/bmwusa/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1695740583851.svg" alt="" /></Link>
            <h3>Models</h3>
            <h3>Build your Own</h3>
            <h3>BMW electric</h3>
            <Link href={'/Shop'} ><h3>Shopping</h3></Link>
            <h3>Owners</h3>
          </div>
          <div className="nav_right">
            
          <Link  href={"Local"}> <CiLocationOn className='local_nav' size={"30px"} />  </Link>
            <Link  href={"Local"}> <p className='localbmw_nav'>Choose your local BMW center</p></Link>
            
            <IoPersonOutline size={"30px"} />
            <IoIosSearch className='lupa_nav' size={"30px"} />
            <RxHamburgerMenu className='mob_burger' onClick={toggleDrawer} size={"30px"} />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              size={"100%"}
              className='bla bla bla'
            >
              <div className='drawer'>
                <div className="drawer_nav">
                  <img src="https://www.bmwusa.com/content/dam/bmwusa/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1695740583851.svg" alt="" />
                 
                 
                  <button  onClose={toggleDrawer}>x</button>
                </div>




                <div className="drawer_1">
                  <h3>AllElectric   - </h3>
                  <h3>EV Charging      - </h3>
                  <h3>Range s Route   -</h3>
                  <h3>Plug-in Hybrid   -</h3>
                  <h3>Hidrogen   -</h3>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
        <div className="nav_bottom">
          <div className="bot_left"><h3>Electromobility</h3></div>
          <div className="bot_center">
            <h3>AllElectric</h3>
            <h3>EV Charging</h3>
            <h3>Range s Route</h3>
            <h3>Plug-in Hybrid</h3>
            <h3>Hidrogen</h3>
          </div>
          <div className="bot_right">
            <button>Contact Dealer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
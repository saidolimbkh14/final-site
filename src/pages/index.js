import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { useGetProductsQuery } from '@/redux/product'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const {data,error,isLoading} = useGetProductsQuery()
  return (
    <>
      <Head>
        <title>BMW</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>


    {error ? (
      <h1>Error</h1>
    ) :(
      <>
        <div className="home_header">
        <Nav />
        <div className="header_i7">
          <h1 className='home_h11'>UNLEASH YOUR <br /> ELECTRIC SIDE</h1>

          <h1 className='home_h1'>UNLEASH <br /> YOUR <br /> ELECTRIC <br /> SIDE</h1>
          <br />
          <br />
          <p>BMW on states of America  <br />
            We make best driving cars order them on our officional site </p>
        </div>
      </div>


      <div className="home_section">
        <div className="home_section_top">
          <img src="https://www.bmwusa.com/content/dam/bmwusa/common/global/desktop/BMW_i_Grey-Colour_RGB.png.bmwimg.xlarge.png" alt="" />
          <h1>Transform your life with every drive.</h1>
          <p>Embodying the ideal blend of luxury, technology, and power, BMW i delivers a thrilling,  sustainably designed all-electric line-up – including pioneering SUVs, stylish Gran Coupes, and  an ultra-luxurious Sedan.</p>
        </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ):(
        <div className="home_section_bottom">

       {data?.slice(0,4)?.map((el) => {
        return(
          <div className="card" key={el.id}>
          <div className="card_top">
            <img src="https://www.bmwusa.com/content/dam/bmwusa/common/global/desktop/BMW_i_Grey-Colour_RGB.png.bmwimg.xlarge.png" alt="" />
            <h4>ELECTRIC</h4>
          </div>
          <div className="card_bottom">
           <img src={el?.img} alt="" />
            <h3>{el?.name}</h3>
            <h4>{el?.price}</h4>
            <h4>{el?.speed}</h4>
          </div>
        </div>
        )
       })}
      </div>
      )}

      </div>

      <div className="home_section2">
        <div className="home_section2_left">
          <h1>ELECTRIFYING <br /> OFFERS</h1>
        </div>
        <div className="home_section2_right">
          <p>Lock in the perfect offer for your dream BMW. Take advantage of lower monthly payments, flexible leasing options, and <br /> special APR financing.</p>
          <br />
          <br />
          <button>explore offers</button>
        </div>

      </div>

      <div className="home_section3">
        <div className="home_section3_h">
          <h1>GO BOLDLY <br />
            GO EVERYWHERE</h1>
        </div>
      </div>

      <div className="home_section4">
        <div className="section4_card">
          <h2>
            Go the distance.
          </h2>
          <br />
          <br />
          <p>
            With ranges from about 230 to over 300 miles <br /> from a single charge (depending on model), all <br /> -electric BMWs can go the distance. This means <br /> you’ll be ready for anything – whether you’re <br /> navigating commuter traffic or taking your next <br /> adventure out of town. </p>
        </div>

        <div className="section4_card">
          <h2>
          Charge with ease.
          </h2>
          <br />
          <br />
          <p>
          Charge at home and on the road with total <br /> convenience. Enjoy complimentary charging <br /> -electric BMWs can go the distance. This means <br /> you’ll be ready for anything – whether you’re <br /> navigating commuter traffic or taking your next <br /> adventure out of town. </p>
        </div>

        <div className="section4_card">
          <h2>
          Full coverage.
          </h2>
          <br />
          <br />
          <p>
          Experience peace of mind. Every BMW electric<br /> vehicle comes with premium maintenance <br /> -electric BMWs can go the distance. This means <br /> you’ll be ready for anything – whether you’re <br /> navigating commuter traffic or taking your next <br /> adventure out of town. </p>
        </div>
      </div>

      <div className="home_section5">
        <p style={{font:'40px'}} > stysaving colculator</p>
        <h1>Electrifying Benefits</h1>
      </div>

       <div className="home_section6">
      <h1>YOUR PERSONAL <br /> UNIVERSE</h1>
       </div>
       

       <div className="home_section7">
        <div className="top6">Ownership starts here.</div>
        <div className="bot6">
          <div className="card6">
            <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/financing/Trade-In-Value_80-px@3x.png.bmwimg.xlarge.png" alt="" />
          <h2>Trade-In Value</h2>
          <p>Get the latest information on your vehicle’s trade-in value today. </p>
          <h5>Visit Black Book</h5>
          </div>

          <div className="card6">
            <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/financing/Credit-Score_80px@3x.png.bmwimg.xlarge.png" alt="" />
          <h2>Check Your Credit Score</h2>
          <p>See where you stand on your journey to owning a BMW.</p>
          <h5>Visit Equifax </h5>
          </div>

          <div className="card6">
            <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/financing/Apply-For-Financing_80-px@3x.png.bmwimg.xlarge.png" alt="" />
          <h2>Apply for Financing</h2>
          <p>Own the BMW of your dreams with BMW Financial Services.</p>
          <h5>Get Started </h5>
          </div>

          <div className="card6">
            <img src="https://www.bmwusa.com/content/dam/bmwusa/common/homepage/financing/Stay-Connected_80-px@3x.png.bmwimg.xlarge.png" alt="" />
          <h2>Stay Connected</h2>
          <p>Receive the latest offers, releases, and news from BMW. </p>
          <h5>Sign Up Now</h5>
          </div>
        </div>
       </div>
      </>
    )}

      <Footer />


    </>
  )
}
import Nav from '@/components/Nav'
import Head from 'next/head'
import React from 'react'
import { useGetProductsQuery } from '@/redux/product'
import Footer from '@/components/Footer'
import { CiSearch } from "react-icons/ci";
import Link from 'next/link'
import Image from 'next/image'

const Electric = () => {
  const {data,isLoading} = useGetProductsQuery()
  return (
    <>
    <Head>
        <title>BMW shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      
        <div className="shop_nav">
        <Nav />
        </div>

        

      <div className="shop">
      <div className="shop_header">
          <div className="s_header">
            <h1>More than 200+ Vehicles</h1>
            <p>show filter +</p>
          </div>
          <div className="ss_header">
            <input type="text" placeholder='search'  />
            <CiSearch  size={"25px"}  className='inp_search'/>
          </div>
        </div>
      {isLoading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ):(
        <div className="shop_parent">

       {data?.map((el) => {
        return(
         <Link href={`/Product/${el?.id}`} >
          <div className="card12" key={el?.id}>
           <img src={el?.img} alt="" />
            <h3>{el?.name}</h3>
            <h4>{el?.price}</h4>
            <h4>{el?.speed}</h4>
            <div className="card12_bottom">
              <button>Get aQuote</button>
              <button>See Details</button>
            </div>
        </div>
         </Link>
        )
       })}
      </div>
      )}
      </div>

      <Footer/>

    </>
  )
}

export default Electric
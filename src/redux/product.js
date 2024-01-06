import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath:"productApi",
    tagTypes:['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:7878"
    }),
    endpoints: (builder) => ({
     getProducts:builder.query({
      query: () => '/products',
     providesTags:["Product"]
     }),
     getUserById: builder.query({
        query: (id) => `/products/${id}`,

        providesTags: ['Product'],
     }),
    })
})

export const  {useGetProductsQuery,useGetUserByIdQuery} = productApi
import CarsHeader from '@/components/CarsHeader'
import CarsList from '@/components/CarsList'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section>
      <CarsHeader />
      <section className="max-w-screen-xxl xxl:mx-auto paddings">
        <form className="mt-5  relative">
          <input type="text"  className="input-search paddings-x w-full" placeholder="Search For Your Dream Car..."/>
          <Image src='/assets/icons/search-line.svg' height={50} width={120} className="absolute top-[-34px] left-[-35px]" alt="search " />
        </form>
        <CarsList />
      </section>
    </section>
  )
}

export default page
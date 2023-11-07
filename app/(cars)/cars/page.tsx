import CarsHeader from '@/components/CarsHeader'
import CarsList from '@/components/CarsList'
import SearchInput from '@/components/SearchInput'
import React from 'react'

const page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || '';

  

  return (
    <section>
      <CarsHeader />
      <section className="max-w-screen-xxl xxl:mx-auto paddings">
        <SearchInput  />

        <CarsList query={query} />
      </section>
    </section>
  )
}

export default page
import React from 'react'
import Link from 'next/link'
const JoinourTeam = () => {
  return (
    <div>
      <section className="py-4 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
      <div className="w-full lg:w-1/2">
        <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
          Our leading, strong &amp; creative team
        </h2>
        <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
          These people work on making our product best.
        </p>
        <Link href="/careers">
        <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">
          Join our team
        </button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
          <img
            src="/t1.jpg"
            alt="Team tailwind section"
            className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
          />
          <img
            src="/t2.png"
            alt="Team tailwind section"
            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
          />
          <img
            src="/vasu.png"
            alt="Team tailwind section"
            className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
          />
          <img
            src="/t4.jpg"
            alt="Team tailwind section"
            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
          />
          <img
            src="/Chandan.png"
            alt="Team tailwind section"
            className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
          />
          <img
            src="/mk.png"
            alt="Team tailwind section"
            className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default JoinourTeam

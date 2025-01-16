import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="sm:flex items-center dark:bg-gray-900">
    <div className="sm:w-1/2 p-10 md:pl-28">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase dark:text-gray-500">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-400 sm:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
    </div>
    
  <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        {/* <h2 className="font-heading mb-4 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
          Why choose us?
        </h2> */}
        <Button className='font-heading bg-orange-100 dark:bg-orange-700 text-orange-800 dark:text-orange-200 uppercase tracking-widest text-xs md:text-base'>Why choose us?</Button>
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          We know tech, we know finance. We are fintech experts.
        </p>
        <p className="mt-4 max-w-2xl text-sm md:text-lg text-gray-500 dark:text-gray-400 lg:mx-auto">
          We know how to handle taxation for all the countries we operate in. We care for our customers and help them manage cashflows.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="API settings icon" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Powerful API</p>
            </dt>
            <dd className="mt-2 ml-16 text-sm md:text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/503138/webpack.svg" alt="SDK icon" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Easy to integrate SDK</p>
            </dt>
            <dd className="mt-2 ml-16 text-sm md:text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" alt="Dashboard icon" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Low Transaction Cost</p>
            </dt>
            <dd className="mt-2 ml-16 text-sm md:text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" alt="Label icon" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Powerful Dashboard</p>
            </dt>
            <dd className="mt-2 ml-16 text-sm md:text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default page

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <div className="relative">
        <div className="sticky h-screen top-0 flex justify-center items-center flex-col bg-green-600">
          Hey Bro.
        </div>
        <div className="sticky h-screen top-0 flex justify-center items-center flex-col bg-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="sticky h-screen top-0 flex justify-center items-center flex-col bg-yellow-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque odio est.
        </div>
        <div className="sticky h-screen top-0 flex justify-center items-center flex-col bg-blue-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet consectetur architecto deleniti veritatis cupiditate. Praesentium cupiditate corrupti quod unde recusandae.
        </div>
      </div> */}
      <section className="relatve">
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
      <h1 className="mb-4 text-4xl font-semibold md:text-6xl">The Website You Want Without The <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">Dev Time</span>.</h1>
      <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
      <div className="flex justify-center">
        <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">Get Started</a>
        <a href="#" className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]">
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" className="mr-2 inline-block w-6" />
          <p className="text-black dark:text-white">View Showreel</p>
        </a>
      </div>
    </div>
    <div className="relative mx-auto h-[512px]">
      <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl" />
      <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black dark:bg-white/75"></div>
    </div>
  </div>
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block" />
</section>
<section>
<div className="pt-5 bg-gray-100 dark:bg-gray-900" id="pricing" data-theme="light">
  <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing</h1>
      <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Whether it's just you, or your entire team - we've got you covered.
      </p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
      Choose the product that works best
    </p>
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

    <div className="ring-1 ring-gray-300 dark:ring-white/10 rounded-3xl p-8 xl:p-10">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
            Product Type 1
          </h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">Product details for Product Type 1</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">€ 10 / unit</span>
        </p>
        <a
          href="/order"
          aria-describedby="product1"
          className="bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 focus-visible:outline-gray-600 dark:focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Order Now
        </a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-900 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
            40 units
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-900 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
            1 feature
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-900 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
            Fast delivery
          </li>
        </ul>
      </div>

      <div className="bg-white/5 ring-2 ring-indigo-700 rounded-3xl p-8 xl:p-10">
        <div className="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" className="text-lg font-semibold leading-8 text-black dark:text-white">Product Type 2</h2>
          <p className="rounded-full bg-indigo-700 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-800 dark:text-gray-300">The most popular choice. Product details for Product Type 2</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-black dark:text-white">€ 20 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a href="/order" aria-describedby="product2"
          className="bg-indigo-700 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
          Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-800 dark:text-gray-300 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>120 units</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>3 different features</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Fast delivery</li>
        </ul>
      </div>

      <div className="ring-1 ring-gray-300 dark:ring-white/10 rounded-3xl p-8 xl:p-10">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
            Product Type 3
          </h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">Product details for Product Type 3</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">€ 50 / unit</span>
        </p>
        <a
          href="/order"
          aria-describedby="product1"
          className="bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 focus-visible:outline-gray-600 dark:focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Order Now
        </a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-900 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
            40 units
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-900 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
            1 feature
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-900 dark:text-white"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              ></path>
            </svg>
            Fast delivery
          </li>
        </ul>
      </div>

      
    </div>
  </div>
</div>
</section>
    </main>
  );
}

import React from "react"

const Home = () => {
    const photos = [
      "https://i.postimg.cc/X7MYWBPp/IMG-20230817-WA0003.jpg",
      "https://i.postimg.cc/Gp6WJpb6/IMG-20230815-WA0011.jpg",
    
    "https://i.postimg.cc/G21MmTL3/IMG-20230815-WA0012.jpg"];

  return (
    <div>

          <div className="flex flex-col justify-center w-full my-[102.5px] sm:mt-[260px] ">
      <div className="mx-2 max-w-md mx-auto w-full flex-col items-center">
        {
          photos.map((img) => {
            
            return <div key={img} className="">
              <img className="w-full h-full object-cover" src={img} />
            </div>
          })
        }
      </div>
    </div>

      <div className="mx-2 sm:mx-8 font-medium text-lg mt-24  mb-10 text-justify">

        <h1 className="text-3xl text-center font-bold text-blue-800 mt-14 "> Welcome to NYCL, India's 1st and No.1 Cricket League.</h1>
<ul className="list-outside">
        <li className="mb-4 mt-6 "> NYCL is a private organization NYCL organization has been formed to promote enthusiastic youth having sports talent.</li>

        <li className="mt-4 text-gray-800">Although the idea of forming NYCL first came in 2022 itself, but considering various types of shortcomings, we formed this league in 2023 after considering them.</li>

        <li className="mt-4 text-gray-800">We formed this league considering all the aspects of a player's experience as well as what problems come in a player's life.</li>

        <li className="mt-4 text-gray-800">Now we will not let the hard work of the players go waste, with this resolution we formed this league. (You work hard, it is our responsibility to make your future)
          One for players of all age group U12 U14, U16 U19, 23, 25 in NYCL Cricket</li>
</ul>

        <h2 className=" font-semibold text-2xl my-8 text-center text-blue-800">Environment</h2>

        <p className="mt-4 text-gray-800">NYCL provides an opportunity to the institution to provide a proper playing environment and platform to young cricketers has been established for.
        </p>

        <li className="mt-4 text-gray-800 list-outside">NYCL is a center for player skill assessment. We place special emphasis on each player as an individual in order to improve their athletic ability and skills.
        </li>


      </div>
    </div>
  )
}

export default Home
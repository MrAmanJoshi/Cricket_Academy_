import React from "react"

const Gallery = () => {
  const photos = [
    

    
"https://i.postimg.cc/G21MmTL3/IMG-20230815-WA0012.jpg",
        "https://i.postimg.cc/8Phz7qm1/IMG-20230815-WA0013.jpg",
        "https://i.postimg.cc/Gp6WJpb6/IMG-20230815-WA0011.jpg",
    "https://i.postimg.cc/X7MYWBPp/IMG-20230817-WA0003.jpg",
    
  ];

  return (
    <div className="flex flex-col justify-center w-full mt-[102.5px] sm:mt-[200px] bg-gradient-to-r from-orange-100 to-cyan-100 py-24 flex justify-center items-center">
      <div className=" grid  sm:grid-cols-2 ">
        {
          photos.map((img) => {
            
            return <div key={img} className="border rounded-lg shadow-lg shadow-orange-400 drop-shadow-lg mx-2  mb-8 w-[300px] h-[250px] sm:w-[400px]  sm:h-[300px]">
              <img className="w-full h-full object-cover" src={img} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Gallery;
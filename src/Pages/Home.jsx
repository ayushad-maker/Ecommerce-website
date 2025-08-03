import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const navigation = useNavigate
  const categories = [
    { 
     title: "Shoes", 
     img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5a842421e6403fb2b62216e15952dd_9366/DRUMLIN_Shoes_Black_JK7709_01_00_standard.jpg",
     link: "/product" ,  
    },
    { 
      title: "Women", 
      link:"https://www.adidas.co.in/women-clothing",
      img: "https://imgs.search.brave.com/HH4kJDJx51hYTVqkoJVLRezMoIY1oIumGPecgEUvb8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5hMS5sYWNvc3Rl/LmNvbS9kdy9pbWFn/ZS92Mi9BQVVQX1BS/RC9vbi9kZW1hbmR3/YXJlLnN0YXRpYy8t/L0xpYnJhcnktU2l0/ZXMtTGFjb3N0ZUNv/bnRlbnQvZGVmYXVs/dC9kdzA4NDI5ZmYz/L1NTMjUvUExQLUhl/YWRlcnMvd29tZW5f/c2FsZS5qcGc_aW13/aWR0aD0xNDAmaW1w/b2xpY3k9Y3VzdG9t/JmltZGVuc2l0eT0x", },
    { 
      title: "Kids",
      link: "https://www.adidas.co.in/kids-4_8_years",
      img: "https://imgs.search.brave.com/by-KOpvvmTamhk6-vaBdEfmdDlIyClCbhIMRCnajbgA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a2lkc2NvbXBhbnku/aXQvY2RuL3Nob3Av/ZmlsZXMvYmFtYmlu/b18xMDBfNzdiZWQ2/NTQtMzhkNS00NmRk/LWI4OWMtNjE2YTVi/OTE4YmM4LmpwZz92/PTE2ODI5NTU4NTkm/d2lkdGg9NjQw" },
    { 
      title: "Accessories",
      link: "https://www.adidas.co.in/originals-accessories",
      img: "https://imgs.search.brave.com/FVpdZI8iHdqnX8HhNmaIb7gMK893eAQ6TKmcT4Ol6cc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM4/Mzg1OTM4L3Bob3Rv/L21lbnMtYWNjZXNz/b3JpZXMtb3JnYW5p/emVkLW9uLXRhYmxl/LWluLWtub2xsaW5n/LWFycmFuZ2VtZW50/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0xanM3U1B3RGx0/Zi1rZXlTZFJjMThK/QlRoQnJ2dm5LenJB/QnBueHNyTDlNPQ", },
  ];

  return (
    <>
      <HeroBanner />

      {/* Shop by Category Section */}
      <section id='products' className='py-16 px-6 bg-white'>
        <h2 className='italic text-3xl font-bold text-emerald-500 text-center mb-10 underline'>
          Shop Category
        </h2>
        
        
        <div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {categories.map((category, key) => (
            <Link
            to={category.link}
            key={key}
            rel='noopener noreferre'
            className='block'
            >
            <div
              key={key}
              className='relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition duration-300'
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute inset-0  hover:scale-110 '></div>
              <h3 className='absolute bottom-4 left-4 text-black text-2xl font-bold drop-shadow-lg'>
                {category.title}
              </h3>
            </div>
            </Link>
           ))}
          
        </div>
      
      </section>


     <section className="relative py-10 bg-black">
<div className="relative h-[80vh] w-full overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/oD4PVOIzTQg?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=oD4PVOIzTQg"
    title="Adidas Commercial"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
  ></iframe>

  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
    {/* Optional: Overlay content */}
  </div>
</div>


</section>

      

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-around py-10 bg-gray-200 text-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-emerald-600">10M+</h2>
          <p className="text-gray-700">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-emerald-600">80+</h2>
          <p className="text-gray-700">Countries Served</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-emerald-600">500+</h2>
          <p className="text-gray-700">Exclusive Products</p>
        </div>
      </div>
    </>
  )
}

export default Home

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
      title: "Jersey", 
      link:"/jersey",
      img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/aba2d03140364ed1bd6080ced9769796_9366/Arsenal_24-25_Third_Jersey_Blue_IZ0114_HM4.jpg",
    },
    { 
      title: "Hoodies",
      link: "/hoodies",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b9218bd4fb54f11ac074ad78a5f4779_9366/adidas_By_Stella_McCartney_Peplum_Hoodie_Beige_JX9108_HM1.jpg" },
    { 
      title: "Accessories",
      link: "/accessories",
      img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/be6b3b22322d41648196ce692a4d5e81_9366/Power_Backpack_Black_IP9774_27_model.jpg", },
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

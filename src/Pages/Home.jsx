import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { Link } from 'react-router-dom'
import { FaSmile, FaGlobe, FaStar } from 'react-icons/fa'

const Home = () => {
  const categories = [
    {
      title: 'Shoes',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5a842421e6403fb2b62216e15952dd_9366/DRUMLIN_Shoes_Black_JK7709_01_00_standard.jpg',
      link: '/shoes',
    },
    {
      title: 'Jersey',
      link: '/jersey',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/aba2d03140364ed1bd6080ced9769796_9366/Arsenal_24-25_Third_Jersey_Blue_IZ0114_HM4.jpg',
    },
    {
      title: 'Hoodies',
      link: '/hoodies',
      img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b9218bd4fb54f11ac074ad78a5f4779_9366/adidas_By_Stella_McCartney_Peplum_Hoodie_Beige_JX9108_HM1.jpg',
    },
    {
      title: 'Accessories',
      link: '/accessories',
      img: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/be6b3b22322d41648196ce692a4d5e81_9366/Power_Backpack_Black_IP9774_27_model.jpg',
    },
  ]

  return (
    <>
      <HeroBanner />

      {/* Category Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="italic text-3xl font-bold text-emerald-500 text-center mb-12 underline">
          Shop Category
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
          {categories.map((category,key) => (
            <Link to={category.link} key={key} className="group block rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40   transition duration-300" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold z-10 drop-shadow-lg hover:text-3xl">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Video Section */}
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
            {/* Optional: Add a CTA like "Shop Now" here */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-10">
        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-8 max-w-6xl mx-auto px-4">
          <div>
            <FaSmile className="text-4xl text-emerald-500 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-emerald-600">10M+</h2>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div>
            <FaGlobe className="text-4xl text-emerald-500 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-emerald-600">80+</h2>
            <p className="text-gray-700">Countries Served</p>
          </div>
          <div>
            <FaStar className="text-4xl text-emerald-500 mx-auto mb-2" />
            <h2 className="text-3xl font-bold text-emerald-600">500+</h2>
            <p className="text-gray-700">Exclusive Products</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const products = [
  {
    title: "UltraBOOST Running Shoes",
    img: "https://m.media-amazon.com/images/I/61IR1qCY9GL._SY625_.jpg",
    price: "₹17,999"
  },
  {
    title: "Adicolor Hoodie",
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4a4a69358b564802bd97ab3f00d3c9c1_9366/Adicolor_Essentials_Trefoil_Hoodie_Purple.jpg",
    price: "₹4,599"
  },
  {
    title: "Performance Backpack",
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/54bbd8f1506b4c9c983dadf100d6c4ae_9366/Classic_Backpack_Grey.jpg",
    price: "₹1,999"
  }
];

const FeaturedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-16 px-6 bg-gray-100">
      <Slider {...settings}>
        {products.map((item, i) => (
          <div key={i} className="px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[400px] object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-emerald-600 font-bold mb-4">{item.price}</p>
              <Link
                to="/products"
                className="bg-emerald-700 text-white rounded-2xl py-2 px-6 hover:bg-emerald-800 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedSlider;

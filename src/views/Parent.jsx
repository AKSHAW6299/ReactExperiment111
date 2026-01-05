import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Search, ShoppingCart, User, Heart, ChevronRight,
  ChevronLeft, Star, Mail, Facebook, Twitter, Instagram, Youtube,
  Home, Cookie, Sparkles, Lamp, Baby, Activity, // Added these for better relevance
  Utensils,
  Flame,
  HeartPulse,
  Calendar, Folder,
} from 'lucide-react';

const SiazHubComplete = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.khusindia.com/rest/api/product');
        setProducts(res.data.result.data.result);
      } catch (err) {
        console.error("API Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Sub-component for Product Cards to match screenshots
  const ProductCard = ({ item, badge }) => (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 group hover:shadow-xl transition-all duration-300 relative">
      {badge && (
        <span className="absolute top-4 left-4 bg-[#8BC34A] text-white text-[10px] px-2 py-0.5 rounded font-semibold z-10">
          {badge}
        </span>
      )}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-[#F9F9F9]">
        <img
          src={item.images[0]}
          alt={item.product_name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition duration-500"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={18} className="text-gray-400 hover:text-red-500" />
        </button>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-800 truncate">{item.product_name}</h4>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-gray-400 font-semibold uppercase">1 Unit</span>
          <div className="flex items-center text-yellow-400">
            <Star size={10} fill="currentColor" />
            <span className="text-[10px] text-gray-700 font-semibold ml-0.5">4.5</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-black text-gray-900">₹{item.price.discount_price}.00</span>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button className="px-2 py-1 bg-gray-50 hover:bg-gray-100 text-xs">-</button>
            <span className="px-2 text-xs font-semibold">1</span>
            <button className="px-2 py-1 bg-gray-50 hover:bg-gray-100 text-xs">+</button>
          </div>
        </div>
        <button className="w-full mt-3 py-2 text-xs font-semibold text-gray-400 border border-gray-100 rounded-lg group-hover:bg-[#232323] group-hover:text-white transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );

  const categories = [
    { name: 'Home & Living', icon: <Home size={24} /> },
    { name: 'Grocery', icon: <Utensils size={24} /> },
    { name: 'Daily Spices', icon: <Flame size={24} /> },
    { name: 'Household', icon: <Lamp size={24} /> },
    { name: 'Personal Care', icon: <HeartPulse size={24} /> },
    { name: 'Baby & Kids', icon: <Baby size={24} /> }
  ];

  const blogPosts = [
    {
      title: "Top 10 casual look ideas to dress up your kids",
      tag: "TIPS & TRICKS",
      img: "https://siazhub.web.app/images/post-thumb-1.jpg"
    },
    {
      title: "Latest trends of wearing street wears supremely",
      tag: "TRENDING",
      img: "https://siazhub.web.app/images/post-thumb-2.jpg"
    },
    {
      title: "10 Different Types of comfortable clothes ideas for women",
      tag: "INSPIRATION",
      img: "https://siazhub.web.app/images/post-thumb-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. TOP NAV / HEADER (Screenshot 1 & 10) */}
      <header className="border-b bg-white">
        <div className="max-w-9xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <img src="https://siazhub.web.app/images/logo.png" alt="Logo" className="h-8" />
            <div className="hidden lg:flex items-center bg-[#F3F4F6] rounded-lg px-4 py-2 w-[400px]">
              <span className="text-xs text-gray-400 border-r pr-3 mr-3 whitespace-nowrap cursor-pointer">All Categories</span>
              <input type="text" placeholder="Search for more than 20,000 products" className="bg-transparent text-xs outline-none w-full" />
              <Search size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-semibold text-gray-600">
            <span className="cursor-pointer hover:text-blue-600">Apply for Store Partner</span>
            <div className="flex items-center gap-4">
              <User size={20} className="cursor-pointer" />
              <Heart size={20} className="cursor-pointer" />
              <div className="flex items-center gap-2 cursor-pointer bg-white">
                <div className="relative">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">Your Cart</p>
                  <p className="text-xs font-black text-gray-900">₹00.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CIRCULAR CATEGORIES (Screenshot 2) */}
      <section className="max-w-10xl mx-auto px-4 py-12 mt-8 flex justify-center gap-3 overflow-x-auto no-scrollbar">
        {[
          { name: 'Home & Living', img: 'https://siazhub.web.app/cimg/1.png' },
          { name: 'Grocery', img: 'https://siazhub.web.app/cimg/2.png' },
          { name: 'Daily Spices', img: 'https://siazhub.web.app/cimg/3.png' },
          { name: 'Household', img: 'https://siazhub.web.app/cimg/4.png' },
          { name: 'Personal Care', img: 'https://siazhub.web.app/cimg/5.png' },
          { name: 'Baby & Kids', img: 'https://siazhub.web.app/cimg/6.png' }
        ].map((cat, i) => (
          <div key={i} className="flex flex-col items-center group cursor-pointer">
            <div className="w-28 h-28 rounded-2xl overflow-hidden mb-2 shadow-sm border border-transparent group-hover:border-blue-600 transition-all">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-semibold text-gray-500 uppercase text-center">{cat.name}</span>
          </div>
        ))}
      </section>

      {/* 3. HERO BANNER GRID (Screenshot 2 & 10) */}
      {/* Parent container modified for 60/40 ratio, inner classes preserved */}
      <section className="max-w-10xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 mb-12">

        {/* 1st div: Now occupies 60% */}
        <div className="lg:col-span-1 bg-[#E3F2F7] rounded-3xl p-12 flex relative overflow-hidden">
          <div className="z-10 max-w-sm">
            <span className="text-[#D4AF37] font-serif italic text-2xl">100% Natural</span>
            <h3 className="text-5xl font-semibold leading-[1.2] text-[#222] mt-4 mb-4">
              Fresh Smoothie &amp; Summer Juice
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic at dolorem pariatur eius sit esse!</p>
            <button className="border-2 border-gray-800 px-8 py-3 mt-6 rounded-lg font-semibold text-sm hover:bg-black hover:text-white transition uppercase tracking-wider">Shop Now</button>
          </div>
          <img src="https://siazhub.web.app/images/product-thumb-1.png" className="absolute right-0 bottom-0 h-[90%] object-contain" alt="Juice" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>

        {/* 2nd div: Now occupies 40% */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#E9F3E9] rounded-3xl p-8 flex justify-between items-center h-full relative overflow-hidden">
            <div className="z-10">
              <span className="text-3xl font-light">20% Off</span>
              <p className="text-[10px] font-semibold tracking-[4px] my-2 text-gray-400 uppercase">________ Sale</p>
              <h3 className="text-2xl font-semibold leading-tight">Fruits & <br /> Vegetables</h3>
              <button className="text-xs font-semibold mt-4 flex items-center gap-1 border-b border-black pb-1">Shop Collection <ChevronRight size={12} /></button>
            </div>
            <img src="https://siazhub.web.app/images/ad-image-1.png" className="h-32 object-contain" alt="Veg" />
          </div>

          <div className="bg-[#F9E9E9] rounded-3xl p-8 flex justify-between items-center h-full relative overflow-hidden">
            <div className="z-10">
              <span className="text-3xl font-light">15% Off</span>
              <p className="text-[10px] font-semibold tracking-[4px] my-2 text-gray-400 uppercase">Sale</p>
              <h3 className="text-2xl font-semibold leading-tight">Baked <br /> Products</h3>
              <button className="text-xs font-semibold mt-4 flex items-center gap-1 border-b border-black pb-1">Shop Collection <ChevronRight size={12} /></button>
            </div>
            <img src="https://siazhub.web.app/images/ad-image-2.png" className="h-32 object-contain" alt="Bread" />
          </div>
        </div>
      </section>

      {/* 4. CATEGORY TILES & NEW BRANDS (Screenshot 11) */}
      <section className="max-w-10xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-semibold text-gray-800">Category</h3>
          <div className="flex gap-4 items-center">
            <span className="text-xs font-semibold text-gray-400">View All Categories →</span>
            <div className="flex gap-1">
              <button className="p-2 bg-gray-100 rounded text-gray-400 hover:bg-gray-200 transition">
                <ChevronLeft size={16} />
              </button>
              <button className="p-2 bg-gray-100 rounded text-gray-400 hover:bg-gray-200 transition">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-50 shadow-sm flex flex-col items-center hover:shadow-md transition cursor-pointer">
              <div className="p-4 bg-blue-50/50 rounded-2xl mb-4 text-blue-600">
                {cat.icon}
              </div>
              <span className="text-xs font-semibold text-gray-800 text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEWLY ARRIVED BRANDS SECTION */}
      <section className="max-w-10xl mx-auto px-4 py-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
            Newly Arrived Brands
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 cursor-pointer hover:text-black transition-colors">
              View All Categories →
            </span>
            <div className="flex gap-2">
              <button className="p-2 rounded-md bg-gray-100 text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 rounded-md bg-gray-100 text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "https://siazhub.web.app/images/product-thumb-11.jpg", color: "bg-[#D6C5BC]" },
            { img: "https://siazhub.web.app/images/product-thumb-12.jpg", color: "bg-[#E2E8ED]" },
            { img: "https://siazhub.web.app/images/product-thumb-13.jpg", color: "bg-[#D4D9C1]" },
            { img: "https://siazhub.web.app/images/product-thumb-14.jpg", color: "bg-[#E5E5E5]" },
          ].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Brand Image Container */}
              <div className={`w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 ${brand.color}`}>
                <img
                  src={brand.img}
                  alt="Amber Jar"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              {/* Brand Details */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Amber Jar
                </p>
                <h4 className="text-lg text-gray-500 leading-snug">
                  Honey best nectar you wish to get
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRENDING PRODUCTS (Screenshot 9) */}
      <section className="max-w-10xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-semibold text-gray-800 tracking-tight">Trending Products</h3>
          <div className="flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            <span className="text-yellow-600 border-b-2 border-yellow-600 pb-1">All</span>
            <span className="hover:text-yellow-600 cursor-pointer">Fruits & Veges</span>
            <span className="hover:text-yellow-600 cursor-pointer">Juices</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.slice(0, 10).map((p, i) => (
            <ProductCard key={p._id} item={p} badge={i < 2 ? "-30%" : null} />
          ))}
        </div>
      </section>

      {/* 6. PROMO BANNERS (Screenshot 6) */}
      <section className="max-w-10xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F9E9E9] rounded-2xl p-10 flex relative overflow-hidden group">
          <div className="z-10">
            <span className="text-[#D4AF37] italic font-serif text-lg">Upto 25% Off</span>
            <h3 className="text-3xl font-black text-gray-800 mt-2 mb-6">Luxa Dark Chocolate</h3>
            <p className="text-xs text-gray-500 max-w-[200px] mb-8">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-[#232323] text-white px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest">Shop Now</button>
          </div>
          <img src="https://siazhub.web.app/images/ad-image-3.png" className="absolute right-4 bottom-4 h-40" alt="Choco" />
        </div>
        <div className="bg-[#E3F2F7] rounded-2xl p-10 flex relative overflow-hidden group">
          <div className="z-10">
            <span className="text-[#D4AF37] italic font-serif text-lg">Upto 25% Off</span>
            <h3 className="text-3xl font-black text-gray-800 mt-2 mb-6">Creamy Muffins</h3>
            <p className="text-xs text-gray-500 max-w-[200px] mb-8">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-[#232323] text-white px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest">Shop Now</button>
          </div>
          <img src="https://siazhub.web.app/images/ad-image-4.png" className="absolute right-4 bottom-4 h-40" alt="Muffin" />
        </div>
      </section>

      {/* 7. BEST SELLING PRODUCTS */}
      <section className="py-12 bg-white">
        <div className="max-w-10xl mx-auto px-4">

          {/* Section Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-black text-gray-800 tracking-tighter uppercase italic">
              Best selling products
            </h2>
            <a href="#" className="text-sm font-semibold text-gray-400 hover:text-green-600 transition-colors">
              View All Products →
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((item) => (
              <div
                key={item._id}
                className="bg-white border border-gray-100 rounded-3xl p-5 group hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-[#F8F8F8]">
                  <img
                    src={item.images[0]}
                    alt={item.product_name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hover Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-red-50 hover:text-red-500 transition-colors">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 group-hover:text-green-600 transition-colors">
                    {item.product_name}
                  </h4>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-400">4.5</span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-black text-gray-900">₹{item.price.discount_price}</span>
                      {item.price.discount_percentage > 0 && (
                        <span className="text-xs text-gray-400 line-through">₹{item.price.actual_price}</span>
                      )}
                    </div>

                    {/* Quantity & Add Button UI from Screenshot */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2 bg-gray-50/50">
                        <button className="text-gray-400 hover:text-black font-semibold">-</button>
                        <span className="text-xs font-black">1</span>
                        <button className="text-gray-400 hover:text-black font-semibold">+</button>
                      </div>
                      <button className="w-full py-3 bg-white text-gray-400 border border-gray-100 rounded-xl text-xs font-semibold uppercase tracking-widest group-hover:bg-[#232323] group-hover:text-white group-hover:border-[#232323] transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DISCOUNT FORM (Screenshot 7) */}
      <section className="max-w-10xl mx-auto px-4 py-20">
        <div
          className="bg-[#E3F2F7] rounded-[40px] p-32 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
          style={{
            backgroundImage: `url('https://siazhub.web.app/images/bg-leaves-img-pattern.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundBlendMode: 'multiply'
          }}
        >
          {/* Content Overlay to ensure text readability against the pattern */}
          <div className="md:w-1/2 z-10">
            <h2 className="text-5xl font-semibold text-gray-500 mb-6">
              Get <span className="text-yellow-400 underline decoration-4 underline-offset-8">25% Discount</span> on your first purchase
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas.
            </p>
          </div>

          <div className="md:w-1/2 space-y-4 w-full z-10">
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-gray-400 uppercase">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-xl border-none outline-none shadow-sm focus:ring-2 focus:ring-yellow-400 transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-gray-400 uppercase">Email</label>
              <input
                type="email"
                placeholder="abc@mail.com"
                className="w-full p-4 rounded-xl border-none outline-none shadow-sm focus:ring-2 focus:ring-yellow-400 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" id="news" className="rounded border-gray-300 text-[#232323] focus:ring-[#232323]" />
              <label htmlFor="news" className="text-xs text-gray-500 font-semibold cursor-pointer">
                Subscribe to the newsletter
              </label>
            </div>
            <button className="w-full bg-[#232323] text-white py-4 rounded-xl font-semibold uppercase tracking-widest shadow-xl hover:bg-black transition-colors">
              Submit
            </button>
          </div>

          {/* Decorative blur effect often seen in these layouts */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 pointer-events-none"></div>
        </div>
      </section>

      {/* 5. TRENDING PRODUCTS (Screenshot 9) */}
      <section className="max-w-10xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-semibold text-gray-800 tracking-tight">Most Popular Products
             (This is dynamic)</h3>
          <div className="flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            <span className="text-yellow-600 border-b-2 border-yellow-600 pb-1">All</span>
            <span className="hover:text-yellow-600 cursor-pointer">Fruits & Veges</span>
            <span className="hover:text-yellow-600 cursor-pointer">Juices</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.slice(0, 10).map((p, i) => (
            <ProductCard key={p._id} item={p} badge={i < 2 ? "-30%" : null} />
          ))}
        </div>
      </section>

      {/* 5. Just arrived PRODUCTS (Screenshot 9) */}
      <section className="max-w-10xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-semibold text-gray-800 tracking-tight">Just Arrived</h3>
          <div className="flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            <span className="text-yellow-600 border-b-2 border-yellow-600 pb-1">All</span>
            <span className="hover:text-yellow-600 cursor-pointer">Fruits & Veges</span>
            <span className="hover:text-yellow-600 cursor-pointer">Juices</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.slice(0, 10).map((p, i) => (
            <ProductCard key={p._id} item={p} badge={i < 2 ? "-30%" : null} />
          ))}
        </div>
      </section>

      {/* 2. Our Recent Blog (Matches image_9c95fd.jpg) */}
      <section className="max-w-10xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-semibold text-gray-800">Our Recent Blog</h3>
          <span className="text-xs font-semibold text-gray-400 cursor-pointer hover:text-gray-600 transition">
            Read All Articles →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container with specific 4/3 Aspect Ratio */}
              <div className="rounded-3xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                <img
                  src={post.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  alt={post.title}
                />
              </div>

              {/* Meta Info: Date and Tag */}
              <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> 22 AUG 2021
                </span>
                <span className="flex items-center gap-1">
                  <Folder size={12} /> {post.tag}
                </span>
              </div>

              {/* Title and Excerpt */}
              <h4 className="text-lg font-semibold text-gray-800 leading-snug mb-3 group-hover:text-blue-600 transition">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. REFINED APP PROMOTION SECTION */}
      <section className="max-w-10xl mx-auto px-4 pt-20 pb-32 mt-4"> {/* Increased bottom padding for the overlap */}
        <div className="bg-[#FFF8E7] rounded-[60px] px-8 md:px-20 flex flex-col md:flex-row items-center justify-between relative min-h-[500px]">

          {/* Left Side: Mobile Mockup (Exceeding the bottom) */}
          <div className="md:w-1/2 flex justify-center md:justify-start relative z-20">
            <div className="relative md:-mb-32 md:mt-[-100px]"> {/* Negative margin pulls it down/up */}
              <img
                src="https://siazhub.web.app/images/phone.png"
                alt="Foodmart Mobile UI"
                className="w-[220px] md:w-[380px] object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 z-10 py-16 md:py-24 text-center md:text-left">
            <h3 className='text-4xl py-8 text-gray-400'>Shop faster with foodmart App</h3>
            <p className="text-[#6B7280] text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                <img
                  src="https://siazhub.web.app/images/app-store.jpg"
                  alt="App Store"
                  className="h-14 md:h-16 rounded-xl shadow-lg"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                <img
                  src="https://siazhub.web.app/images/google-play.jpg"
                  alt="Google Play"
                  className="h-14 md:h-16 rounded-xl shadow-lg"
                />
              </a>
            </div>
          </div>

          {/* Background Decorative Blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/40 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </section>

      {/* 10. FOOTER & TAGS SECTION */}
      <footer className="pt-20 pb-10 border-t bg-white">
        <div className="max-w-10xl mx-auto px-4">

          {/* People are also looking for (Tag Cloud) */}
          <div className="mb-20">
            <h4 className="text-xl text-gray-700 mb-6">People are also looking for</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Blue diamon almonds", "Angie's Boomchickapop Corn", "Salty kettle Corn",
                "Chobani Greek Yogurt", "Sweet Vanilla Yogurt", "Foster Farms Takeout Crispy wings",
                "Warrior Blend Organic", "Chao Cheese Creamy", "Chicken meatballs"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-[#FFC107] text-[#232323] text-md font-semibold rounded-md cursor-pointer hover:bg-black hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
              {/* Repeat tags to fill space as seen in screenshot */}
              {["Blue diamon almonds", "Angie's Boomchickapop Corn", "Salty kettle Corn", "Chobani Greek Yogurt"].map((tag, i) => (
                <span key={`dup-${i}`} className="px-4 py-1.5 bg-[#FFC107] text-[#232323] text-md font-semibold rounded-md cursor-pointer hover:bg-black hover:text-white transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Service Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
            {[
              { icon: <ShoppingCart size={24} className="text-gray-700" />, title: 'Free delivery', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
              { icon: <div className="border-2 border-gray-700 rounded-lg p-0.5"><Heart size={18} className="text-gray-700" /></div>, title: '100% secure payment', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
              { icon: <div className="border-2 border-gray-700 rounded p-0.5"><Star size={18} className="text-gray-700" /></div>, title: 'Quality guarantee', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
              { icon: <div className="relative"><Star size={24} className="text-gray-700" /><div className="absolute inset-0 flex items-center justify-center text-[8px] font-semibold">gu</div></div>, title: 'guaranteed savings', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
              { icon: <Mail size={24} className="text-gray-700" />, title: 'Daily offers', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1">{f.icon}</div>
                <div>
                  <h5 className="text-gray-800 text-xl mb-1">{f.title}</h5>
                  <p className="text-gray-600 leading-tight">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-t pt-20">
            {/* Brand Column */}
            <div className="md:col-span-3">
              <img src="https://siazhub.web.app/images/logo.png" alt="Logo" className="h-10 mb-8 brightness-110" />
              <div className="flex gap-4">
                {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:text-black transition-colors cursor-pointer">
                    <Icon size={14} />
                  </div>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2">
              <h5 className="text-gray-800 mb-8 uppercase text-md tracking-widest">Ultras</h5>
              <ul className="text-gray-600 text-md space-y-3 font-medium">
                <li className="hover:text-black cursor-pointer">About us</li>
                <li className="hover:text-black cursor-pointer">Conditions</li>
                <li className="hover:text-black cursor-pointer">Our Journals</li>
                <li className="hover:text-black cursor-pointer">Careers</li>
                <li className="hover:text-black cursor-pointer">Affiliate Programme</li>
                <li className="hover:text-black cursor-pointer">Ultras Press</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-gray-800 mb-8 uppercase text-md tracking-widest">Customer Service</h5>
              <ul className="text-gray-600 text-md space-y-3 font-medium">
                <li className="hover:text-black cursor-pointer">FAQ</li>
                <li className="hover:text-black cursor-pointer">Contact</li>
                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                <li className="hover:text-black cursor-pointer">Returns & Refunds</li>
                <li className="hover:text-black cursor-pointer">Cookie Guidelines</li>
                <li className="hover:text-black cursor-pointer">Delivery Information</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className=" text-gray-800 mb-8 uppercase text-md tracking-widest">Customer Service</h5>
              <ul className="text-gray-600 text-md space-y-3 font-medium">
                <li className="hover:text-black cursor-pointer">FAQ</li>
                <li className="hover:text-black cursor-pointer">Contact</li>
                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                <li className="hover:text-black cursor-pointer">Returns & Refunds</li>
                <li className="hover:text-black cursor-pointer">Cookie Guidelines</li>
                <li className="hover:text-black cursor-pointer">Delivery Information</li>
              </ul>
            </div>

            {/* Subscription Column */}
            <div className="md:col-span-3">
              <h5 className="font-semibold text-gray-800 mb-8 uppercase text-md tracking-widest">Subscribe Us</h5>
              <p className="text-gray-600 text-md mb-6 leading-relaxed">
                Subscribe to our newsletter to get updates about our grand offers.
              </p>
              <div className="flex bg-[#F3F5F7] rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent text-md p-3 outline-none flex-1 placeholder:text-gray-400"
                />
                <button className="bg-[#232323] text-white px-5 py-2 text-md font-semibold uppercase">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-md text-gray-600 uppercase tracking-widest border-t pt-8 gap-4">
            <p>© 2023 SiazHub. All rights reserved.</p>
            <p>Designed By <span className="underline cursor-pointer text-gray-600">Hypernxt</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiazHubComplete;
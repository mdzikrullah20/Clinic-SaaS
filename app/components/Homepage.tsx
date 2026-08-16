"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  ChevronDown, 
  ChevronUp,
  Trophy, 
  Award, 
  Truck, 
  Pill,
  UploadCircle,
  FileCheck2,
  PackageCheck,
  Star,
  ArrowRight,
  ShieldCheck,
  Heart,
  Sparkles,
  HelpCircle
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("HOME");

  // Hero Background Images List
  const bgImages = [
    "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664476984010-46bb839845f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxtZWRpY2FsfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxtZWRpY2FsfGVufDB8fDB8fHww"
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  const reviews = [
    {
      quote: "The price match guarantee saved me over $120 on my monthly routine medications. Refilling online takes less than a minute!",
      author: "Sarah M.",
      role: "Verified Patient",
      rating: 5,
      // Option A: Image avatar or logo
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      initials: "SM",
      source: "Google Review"
    },
    {
      quote: "Extremely professional service. The pharmacist called me personally to double-check my dosage specifications. Highly recommended!",
      author: "David K.",
      role: "Regular Customer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      initials: "DK",
      source: "Trustpilot"
    },
    {
      quote: "Fast, discreet packaging and quick doorstep delivery. Never had to stand in a long physical pharmacy line again.",
      author: "Elena R.",
      role: "Verified Patient",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      initials: "ER",
      source: "Verified Buyer"
    }
  ];

  const faqs = [
    {
      question: "How does the Price Match Guarantee work?",
      answer: "If you find a lower price on an identical generic medication at another accredited online or retail pharmacy, simply present the price proof to us. We will match that price instantly for your order."
    },
    {
      question: "How do I submit my prescription?",
      answer: "You can easily upload a clear photo or PDF scan of your doctor's valid prescription during the checkout process, or send it directly through our secure portal under 'Refill Prescription'."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery typically takes 2-4 business days. We also offer express overnight shipping for urgent medication refills."
    },
    {
      question: "Are your generic medications safe and FDA-approved?",
      answer: "Yes, all our generic medications are sourced directly from FDA-approved manufacturers and certified pharmaceutical distributors, ensuring maximum efficacy and safety."
    },
    {
      question: "Can I speak directly to a licensed pharmacist?",
      answer: "Absolutely! Our team of licensed pharmacists is available 24/7 via chat or phone to answer any questions about your medication dosage, potential interactions, or side effects."
    }
  ];

  // Auto slide every 10 seconds (10000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">

      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[560px] bg-slate-100 overflow-hidden flex items-center justify-center">
        {/* Background Image Slider with Cross-Fade */}
        <div className="absolute inset-0 z-0">
          {bgImages.map((imgUrl, index) => (
            <img 
              key={index}
              src={imgUrl} 
              alt={`Pharmacy Hero Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content Centered */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full relative z-10 flex justify-center">
          <div className="max-w-2xl text-center py-12 flex flex-col items-center">
            {/* Hero Text: Centered, 2 Lines max, gray-800 */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 text-gray-800 max-w-xl mx-auto md:max-w-[700px]">
              Price Match Guarantee on all generic medications
            </h1>

            <p className="text-sm md:text-base text-gray-600 font-medium mb-8 leading-relaxed max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="flex justify-center">
              <Link 
                href="/refill"
                className="inline-block  bg-[#1b5e5d] hover:bg-[#1b5e7f] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
              >
                REFILL A PRESCRIPTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Promotional Cards Banner Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Promo Card 1 - Dark Teal */}
          <div className="bg-[#1b5e5d] text-white rounded-none p-6 flex items-center justify-between min-h-[160px]">
            <div className="max-w-[65%]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider mb-2 leading-snug">
                SAY GOODBYE TO HAYFEVER
              </h3>
              <p className="text-[11px] text-teal-100/90 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
              <img 
                src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Female Doctor Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Promo Card 2 - Sky Blue */}
          <div className="bg-[#c2ebf8] text-slate-900 rounded-none p-6 flex items-center justify-between min-h-[160px]">
            <div className="max-w-[65%]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider mb-2 leading-snug text-slate-800">
                20% EXTRA DISCOUNT ON THRUSH TREATMENTS
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-white/40">
              <img 
                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400" 
                alt="Pills and Medicine Bowl" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Promo Card 3 - Light Ice Blue */}
          <div className="bg-[#e4f2f7] text-slate-900 rounded-none p-6 flex items-center justify-between min-h-[160px]">
            <div className="max-w-[65%]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider mb-2 leading-snug text-slate-800">
                NO PRESCRIPTION? NO PROBLEM
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-white/40">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400" 
                alt="Female Pharmacist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Trusted Online Partner Intro Section */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mb-4">
            The Trusted Online Medicine Partner
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
            On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 sm:divide-x divide-slate-100">
          
          {/* Item 1 */}
          <div className="p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-12 h-12 text-amber-500 stroke-[1.5]" />
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed px-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-12 h-12 text-yellow-500 stroke-[1.5]" />
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed px-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="w-12 h-12 text-teal-600 stroke-[1.5]" />
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed px-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
          </div>

          {/* Item 4 */}
          <div className="p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Pill className="w-12 h-12 text-teal-700 stroke-[1.5]" />
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed px-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
          </div>

        </div>
      </section>

      {/* Popular Pharmacy Categories Grid */}
      {/* <section className="py-16 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Shop By Need</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Explore Popular Categories
              </h2>
            </div>
            <Link href="/shop" className="text-xs font-bold text-[#186b6a] hover:underline flex items-center gap-1 mt-3 md:mt-0">
              View All Categories <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Prescription Medicines",
                items: "2,400+ Products",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
              },
              {
                title: "Vitamins & Supplements",
                items: "850+ Products",
                img: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=500"
              },
              {
                title: "Medical & Health Devices",
                items: "430+ Products",
                img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=500"
              },
              {
                title: "Personal & Skincare",
                items: "1,120+ Products",
                img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500"
              }
            ].map((cat, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/80 cursor-pointer">
                <div className="h-44 overflow-hidden relative">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 group-hover:text-[#186b6a] transition-colors">{cat.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cat.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services / Equipment Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 border-[40px] border-slate-200/60 rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative min-h-[380px] sm:min-h-[440px]">
            <div className="absolute top-0 left-0 w-[65%] sm:w-[60%] h-[240px] sm:h-[280px] shadow-lg rounded-sm overflow-hidden z-10">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor Consultation" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-4 sm:right-12 w-[65%] sm:w-[60%] h-[220px] sm:h-[260px] shadow-2xl rounded-sm overflow-hidden z-20 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                alt="Dentist Examining Patient" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="pl-0 lg:pl-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              <p className="text-xs font-bold text-slate-500 tracking-wide">
                What kind of service we offer ?
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Advanced Equipment, Devices and Facilities.
            </h2>

            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-8">
              On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
            </p>

            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 bg-[#0b2b6b] hover:bg-[#071d49] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* How Online Prescription Refills Work */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Easy 3-Step Process</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-12">
            How To Refill Your Prescription Online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <div className="w-14 h-14 bg-[#186b6a] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#186b6a]/20">
                <Pill className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">1. Upload Prescription</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Simply upload a photo or scan of your valid doctor's prescription securely via our app or web portal.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">2. Pharmacist Verification</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our certified licensed pharmacists review and verify dosage, interactions, and details for safety.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <div className="w-14 h-14 bg-[#4CAF50] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-600/20">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">3. Express Doorstep Delivery</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your medications are discreetly packaged and delivered straight to your door with real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: Frequently Asked Questions (FAQ) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
              <HelpCircle className="w-4 h-4" /> Got Questions?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-2">
              Find quick answers to common questions about generic prescriptions and delivery.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 text-sm md:text-base hover:text-[#186b6a] transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#186b6a] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Testimonials & Trust Reviews */}
   <section className="py-20 bg-[#1b5e5d] text-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
            {/* {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
            ))} */}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Happy Patients Served
          </h2>
          <p className="text-xs md:text-sm text-teal-100/80 leading-relaxed">
            Read what our regular patients have to say about our fast delivery and affordable generic medicine pricing.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-md p-7 rounded-2xl border border-white/15 flex flex-col justify-between shadow-lg hover:bg-white/[0.14] transition-all duration-300"
            >
              <div>
                {/* Top card row: Rating & Source Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-teal-900/50 text-teal-200 px-2.5 py-1 rounded-full border border-teal-400/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-teal-300" />
                    {review.source}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs md:text-sm text-teal-50 italic leading-relaxed mb-6 relative">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info with Logo/Avatar */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {review.avatar ? (
                  <img 
                    src={review.avatar} 
                    alt={review.author} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-teal-300/40 shadow-sm"
                  />
                ) : (
                  /* Fallback Initials Avatar */
                  <div className="w-10 h-10 rounded-full bg-teal-800 text-white font-bold text-xs flex items-center justify-center border-2 border-teal-300/40">
                    {review.initials}
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-teal-200/90 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    </div>
  );
} 
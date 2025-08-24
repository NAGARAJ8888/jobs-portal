"use client";
import React, { useState } from 'react'

export const Footer = () => {
  
  return (
    <footer className="bg-black text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💼</span>
        <h2 className="text-lg font-semibold">Job</h2>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        Quis enim pellentesque viverra tellus eget malesuada facilisis. 
        Congue nibh vivamus aliquet nunc mauris d...
      </p>
    </div>

   
    <div>
      <h3 className="font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Our Team</a></li>
        <li><a href="#" className="hover:underline">Partners</a></li>
        <li><a href="#" className="hover:underline">For Candidates</a></li>
        <li><a href="#" className="hover:underline">For Employers</a></li>
      </ul>
    </div>

   
    <div>
      <h3 className="font-semibold mb-4">Job Categories</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="#" className="hover:underline">Telecomunications</a></li>
        <li><a href="#" className="hover:underline">Hotels & Tourism</a></li>
        <li><a href="#" className="hover:underline">Construction</a></li>
        <li><a href="#" className="hover:underline">Education</a></li>
        <li><a href="#" className="hover:underline">Financial Services</a></li>
      </ul>
    </div>

  
    <div>
      <h3 className="font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-300 text-sm mb-4">
        Eu nunc pretium vitae platea. Non netus elementum vulputate
      </p>
      <form>
      <input type="email" placeholder="Email Address" 
        className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none" />
      <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-semibold cursor-pointer">
        Subscribe now
      </button>
      </form>
    </div>

  </div>

  
  <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs space-y-4 md:space-y-0">
    <p>© Copyright Job Portal 2024. Designed by Figma.guru</p>
    <div className="flex gap-4">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms & Conditions</a>
    </div>
  </div>
</footer>

  )
}

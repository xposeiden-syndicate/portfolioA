import React from 'react'
import Navbar from '../components/Navbar'
import bgImage from '../../public/logos/samantha-gades-BlIhVfXbi9s-unsplash.jpg'

function Contact() {
  return (
    <>
        <Navbar/>
        <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let’s Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Whether you have a question or just want to say hi — my inbox is always open.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
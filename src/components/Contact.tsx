import React from 'react';

const ContactSection = () => {
  return (
    // The 'font-bricolage' class will apply the custom font.
    // 'relative' is added to the parent to position the image correctly.
    <div className="bg-gray-100 font-bricolage w-full relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* The grid now only has one active column for content on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Contact Form */}
          <div className="z-10">
            <div className="mb-12 max-w-lg">
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4">
                Get in touch
              </h1>
              <p className="text-lg text-gray-700">
                We'd love to hear from you. Please fill out the form below.
              </p>
            </div>
            <form className="space-y-6 max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2 pl-4">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2 pl-4">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2 pl-4">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  placeholder="Write something...."
                  className="w-full px-6 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Right Column: Image blended into the background */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2574&auto=format&fit=crop"
          alt="Contact us"
          className="object-cover w-full h-full"
        />
        {/* Gradient overlay to create the blend effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent"></div>
      </div>
    </div>
  );
};

export default ContactSection;
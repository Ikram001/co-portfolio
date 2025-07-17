import React from "react";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-2">Get in touch</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Let’s build something awesome.
        </p>

        {/* Form Box */}
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-6 shadow-lg">
          {/* Window Controls */}
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name or address"
                className="w-full p-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject line"
                className="w-full p-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your message</label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full p-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md hover:opacity-80 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Icon Row OUTSIDE the form box */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            {
              link: "https://github.com",
              icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            },
            {
              link: "https://twitter.com",
              icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
            },
            {
              link: "https://linkedin.com",
              icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png",
            },
            {
              link: "https://instagram.com",
              icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            },
            {
              link: "mailto:someone@example.com",
              icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={item.icon} alt="icon" className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

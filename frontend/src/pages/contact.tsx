import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="max-w-6xl w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center mx-auto mt-20"
      style={{ backgroundColor: "var(--base-color)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 w-full">
        {/* Right section (contact info) */}
        <div className="space-y-6 text-white flex flex-col justify-start">
          <h2 className="text-lg font-bold text-left">Get In Touch</h2>
          <p className="text-sm text-left">
            I'm excited to connect with you. Whether it's about collaborating on
            a project, discussing design opportunities, or just saying hello,
            feel free to drop me a message. I'm looking forward to hearing from
            you!
          </p>

          <div className="space-y-4 text-left">
            <div>
              <p className="text-sm font-semibold">Address</p>
              <a
                href="https://maps.app.goo.gl/7yAnq69K3S2v73bV6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-var(--warna2-color) transition"
                style={{ textDecoration: "none" }}
              >
                Perum Istana Kepuh Regency Blok H 161, Kepuharjo, Karangploso,
                Kabupaten Malang, Jawa Timur, Indonesia
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold">Call Me</p>
              <a
                href="https://wa.me/6285158779239"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-var(--warna2-color) transition"
                style={{ textDecoration: "none" }}
              >
                +62 851-5877-9239 (WhatsApp)
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold">Mail Me</p>
              <a
                href="mailto:alfitranurr@gmail.com"
                className="text-sm hover:text-var(--warna2-color) transition"
                style={{ textDecoration: "none" }}
              >
                alfitranurr@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Left section (contact form) */}
        <div className="space-y-4">
          <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-md">
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-md text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-var(--warna2-color)"
                  style={{ borderColor: "var(--warna1-color)" }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-md text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-var(--warna2-color)"
                  style={{ borderColor: "var(--warna1-color)" }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-md text-white">
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-var(--warna2-color)"
                  rows={4}
                  style={{ borderColor: "var(--warna1-color)" }}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-var(--warna2-color) text-white p-3 rounded-md w-full transition duration-200 text-md"
                  style={{
                    backgroundColor: "var(--warna2-color)",
                    borderColor: "var(--warna2-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "var(--warna1-color)";
                    e.currentTarget.style.cursor = "pointer";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--warna2-color)";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

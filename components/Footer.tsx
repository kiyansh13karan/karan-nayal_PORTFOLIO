import { FaLocationArrow, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaSnapchat, FaTelegram } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/917830242564",
      color: "text-green-500 hover:text-green-400"
    },
    {
      id: 2,
      name: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/krn_nayal",
      color: "text-blue-500 hover:text-blue-400"
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/krn_nayal13",
      color: "text-pink-500 hover:text-pink-400"
    },
    {
      id: 4,
      name: "Snapchat",
      icon: <FaSnapchat />,
      link: "https://www.snapchat.com/add/gemini_01",
      color: "text-yellow-400 hover:text-yellow-300"
    },
    {
      id: 5,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/karan-nayal-054981286/",
      color: "text-blue-600 hover:text-blue-500"
    },
    {
      id: 6,
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/kiyansh13karan",
      color: "text-white hover:text-gray-300"
    },
    {
      id: 7,
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:karannayalkannu1982@gmail.com",
      color: "text-red-500 hover:text-red-400"
    },
    {
      id: 8,
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/somnathtigers13",
      color: "text-sky-500 hover:text-sky-400"
    }
  ];

  return (
    <footer className="w-full pt-32 pb-16 min-h-[500px] relative overflow-hidden" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        {/* Main CTA Section */}
        <h1 className="heading lg:max-w-[45vw] mb-6">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-4 my-5 text-center max-w-md">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:karannayalkannu1982@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* Connect Section */}
        <div className="mt-20 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-purple">Connect</span>
          </h2>
          <p className="text-white-200 text-lg mb-12">
            Feel free to connect with me on any platform below
          </p>

          {/* Social Links Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto px-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 md:w-16 md:h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-2xl border border-black-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple/20 ${social.color}`}
              >
                <div className="text-xl md:text-2xl transition-all duration-300">
                  {social.icon}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black-100 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="flex mt-8 md:flex-row flex-col justify-center items-center border-t border-black-300 pt-8">
        <p className="text-white-200 text-center text-sm md:text-base">
          © 2025 Karan Nayal | Built with ❤️ using React & Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;

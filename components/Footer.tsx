import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-gray-300">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <h2 className="text-lg font-bold uppercase">Contact</h2>
          <div className="flex items-center justify-center lg:justify-start my-2">
            <hr className="w-8 border-black border-t-2 mr-2" />
          </div>
          <a
            href="mailto:contact@danilatishkevich.com"
            className="text-gray-600"
            aria-label="email"
          >
            contact@danilatishkevich.com
          </a>
        </div>
        <div className="mb-4 lg:mb-0 flex space-x-4">
          <a
            href="https://youtube.com/@danilatishkevich?si=-9_BUd4MD9sUcdKC"
            className="text-gray-600 hover:text-black"
            aria-label="Youtube"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100086759268723&mibextid=LQQJ4d"
            className="text-gray-600 hover:text-black"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/tishkevich_productions"
            className="text-gray-600 hover:text-black"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center lg:text-right">
          <p className="text-gray-600">
            Copyright {date.getFullYear()} © Tishkevich Danila
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

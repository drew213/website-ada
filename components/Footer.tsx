import {
  AiOutlineFacebook,
  AiOutlineX,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const gradientStyle = {
    background:
      "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
  };

  return (
    <footer
      style={gradientStyle}
      className="bg-white dark:bg-black shadow-sm py-6 border-gray-100 dark:border-gray-800 border-t dark:border-t text-gray-400"
    >
      <div className="flex flex-wrap justify-center sm:justify-between items-center mx-auto px-4 text-sm container">
        <p className="ml-4">
          &copy; {currentYear} ADA INVENTIVE. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0 mr-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61577640491988"
            aria-label="Facebook"
            className="hover:text-gray-300"
          >
            <AiOutlineFacebook className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="X (formerly Twitter)"
            className="hover:text-gray-300"
          >
            <AiOutlineX className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <AiOutlineGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

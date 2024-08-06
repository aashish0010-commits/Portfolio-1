import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const texts = ['Front-End Developer', 'Freelancer', 'Traveller'];
const typingSpeed = 100;
const delayBetweenTexts = 1500;

function TypewriterEffect() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let typingInterval;

    if (isDeleting) {
      typingInterval = setInterval(() => {
        setText((prev) => prev.slice(0, -1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, typingSpeed);
    } else {
      typingInterval = setInterval(() => {
        setText((prev) => currentText.slice(0, prev.length + 1));
        if (text === currentText) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    }

    return () => clearInterval(typingInterval);
  }, [text, isDeleting, currentIndex]);

  return <span>{text}</span>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-right"
        style={{ backgroundImage: "url('./images/background2.png')" }}
      >
        {/* Overlay for darkening the background */}
        <div
          className="absolute inset-0 bg-black opacity-75 z-10 h-full"
          style={{ height: '100%' }}
        ></div>

        {/* Centering the text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20 px-4 md:px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold py-5 tracking-wider">Aashish Nepal</h1>
          <h4 className="text-lg sm:text-xl">
            <span className='text-customGreen'>I'm a </span>
            <TypewriterEffect />
          </h4>
        </div>

        {/* Header section */}
        <div className="relative z-30 mx-auto p-4 md:p-6 flex justify-between items-center w-full">
          <div className="flex justify-center w-full md:w-auto">
            <Link>
              <img
                className="w-[150px] md:w-[200px]"
                src="./images/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex justify-end items-center w-full md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <i className="bi bi-list text-3xl"></i>
            </button>
          </div>
          <nav
            className={`${
              menuOpen ? 'block border border-gray-700 bg-black' : 'hidden'
            } absolute top-20 left-30 right-0 md:static md:flex md:items-center w-[150px] text-center md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row gap-5  md:gap-5 text-white text-l z-30 p-4 md:p-0">
              <li><Link to="/about" className="hover:text-customGreen">About</Link></li>
              <li><Link to="/resume" className="hover:text-customGreen">Resume</Link></li>
              <li><Link to="/portfolio" className="hover:text-customGreen">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-customGreen">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-customGreen">Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="fixed bottom-[50px] right-4 md:right-[95%] flex flex-col space-y-3 text-white z-20 text-lg sm:text-xl">
          <a className="text-white" href="#" aria-label="Twitter">
            <i className="bi bi-twitter hover:text-customTwitter"></i>
          </a>
          <a className="text-white" href="#" aria-label="Facebook">
            <i className="bi bi-facebook hover:text-customFacebook"></i>
          </a>
          <a className="text-white" href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin hover:text-customLink"></i>
          </a>
          <a className="text-white" href="#" aria-label="GitHub">
            <i className="bi bi-github hover:text-purple-900"></i>
          </a>
          <a className="text-white" href="#" aria-label="Instagram">
            <i className="bi bi-instagram hover:text-purple-500"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;

import React from 'react';

const Footer = () => {
  return (
    <section className='mr-10 ml-10'>
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center space-y-4">
        {/* Logo or Name */}
        <h1 className="text-2xl font-semibold text-teal-400">{`Mehwish's Portfolio`}</h1>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="www.linkedin.com/in/mehwish-fatima-816198217" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM5 24H0V7.99h5V24zm7.5-11.01c-1.85 0-2.5.99-2.5.99V8H5v16h5v-8.5s.99-1 2.5-1 2.5 1 2.5 1V8h-5v4.99h.01zM24 24h-5v-7c0-1.89-.68-3.01-2.35-3.01-1.32 0-2.11.88-2.46 1.72-.13.31-.17.74-.17 1.17V24h-5s.07-13 0-14.01h5v2.11C15.75 9.5 17.01 8 19.5 8c2.44 0 4.5 1.57 4.5 4.95V24z"/>
            </svg>
          </a>
          <a href="https://github.com/Mehwish0010" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.1 11.4.6.1.9-.2.9-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.5 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.4.1-3 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.3 2.7.1 3 .8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3c0 .4.3.7.9.6 4.7-1.6 8.1-6.1 8.1-11.4C24 5.9 18.6.5 12 .5z"/>
            </svg>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.6 1.8-1.55 2.16-2.68-.95.56-2 .96-3.13 1.18-.9-.96-2.17-1.56-3.6-1.56-2.72 0-4.92 2.21-4.92 4.92 0 .39.04.76.13 1.12C7.69 8.09 4.07 6.13 1.64 3.16c-.43.73-.67 1.58-.67 2.49 0 1.71.87 3.22 2.2 4.1-.8-.02-1.54-.24-2.2-.6v.06c0 2.39 1.7 4.37 3.94 4.82-.42.12-.86.18-1.31.18-.32 0-.63-.03-.93-.09.64 2 2.5 3.47 4.7 3.52-1.72 1.34-3.88 2.14-6.23 2.14-.4 0-.79-.02-1.17-.07 2.23 1.44 4.89 2.28 7.74 2.28 9.29 0 14.37-7.7 14.37-14.37 0-.22 0-.43-.02-.65.98-.71 1.83-1.6 2.5-2.61z"/>
            </svg>
          </a>
        </div>
        
        {/* Contact Info */}
        <p className="text-gray-400">Contact me at <a href="www.mehwishsheikh0010sheikh@gmail.com" className="text-teal-400">mehwishsheikh0010sheikh@gmail.com</a></p>
        
        {/* Footer Bottom */}
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mehwish. All rights reserved.</p>
      </div>
      
    </footer>
    </section>
  );
};

export default Footer;

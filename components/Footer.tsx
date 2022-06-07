/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
function Footer() {
  return (
    <footer className="py-12 text-center text-white bg-gray-800">
      <div className="container">
        <h5>Our social networks.</h5>
        <div className="flex items-center justify-center gap-5 mb-5">
          <a className="text-2xl" href="https://facebook.com/themeatelier">
            <FaFacebookSquare />
          </a>
          <a className="text-2xl" href="https://twitter.com/themeatelier">
            <FaTwitterSquare />
          </a>
          <a
            className="text-2xl"
            target="_blank"
            href="https://www.youtube.com/channel/UCwfX_Z6_DeNtVt1Bs3qLJwQ"
          >
            <FaYoutubeSquare />
          </a>
        </div>
        <p>
          &copy; All right reserved{' '}
          <a href="http://www.themeatelier.net">Themeatelier</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

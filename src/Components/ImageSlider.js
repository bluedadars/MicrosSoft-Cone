import React, { useState } from 'react';
const images = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fzSnClvueUiDCZNJINMWywHaEK%26pid%3DApi%26h%3D160&f=1&ipt=082d263e727a4a9a8a72fad119d8ea03b62d1d0709360c976fdcf8bb256544c8&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wwxK07x0Umfnh0l-nrjxjgHaDg%26pid%3DApi%26h%3D160&f=1&ipt=d7789a24a7b97377f03e21d096ecdf1045874454b2281afbf908d966b22c5319&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aqSVE7TUcbsLCQdF_FPfRgHaEK%26pid%3DApi%26h%3D160&f=1&ipt=5487622265cd6823d227936453680471db7abd57a7d6142a15f5720a76a881b2&ipo=images',
  ];
const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt="Slider Image"
        className="w-4/5 h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={previousImage}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

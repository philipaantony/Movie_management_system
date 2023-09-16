import React, { useState, useEffect } from 'react';
import '../../public/wallpapercss/wallpaperchange.css';


const WallpaperChanger = () => {
  const wallpapers = [
    'assets/background/b1.jpg',
    'assets/background/b2.jpg',
    'assets/background/b3.jpg',
    'assets/background/b4.jpg',
    'assets/background/b5.jpg',
  ];

  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  
  useEffect(() => {

    const wallpaperInterval = setInterval(() => {
      setCurrentWallpaperIndex((prevIndex) =>
        (prevIndex + 1) % wallpapers.length
      );
    }, 4000);

  
    return () => clearInterval(wallpaperInterval);
  }, []);

  return (
    <div
      className="wallpaper"
      style={{
        backgroundImage: `url(${wallpapers[currentWallpaperIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "120vh",
        position: "relative",
      }}
    >
      
    </div>
  );
};

export default WallpaperChanger;

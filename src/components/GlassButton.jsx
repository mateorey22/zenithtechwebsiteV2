import React from 'react';
import GlassSurface from './GlassSurface';

const GlassButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`relative ${className}`} {...props}>
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={12}
        className="flex items-center justify-center font-bold"
        displace={5}
        distortionScale={-100}
        redOffset={2}
        greenOffset={5}
        blueOffset={10}
        brightness={50}
        opacity={0.8}
        mixBlendMode="screen"
      >
        {children}
      </GlassSurface>
    </button>
  );
};

export default GlassButton;

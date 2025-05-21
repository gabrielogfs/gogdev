import React from "react";

const FlipIcons = ({ src, name }) => {
  return (
    <div className="group [perspective:1000px] w-[60px] h-[60px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
          <img src={src} alt={`${name} logo`} className="w-[40px] h-[40px]" />
        </div>
        <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] flex items-center justify-center rounded text-black font-roboto text-center dark:bg-[rgb(24,24,27)] dark:text-zinc-300 text-sm font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
};

export default FlipIcons;

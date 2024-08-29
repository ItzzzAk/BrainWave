import { background } from "../../assets"; // Import the background image from assets

// Component to render concentric rings with borders
export const Rings = () => {
  return (
    <div 
      className="
        absolute top-1/2 left-1/2 // Center the largest ring
        w-[51.375rem] aspect-square // Set size and maintain a square aspect ratio
        border border-n-2/10 rounded-full // Apply a light border and make it circular
        -translate-x-1/2 -translate-y-1/2 // Center the ring using translation
      ">
      {/* Smaller concentric ring */}
      <div 
        className="
          absolute top-1/2 left-1/2 
          w-[36.125rem] aspect-square 
          border border-n-2/10 rounded-full 
          -translate-x-1/2 -translate-y-1/2
        "></div>
      {/* Smallest concentric ring */}
      <div 
        className="
          absolute top-1/2 left-1/2 
          w-[23.125rem] aspect-square 
          border border-n-2/10 rounded-full 
          -translate-x-1/2 -translate-y-1/2
        "></div>
    </div>
  );
};

// Component to render vertical side lines on the left and right
export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div> {/* Left vertical line */}
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div> {/* Right vertical line */}
    </>
  );
};

// Component to render decorative background circles with gradients
export const BackgroundCircles = () => {
  return (
    <>
      <div 
        className="
          absolute top-[4.4rem] left-16 
          w-3 h-3 bg-gradient-to-b 
          from-[#DD734F] to-[#1A1A32] rounded-full
        "></div>
      <div 
        className="
          absolute top-[12.6rem] right-16 
          w-3 h-3 bg-gradient-to-b 
          from-[#B9AEDF] to-[#1A1A32] rounded-full
        "></div>
      <div 
        className="
          absolute top-[26.8rem] left-12 
          w-6 h-6 bg-gradient-to-b 
          from-[#88E5BE] to-[#1A1A32] rounded-full
        "></div>
    </>
  );
};

// Component to render a background with rings, side lines, and decorative circles
export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      {/* Semi-transparent background image */}
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings /> {/* Render concentric rings */}
      <SideLines /> {/* Render side vertical lines */}
      <BackgroundCircles /> {/* Render decorative background circles */}
    </div>
  );
};

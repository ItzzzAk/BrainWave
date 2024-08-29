import { curve1, curve2 } from "../../assets"; // Import curve images from assets

// Component that renders a right-side decorative curve
export const RightCurve = () => {
  return (
    <div 
      className="
        hidden xl:block // Hidden on smaller screens, visible on extra-large screens and up
        absolute top-1/2 left-full // Position absolutely, centered vertically, aligned to the right edge
        w-[10.125rem] -mt-1 ml-10 // Set width, adjust vertical and horizontal positions
        pointer-events-none // Disable pointer interactions
      ">
      <img src={curve2} width={162} height={76} alt="Curve 2" /> {/* Display the right curve image */}
    </div>
  );
};

// Component that renders a left-side decorative curve
export const LeftCurve = () => {
  return (
    <div 
      className="
        hidden xl:block // Hidden on smaller screens, visible on extra-large screens and up
        absolute top-1/2 right-full // Position absolutely, centered vertically, aligned to the left edge
        w-[32.625rem] -mt-1 mr-10 // Set width, adjust vertical and horizontal positions
        pointer-events-none // Disable pointer interactions
      ">
      <img src={curve1} width={522} height={182} alt="Curve 1" /> {/* Display the left curve image */}
    </div>
  );
};

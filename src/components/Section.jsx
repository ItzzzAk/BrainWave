import SectionSvg from "../assets/svg/SectionSvg";

// The Section component wraps content and optionally adds decorative elements such as lines and cross patterns
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        // Apply custom paddings if provided, otherwise use default padding values
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`} // Apply additional classes if provided
    >
      {/* Render children components */}
      {children}

      {/* Vertical lines on the left and right sides of the section */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Conditional rendering of cross patterns and SVG element */}
      {crosses && (
        <>
          {/* Horizontal cross pattern if `crosses` prop is true */}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          {/* Render SVG component for additional decorative elements */}
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;

import brackets from "../assets/svg/Brackets";

// The TagLine component renders a stylized tag line with brackets on either side.
// It uses an SVG graphic to display brackets and positions the text in the middle.

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {/* Render left bracket SVG */}
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {/* Render right bracket SVG */}
      {brackets("right")}
    </div>
  );
};

export default TagLine;

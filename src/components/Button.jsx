import ButtonSvg from "../assets/svg/ButtonSvg";

// Button component for rendering either a button or a link
const Button = ({ className, href, onClick, children, px, white }) => {
  // Combine base button classes with optional props for styling
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  // Render a button element
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Render an anchor element if href is provided
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Choose to render either a button or link based on href prop
  return href ? renderLink() : renderButton();
};

export default Button;

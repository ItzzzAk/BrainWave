import TagLine from "./Tagline";

// Heading component for displaying a section title, optional tagline, and description
const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Optional TagLine component */}
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {/* Optional title */}
      {title && <h2 className="h2">{title}</h2>}
      {/* Optional text */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;

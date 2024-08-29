import { lines } from "../../assets";

// Renders a line image positioned to the left of the viewport, visible only on large screens.
export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

// Renders a mirrored line image positioned to the right of the viewport, visible only on large screens.
export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

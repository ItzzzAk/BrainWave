import { companyLogos } from "../constants";

// Component to display a list of company logos
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* Tagline above the logos */}
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      
      {/* List of company logos */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={`Company logo ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;

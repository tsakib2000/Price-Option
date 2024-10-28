import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="text-white font-bold bg-lime-300 p-4 rounded-xl flex flex-col">
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-3xl">/month</span>
      </h2>
      <h4 className="text-4xl">{name}</h4>
      {
        features.map((feature,idx)=> <li className="flex-grow" key={idx}>{feature}</li>)
      }

      <button className="btn w-full"> Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "plan_001",
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Group fitness classes",
        "Locker room access",
        "Free fitness assessment",
      ],
    },
    {
      id: "plan_002",
      name: "Standard Plan",
      price: 49.99,
      features: [
        "All Basic Plan features",
        "Access to swimming pool",
        "Unlimited group classes",
        "Monthly personal training session",
      ],
    },
    {
      id: "plan_003",
      name: "Premium Plan",
      price: 69.99,
      features: [
        "All Standard Plan features",
        "Access to spa facilities",
        "Priority booking for classes",
        "Weekly personal training sessions",
        "Nutritional guidance",
      ],
    },

  ];

  return (
    <div>
      <h2 className="text-5xl">Best Price in the town</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4  p-4 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

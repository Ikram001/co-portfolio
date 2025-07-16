import React from "react";

const TechCard = ({ name, icon, category }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-zinc-900 shadow-sm transition-colors duration-300">
      <img src={icon} alt={`${name} icon`} className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
      </div>
    </div>
  );
};

export default TechCard;

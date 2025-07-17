import React from "react";

const TechCard = ({ name, icon, category }) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-gray-100 dark:bg-zinc-900 shadow-sm transition-colors duration-300">
      <img src={icon} alt={`${name} icon`} className="w-16 h-16 mb-1" />
      <div className="flex flex-row items-center gap-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{name}</h3>
        <span className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-3 py-1">
          {category}
        </span>
      </div>
    </div>
  );
};

export default TechCard;

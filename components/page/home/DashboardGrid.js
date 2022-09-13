import React from "react";
import DashboardCard from "../Cards/DashboardCard";

export default function DashboardGrid({ data }) {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8 md:gap-y-8 mt-8 mx-auto max-w-[40.25rem] xl:max-w-none bg-center bg-no-repeat bg-dot-square lg:-mt-12 lg:-mb-[4.688rem]">
      {data.map((item) => (
        <DashboardCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          text={item.description}
          radius={item.radius}
        />
      ))}
    </div>
  );
}

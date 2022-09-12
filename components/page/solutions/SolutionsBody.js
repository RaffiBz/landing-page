import React from "react";
import Affiliate from "./Affiliate";
import Ambassador from "./Ambassador";
import Influencer from "./Influencer";
import Partner from "./Partner";

export default function SolutionsBody() {
  return (
    <div className="pt-[7.875rem] pb-16 px-4 md:px-[3.75rem]">
      {/* single program */}
      <Ambassador />
      <Affiliate />
      <Influencer />
      <Partner />
    </div>
  );
}

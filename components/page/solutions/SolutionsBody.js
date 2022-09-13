import React from "react";
import Affiliate from "./Affiliate";
import Ambassador from "./Ambassador";
import Influencer from "./Influencer";
import Partner from "./Partner";

export default function SolutionsBody() {
  return (
    <div className="pt-[3.875rem] md:pt-[7.875rem] md:px-[3.75rem]">
      {/* single program */}
      <Ambassador />
      <Affiliate />
      <Influencer />
      <Partner />
    </div>
  );
}

import React from "react";

import ebay from "@/assets/svg/ebay.svg";
import instagram from "@/assets/svg/instagram.svg";
import facebook from "@/assets/svg/facebook.svg";

const Footer: React.FC = () => {
  return (
    <div className="h-32 bg-gray-200 flex flex-col items-center py-4">
      <h1 className="text-xl">Connect with us</h1>
      <div className="flex flex-row gap-3 py-2">
        <img src={facebook} alt="facebook" />
        <img src={ebay} alt="ebay" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;

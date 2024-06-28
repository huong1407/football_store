import React, { useState, useEffect, useCallback } from "react";
import "./Layout.css";

const Banner = () => {
    const banners = [
        "If it doesn't fit, you can exchange it for another size",
        "Delivery within 5-7 working days",
        "Member benefit",
        "Shipping your order to Vietnam",
      ];
      
      const [banner, setBanner] = useState(0);

      const nextBanner = useCallback(() => {
        setBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, [banners.length]);

    useEffect(() => {
      const timer2 = setTimeout(nextBanner, 3000);
      return () => {
        clearTimeout(timer2);
      };
    }, [nextBanner]);

    return (
        <div className="header">
            <p className="text-white-600">{banners[banner]}</p>
        </div>
    )
}

export default Banner;
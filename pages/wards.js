import React from "react";
import Image from "next/image";

import Style from "../styles/wards.module.css";
import apc from "../public/apc.png";
import Link from "next/link";
import Data from "../Components/ElectionData";

const wards = () => {
  const kosofeData = Data.kosofe;

  return (
    <div className={Style.wards}>
      <div className={Style.wards_box}>
        <div className={Style.wards_box_head}>
          <Image
            className={Style.wards_box_head_img}
            src={apc}
            alt="apc-logo"
            width={50}
            height={50}
          />
          <h2>KOSOFE FEDERAL CONSTITUENCY</h2>
        </div>
        <div className={Style.wards_box_wards}>
          {kosofeData.map((ward, i) => (
            <Link
              href={{ pathname: `pollingUnits${i + 1}` }}
              key={i + 1}
              pollingUnits={ward.pollingUnits[i + 1]}
            >
              <p className={Style.wards_box_ward}>
                {ward.wardNo}
                {"."}
                {ward.wardName}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default wards;

"use client";
import Link from "next/link";

const ItemMenu = ({ children, ruta, border }) => {
  return (
    <Link href={`${ruta || "hay señor"}`}>
      <div
        className={`${
          border && "border-[#ecc125]  border-b-2  ]"
        } mx-3 my-6 md:mx-1 lg:mx-3 hover:border-[#ecc125] hover:border-b-2 `}
      >
        <div className="uppercase md:text-base lg:text-lg font-medium">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default ItemMenu;

import React from "react";
import { TEMPLATE } from "./TemplateList";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item?.slug}`}>
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src={item.icon}
          alt="icon"
          width={50}
          height={50}
          className="rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {item.name}
        </h2>
        <p className="text-gray-600 text-center">{item.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;

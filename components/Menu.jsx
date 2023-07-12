import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
const Menu = ({ showCatMenu, setShowCatMenu, cats }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];


  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => {
                item.subMenu && setShowCatMenu(true);
              }}
              onMouseLeave={() => {
                item.subMenu && setShowCatMenu(false);
              }}
            >
              {item.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="absolute top-6 left-0 min-w-[250px] px-1 py-1 bg-white shadow-lg">
                  {cats.map((item, index) => (
                    <Link key={item.id} href={`/category/${item?.attributes?.slug}`}>
                      <li className="h-12 flex items-center justify-between px-3 py-2 hover:bg-black/[0.03] rounded-md cursor-pointer ">
                        {item?.attributes?.name}

                        <span className="text-sm opacity-50">
                          ({item.attributes.products?.data?.length})
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer hover:text-red-500 transition-colors duration-300">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;

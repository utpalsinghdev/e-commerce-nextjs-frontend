import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, cats }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];


  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li
              className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
              onClick={() => {
                item.subMenu && setShowCatMenu((prev) => !prev);
              }}
            >
              <div
                className="flex items-center justify-between"
              >
                {item.name}
                <BsChevronDown size={14} />
              </div>

              {showCatMenu && (
                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {cats.map((item, index) => (
                    <Link
                      onClick={() => {
                        setMobileMenu(false);
                        setShowCatMenu(false);
                      }}
                      key={item.id}
                      href={`/category/${item?.attributes?.slug}`}
                    >
                      <li className="py-4 px-8 border-t flex justify-between">
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
            <li className="py-4 px-5 border-b">
              <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MenuMobile;

"use client";
// Note : همه صفحات به صورت پیش فرض (سرور کامپوننت) هستن در نکس
// Note : اگر بخواهیم از هوک ها مثل یوز استیت و باقی هوک ها استفاده کنیم باید بگیم این (کلاینت کامپوننت) است
//! Note : زمانی ک شما یک کامپوننت رو کلاینت در نظر میگیرید دیگه بحث سئو براش اتفاق نمیوفته !!!

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const nav = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "store", link: "/store" },
    { id: 3, title: "products", link: "/store/products" },
  ];

  return (
    <div className="p-4 border-b">
      <nav>
        <ul className="flex gap-4">
          {nav.map((nav) => (
            <li
              className={nav.link === pathName ? "text-green-400" : ""}
              key={nav.id}
            >
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

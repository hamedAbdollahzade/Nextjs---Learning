"use client";
// Note : همه صفحات به صورت پیش فرض (سرور کامپوننت) هستن در نکس
// Note : اگر بخواهیم از هوک ها مثل یوز استیت و باقی هوک ها استفاده کنیم باید بگیم این (کلاینت کامپوننت) است
//! Note : زمانی ک شما یک کامپوننت رو کلاینت در نظر میگیرید دیگه بحث سئو براش اتفاق نمیوفته !!!

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const nav = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "store", link: "/store" },
    { id: 3, title: "products", link: "/store/products" },
  ];
  const router = useRouter();
  const handleClick = () => {
    router.back();
    
  };

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

        <button onClick={handleClick}>USE-ROUTER NEXT JS </button>
      </nav>
    </div>
  );
};

export default Navbar;

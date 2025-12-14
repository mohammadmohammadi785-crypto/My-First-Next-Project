"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const navLinks: { id: number; name: string; href: string }[] = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "feature",
      href: "/feature",
    },
    {
      id: 3,
      name: "About",
      href: "/about",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
    {
      id: 5,
      name: "Counter",
      href: "/count",
    },
    {
      id: 6,
      name: "Posts",
      href: "/posts",
    },
    {
      id: 7,
      name: "Articles",
      href: "/articles/1",
    },
    {
      id: 8,
      name: "Login",
      href: "/login",
    },
    {
      id: 9,
      name: "Forgotpassword",
      href: "/forgotPassword",
    },
    {
      id: 10,
      name: "Register",
      href: "/regester",
    },
    {
      id: 11,
      name: "Feature",
      href: "/feature",
    },
    {
      id: 12,
      name: "Dashboard",
      href: "/dashboard",
    },
  ];
  return (
    <div>
      <nav className="flex justify-between p-4">
        {navLinks.map((nav) => {
          const isActive =
            pathname === nav.href ||
            (pathname.startsWith(nav.href) && nav.href !== "/");
          return (
            <Link
              className={
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-500 font-bold"
              }
              key={nav.id}
              href={nav.href}
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { MdMenu, MdClose, MdArrowDropDown } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { useRouter } from "next/router";

const MENU_ITEMS = [
  {
    title: "ABOUT",
    href: "/abstract",
  },
  {
    title: "RESEARCH",
    children: [
      {
        title: "Consensus",
        href: "/consensus",
      },
      {
        title: "Whitepaper",
        href: "/whitepaper",
      },
    ]
  },
  {
    title: "AGENTS",
    href: "/agent",
  },
]

const MENU_ITEMS_MOBILE = [
  {
    title: "ABOUT",
    href: "/abstract",
  },
  {
    title: "CONSENSUS",
    href: "/consensus",
  },
  {
    title: "WHITEPAPER",
    href: "/whitepaper",
  },
  {
    title: "AGENTS",
    href: "/agent",
  },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (_url) => {
      setTimeout(() => setIsMobileMenuOpen(false), 250)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  const renderMenuItem = (item, key, isSubmenu = false) => {
    if (item.children) {
      return (
        <div className="group relative" key={key}>
          <button className="opacity-75 md:opacity-100 md:hover:underline relative text-lg w-full block py-2 md:py-0 md:text-base font-mono">
            {item.title} <MdArrowDropDown className="absolute" fontSize={20} style={{ top: 0, right: -25 }} />
          </button>
          <div className="md:hidden group-hover:block md:absolute bg-black text-white pt-2">
            {item.children.map((child, index) => renderMenuItem(child, `${key}-${index}`, true))}
          </div>
        </div>
      )
    }

    if (isSubmenu) {
      return (
        <Link
          href={item.href}
          className="block hover:bg-primary px-2 py-1 font-mono"
          key={key}
        >
          {item.title}
        </Link>
      )
    }

    return (
      <Link
        href={item.href}
        className="hover:underline text-lg w-full block py-2 md:py-0 md:text-base font-mono"
        key={key}
      >
        {item.title}
      </Link>
    )
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <Container className="py-5 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          style={{ width: 150 }}
        >
          <Image
            src="/assets/logo-pictogram.svg"
            alt="Uomi logo"
            className="h-10 w-auto hidden md:block"
            width={36}
            height={36}
          />

          <Image
            src="/assets/logo.svg"
            alt="Uomi logo"
            className="h-10 w-20 block md:hidden object-cover"
            width={36}
            height={36}
          />
        </Link>

        <div className="hidden md:flex space-x-14">
          {MENU_ITEMS.map((item, index) => renderMenuItem(item, index))}
        </div>

        <div className="flex justify-end items-center" style={{ width: 150 }}>
          <Image
            src="/assets/logo.svg"
            alt="Uomi logo full"
            className="h-20 w-auto hidden md:flex"
            width={100}
            height={36}
          />
        </div>

        <div className="md:hidden z-40">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <MdClose fontSize={30} />
            ) : (
              <MdMenu fontSize={30} />
            )}
          </button>
        </div>
      </Container>

      <div className={`absolute top-0 left-0 w-full h-screen bg-black text-white z-30 flex flex-col justify-center items-center transition-all duration-300  ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            className="w-48 h-24"
            width={100}
            height={36}
          />
        </Link>

        <div className="text-center w-full">
          {MENU_ITEMS_MOBILE.map((item, index) => (
            <div className="my-4" key={index}>
              {renderMenuItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

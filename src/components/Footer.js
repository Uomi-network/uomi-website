import React from "react";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import Container from "./Container";

const SOCIAL_LINKS = [
  {
    title: "Twitter",
    href: "https://x.com/UomiNetwork",
    icon: <FaXTwitter fontSize={25} />,
  },
  {
    title: "Discord",
    href: "https://discord.gg/KXh72E2gPe",
    icon: <FaDiscord fontSize={25} />,
  },
  {
    title: "GitHub",
    href: "https://github.com/Uomi-network",
    icon: <FaGithub fontSize={25} />,
  },
  {
    title: "Telegram",
    href: "https://t.me/UomiAI",
    icon: <FaTelegram fontSize={25} />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full z-40">
      <Container className="py-4 w-full">
        <div className="flex justify-center md:justify-start items-center">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-primary"
              key={index}
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};


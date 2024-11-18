import { useState } from "react";
import { Mobile } from "./Mobile";
import { motion } from "motion/react";

export function Header() {
  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header>
      <nav>
        <div className="hidden md:flex">
          <ul className="w-full flex justify-center space-x-32 py-10 bg-black/50 text-xl font-medium tracking-wide">
            {menuItems.map((li) => {
              const [hovered, setHovered] = useState(false);
              return (
                <motion.li
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  key={li.label}
                  className="relative"
                >
                  <a href={li.href}>{li.label}</a>
                  <div
                    className={`absolute bg-zinc-50 rounded-md transition-all duration-300 ease-in-out ${
                      hovered ? "w-full h-[2px]" : "w-0"
                    }`}
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
        <Mobile />
      </nav>
    </header>
  );
}

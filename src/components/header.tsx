"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Skills", path: "/#skills" },
  { name: "Experience", path: "/#experience" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];

export function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/40 dark:border-neutral-800/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-xl"
            >
              Mohammed Zubair
            </motion.span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.path ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="hidden md:block">
              {/* Search component can go here */}
            </div>
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
            {/* {session ? (
              <Link href="/admin/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 text-sm font-medium text-foreground/60 hover:text-foreground"
                >
                  Dashboard
                </motion.div>
              </Link>
            ) : (
              <Link href="/admin/login">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 text-sm font-medium text-foreground/60 hover:text-foreground"
                >
                  Login
                </motion.div>
              </Link>
            )} */}
          </nav>
        </div>
      </div>
    </header>
  );
} 
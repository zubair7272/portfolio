"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/40 dark:border-neutral-800/40 bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-semibold">Mohammed Zubair</h3>
            <p className="text-sm text-muted-foreground">
              Software Development Engineer specialized in web development, data analytics, and machine learning.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/#skills" className="text-muted-foreground hover:text-foreground">
                Skills
              </Link>
              <Link href="/#experience" className="text-muted-foreground hover:text-foreground">
                Experience
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="/#education" className="text-muted-foreground hover:text-foreground">
                Education
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:zubairmohammed7272@gmail.com"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <Mail className="mr-2 h-4 w-4" />
                zubairmohammed7272@gmail.com
              </a>
              <a
                href="tel:+919035149422"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <Phone className="mr-2 h-4 w-4" />
                +91 9035149422
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/zubair7272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zubair7272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Mohammed Zubair. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 
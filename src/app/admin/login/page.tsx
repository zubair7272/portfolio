"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex flex-1 items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-md space-y-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card p-8 shadow-lg"
        >
          <div className="space-y-2 text-center">
            <Link href="/" className="mb-8 inline-block hover:text-primary">
              <ArrowLeft className="mr-2 inline-block h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access the admin dashboard
            </p>
          </div>
          
          <div className="mt-8">
            <SignIn path="/admin/login" routing="path" signUpUrl="/admin/login" />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
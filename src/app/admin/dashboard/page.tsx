"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  User, 
  Settings, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Mail, 
  LogOut,
  Save,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/admin/login");
  //   }
  // }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: <User className="h-5 w-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "skills", label: "Skills", icon: <Settings className="h-5 w-5" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="h-5 w-5" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-r border-neutral-200 dark:border-neutral-800 bg-card md:w-64"
      >
        <div className="flex h-16 items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-6">
          <span className="text-lg font-semibold">Admin Dashboard</span>
          <ThemeToggle />
        </div>
        <div className="flex flex-col p-4">
          <div className="mb-6 flex items-center space-x-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">{session?.user?.name}</p>
              <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
            </div>
          </div>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm ${
                  activeTab === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto space-y-3 pt-6">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                View Site
              </Link>
            </Button>
            <Button
              variant="destructive"
              className="w-full justify-start"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 overflow-auto p-6"
      >
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            {sidebarItems.find((item) => item.id === activeTab)?.label}
          </h1>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>

        {/* Tab Content */}
        <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-card p-6 shadow-sm">
          {activeTab === "profile" && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Mohammed Zubair"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <input
                    type="text"
                    defaultValue="Software Development Engineer"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    defaultValue="zubairmohammed7272@gmail.com"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 9035149422"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Location</label>
                  <input
                    type="text"
                    defaultValue="Bengaluru, Karnataka, India"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Software Development Engineer specialized in web development, data analytics, and machine learning..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </div>

              <h2 className="pt-4 text-xl font-semibold">Social Links</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">GitHub</label>
                  <input
                    type="url"
                    defaultValue="https://github.com/MohammedZubair"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">LinkedIn</label>
                  <input
                    type="url"
                    defaultValue="https://linkedin.com/in/MohammedZubair"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
              </div>

              <h2 className="pt-4 text-xl font-semibold">Areas of Interest</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interests (comma separated)</label>
                <input
                  type="text"
                  defaultValue="Sports, Travelling, Motorcycle Riding"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="animate-fade-in space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Work Experience</h2>
                <Button variant="outline" size="sm">
                  Add Experience
                </Button>
              </div>

              <div className="space-y-6 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">Software Development Engineer</h3>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    Remove
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <input
                      type="text"
                      defaultValue="Computacenter"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <input
                      type="text"
                      defaultValue="Bengaluru"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Date</label>
                    <input
                      type="date"
                      defaultValue="2023-12-01"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Date (leave empty for current)</label>
                    <input
                      type="date"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      rows={3}
                      defaultValue="Collaborated with the development team to integrate a web application with ServiceNow, streamlining ticket creation and documentation processes for faster issue resolution."
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Technologies (comma separated)</label>
                    <input
                      type="text"
                      defaultValue="TurboRepo, Next.js, ServiceNow, Node.js"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "profile" && activeTab !== "experience" && (
            <div className="animate-fade-in flex h-40 items-center justify-center">
              <p className="text-muted-foreground">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} editing section will be available here.
              </p>
            </div>
          )}
        </div>
      </motion.main>
    </div>
  );
} 
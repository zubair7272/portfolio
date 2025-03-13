import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Mohammed Zubair Portfolio",
  description: "Admin dashboard for Mohammed Zubair's portfolio website",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/40">
      {children}
    </div>
  );
} 
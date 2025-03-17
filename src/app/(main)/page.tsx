"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Code, FileCode, GraduationCap, Laptop, Briefcase, Star, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h1 className="animate-typewriter mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Mohammed Zubair
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-6 text-xl text-muted-foreground"
              >
                Software Development Engineer
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8 text-lg text-muted-foreground"
              >
                Passionate about creating efficient and user-friendly software solutions through innovative programming and problem-solving techniques.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="animate-pulse">
                  <Link href="/#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/#projects">View Projects</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary/20 shadow-xl sm:h-[400px] sm:w-[400px]">
                <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20">
                  {/* Profile image */}
                  <Image 
                    src="/Profile.JPG" 
                    alt="Mohammed Zubair" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--background))_0%,hsl(var(--muted))_100%)] opacity-20" />
      </section>

      {/* About Section */}
      <SectionContainer id="about" title="About Me" icon={<Code className="h-5 w-5" />}>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              I am a Software Development Engineer currently working at Computacenter in Bengaluru, with a focus on web development, data analytics, and machine learning.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in Computer Science from CMR University and hands-on experience in multiple projects, I&apos;ve developed expertise in a range of technologies including JavaScript, TypeScript, React, Node.js, MongoDB, and more.
            </p>
            <p className="text-muted-foreground">
              My professional journey has equipped me with skills in collaborative development, software testing, debugging, and a keen eye for detail. I&apos;m passionate about creating efficient solutions and continuously expanding my knowledge in emerging technologies.
            </p>
            <div className="pt-4">
              <h3 className="mb-2 text-lg font-semibold">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {["Sports", "Travelling", "Motorcycle Riding"].map((interest, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card p-6 shadow-sm"
          >
            <div>
              <h3 className="mb-1 font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">Bengaluru, Karnataka, India</p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Email</h3>
              <a
                href="mailto:zubairmohammed7272@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                zubairmohammed7272@gmail.com
              </a>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Phone</h3>
              <a
                href="tel:+919035149422"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                +91 9035149422
              </a>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Connect</h3>
              <div className="flex gap-3 text-muted-foreground">
                <a href="https://github.com/zubair7272" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/zubair7272/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Skills Section */}
      <SectionContainer id="skills" title="Skills" icon={<Star className="h-5 w-5" />}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Languages"
            skills={["JavaScript", "Python", "Java", "TypeScript", "C"]}
          />
          <SkillCard
            title="Frontend"
            skills={["HTML", "CSS", "React", "Next.js"]}
          />
          <SkillCard
            title="Backend"
            skills={["Node.js", "Express.js"]}
          />
          <SkillCard
            title="Databases"
            skills={["MongoDB", "MySQL"]}
          />
          <SkillCard
            title="Data Analytics & Visualization"
            skills={["PowerBI", "Excel"]}
          />
          <SkillCard
            title="Data Science & Machine Learning"
            skills={["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Matplotlib"]}
          />
          <SkillCard
            className="md:col-span-2 lg:col-span-3"
            title="Other Skills"
            skills={["Programming", "Software Developing", "Software Testing", "Debugging", "Problem Solving"]}
          />
        </div>
      </SectionContainer>

      {/* Experience Section */}
      <SectionContainer id="experience" title="Experience" icon={<Briefcase className="h-5 w-5" />}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="stagger-animation space-y-8"
        >
          <TimelineItem
            title="Software Development Engineer"
            company="Computacenter"
            location="Bengaluru"
            period="Dec 2023 - Present"
            description="Collaborated with the development team to integrate a web application with ServiceNow, streamlining ticket creation and documentation processes for faster issue resolution."
            technologies={["TurboRepo", "Next.js", "ServiceNow", "Node.js"]}
          />
        </motion.div>
      </SectionContainer>

      {/* Education Section */}
      <SectionContainer id="education" title="Education" icon={<GraduationCap className="h-5 w-5" />}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="stagger-animation space-y-8"
        >
          <TimelineItem
            title="B.Tech CSE"
            company="CMR University"
            location="Bengaluru"
            period="Aug 2019 - May 2023"
          />
          <TimelineItem
            title="PUC PCMC"
            company="Reva Independent PU College"
            location="Bengaluru"
            period="Jul 2017 - Apr 2019"
          />
          <TimelineItem
            title="SSLC"
            company="St Joseph&apos;s English High School"
            location="Bengaluru"
            period="June 2016 - Apr 2017"
          />
        </motion.div>
      </SectionContainer>

      {/* Certifications Section */}
      <SectionContainer id="certifications" title="Certifications" icon={<FileCode className="h-5 w-5" />}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CertificationCard
            title="Career Essentials in Software Development"
            issuer="Microsoft and LinkedIn"
          />
          <CertificationCard
            title="IBM Skills Build On Data Analytics"
            issuer="IBM"
          />
          <CertificationCard
            title="Business Administration Specialist"
            issuer="Salesforce"
          />
          <CertificationCard
            title="Full Stack Development"
            issuer="100 Xdevs"
          />
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects" title="Projects" icon={<Laptop className="h-5 w-5" />}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="ServiceNow Integration Application"
            description="Integrated a web application with ServiceNow to streamline ticket creation and documentation. Developed RESTful APIs for direct support ticket generation, enhancing efficiency and improving support efficiency and reducing response time by 62%."
            technologies={["Next.js", "ServiceNow", "Node.js", "REST API"]}
          />
          <ProjectCard
            title="Food Ordering Application"
            description="Created a full-stack food ordering application using React and Node.js/Express. Managed user data and orders with MongoDB, implementing real-time notifications for updates. Conducted usability testing to optimize user experience, resulting in increased retention."
            technologies={["React", "Node.js", "Express", "MongoDB"]}
          />
          <ProjectCard
            title="AI Assistant for Desktop"
            description="Built an AI-powered desktop assistant in Python for task automation, including scheduling and reminders. Integrated voice recognition for usability and utilized machine learning for task prediction."
            technologies={["Python", "Machine Learning", "Voice Recognition"]}
          />
          <ProjectCard
            title="Blood Bank Management System"
            description="Designed a web application for blood bank operations using Java and Spring Boot. Managed donor registration and inventory tracking with a MySQL database and user roles."
            technologies={["Java", "Spring Boot", "MySQL"]}
          />
          <ProjectCard
            title="Stock Trend Prediction Using Machine Learning"
            description="Implemented algorithms to predict stock trends using Python, Pandas, and Scikit-Learn. Developed a predictive model with 67% Accuracy, visualizing results with Matplotlib."
            technologies={["Python", "Pandas", "Scikit-Learn", "Matplotlib"]}
          />
          <ProjectCard
            title="Music Player Android Application"
            description="Developed a music player app for Android using Java, featuring playlists and background playback. Ensured compatibility across devices through thorough testing."
            technologies={["Java", "Android"]}
          />
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer id="contact" title="Contact Me" icon={<Mail className="h-5 w-5" />}>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-muted-foreground">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hello. I&apos;m always open to discussing new projects and ideas.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:zubairmohammed7272@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  zubairmohammed7272@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+919035149422"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +91 9035149422
                </a>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/zubair7272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/zubair7272/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          {/* <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-card p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Subject"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form> */}
        </div>
      </SectionContainer>
    </div>
  );
}

// Reusable Components
function SectionContainer({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={ref}
      className="border-t border-neutral-200/40 dark:border-neutral-800/40 bg-background py-16 md:py-24"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <div className="mr-4 rounded-md bg-primary/10 p-2 text-primary">
            {icon}
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function SkillCard({
  title,
  skills,
  className,
}: {
  title: string;
  skills: string[];
  className?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card p-6 shadow-sm",
        className
      )}
    >
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineItem({
  title,
  company,
  location,
  period,
  description,
  technologies,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  technologies?: string[];
}) {
  return (
    <div className="relative border-l border-neutral-200 dark:border-neutral-800 pl-8 before:absolute before:left-[-8px] before:top-[12px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-neutral-200 dark:before:border-neutral-800 before:bg-background">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
          {period}
        </span>
      </div>
      <div className="mb-3 text-muted-foreground">
        {company} • {location}
      </div>
      {description && <p className="mb-4 text-muted-foreground">{description}</p>}
      {technologies && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function CertificationCard({
  title,
  issuer,
  date,
  url,
}: {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-card transition-all hover:border-primary/50 hover:shadow-md"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">Issued by {issuer}</p>
          {date && <p className="text-xs text-muted-foreground">{date}</p>}
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
          >
            View Certificate
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
  image,
  url,
  github,
}: {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  url?: string;
  github?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-card shadow-sm transition-all hover:shadow-md"
    >
      {image ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <Code className="h-20 w-20 text-primary" />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {url && (
            <Button variant="outline" size="sm" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {github && (
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Import missing components from the code above
import { Phone, Github, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; 
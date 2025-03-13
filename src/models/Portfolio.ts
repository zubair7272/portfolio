import mongoose, { Schema, Document } from 'mongoose';

// Project interface
interface IProject {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  url?: string;
  github?: string;
  highlights: string[];
}

// Experience interface
interface IExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
  highlights: string[];
}

// Education interface
interface IEducation {
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate: Date;
  location: string;
}

// Skill category interface
interface ISkillCategory {
  name: string;
  skills: string[];
}

// Portfolio interface
export interface IPortfolio extends Document {
  owner: mongoose.Types.ObjectId;
  about: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    image?: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
    areasOfInterest: string[];
  };
  skills: ISkillCategory[];
  experiences: IExperience[];
  education: IEducation[];
  projects: IProject[];
  certifications: {
    title: string;
    issuer: string;
    date: Date;
    url?: string;
  }[];
  updatedAt: Date;
}

const PortfolioSchema = new Schema<IPortfolio>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    about: {
      name: { type: String, required: true },
      title: { type: String, required: true },
      bio: { type: String, required: true },
      location: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      image: { type: String },
      socialLinks: {
        github: { type: String },
        linkedin: { type: String },
        twitter: { type: String },
        website: { type: String },
      },
      areasOfInterest: [{ type: String }],
    },
    skills: [
      {
        name: { type: String, required: true },
        skills: [{ type: String, required: true }],
      },
    ],
    experiences: [
      {
        company: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: String, required: true },
        technologies: [{ type: String }],
        highlights: [{ type: String }],
      },
    ],
    education: [
      {
        institution: { type: String, required: true },
        degree: { type: String, required: true },
        field: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        location: { type: String, required: true },
      },
    ],
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        technologies: [{ type: String, required: true }],
        image: { type: String },
        url: { type: String },
        github: { type: String },
        highlights: [{ type: String }],
      },
    ],
    certifications: [
      {
        title: { type: String, required: true },
        issuer: { type: String, required: true },
        date: { type: Date, required: true },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema); 
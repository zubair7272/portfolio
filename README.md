# Mohammed Zubair Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Features

- ✨ Modern, animated UI with Framer Motion
- 🌓 Dark/light mode support
- 📱 Fully responsive design
- 🔒 Authentication system for admin access
- 📝 Admin dashboard for content management
- 🗄️ MongoDB database for storing portfolio data
- 📊 Interactive and eye-catching components

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS, SASS
- **Icons**: Lucide React
- **Animations**: Framer Motion, GSAP, Lottie
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret_key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting Up Admin User

To create an initial admin user:

1. Start the development server
2. Visit [http://localhost:3000/api/setup](http://localhost:3000/api/setup)
3. This will create an admin user with these credentials:
   - Email: zubairmohammed7272@gmail.com
   - Password: AdminPassword123!
4. Login at [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
5. Change the default password immediately from the admin dashboard

## Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── (main)/     # Main portfolio routes
│   │   ├── admin/      # Admin dashboard routes
│   │   └── api/        # API routes
│   ├── components/     # Reusable components
│   │   ├── ui/         # UI components
│   │   └── ...         # Other components
│   ├── lib/            # Utility functions
│   ├── models/         # MongoDB models
│   ├── providers/      # Context providers
│   └── types/          # TypeScript type definitions
├── .env.local          # Environment variables
└── ...                 # Config files
```

## Customization

### Styling

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS utility classes
- Theme configuration is in `tailwind.config.ts`

### Content

Edit your portfolio content through the admin dashboard or directly in the MongoDB database.

## Deployment

Deploy the application to Vercel:

```bash
npm run build
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

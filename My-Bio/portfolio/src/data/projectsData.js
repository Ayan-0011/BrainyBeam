export const projectsData = [
  {
    id: "fleet-management-system",
    number: "01",
    title: "Fleet Management System",
    shortDescription: "A comprehensive role-based MERN platform designed to manage vehicles, driver assignments, trip scheduling, fuel logs, and preventive maintenance operations.",
    category: "MERN Stack • Full-Stack Platform",
    tag: "Flagship Project",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "HTTP-Only Cookies", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    color: "from-blue-600 to-indigo-700",
    accentColor: "#3B82F6",
    liveUrl: "https://github.com/ayan-ansari/fleet-management-system",
    githubUrl: "https://github.com/ayan-ansari/fleet-management-system",
    overview: "The Fleet Management System is an end-to-end full-stack web application built to streamline commercial fleet operations. It solves operational bottlenecks by providing specialized dashboards for 4 user roles: Admin, Dispatcher, Fleet Manager, and Driver.",
    problem: "Commercial transportation teams struggle with fragmented spreadsheet tracking for vehicle maintenance, delayed trip dispatches, unmonitored fuel usage, and expired vehicle insurance/permits.",
    solution: "Centralized fleet operations into a secure MERN stack application featuring role-based access control (RBAC), automated permit expiry tracking, driver log management, and real-time trip state updates.",
    roles: ["Admin", "Dispatcher", "Fleet Manager", "Driver"],
    keyFeatures: [
      "Secure Multi-Role Authentication with HTTP-Only Cookie JWT storage",
      "Interactive Dashboards customized for Admin, Dispatcher, Fleet Manager, and Driver",
      "Vehicle & Driver Lifecycle Management with status toggles (Available, In-Trip, Maintenance)",
      "Trip Dispatching Workflow with origin, destination, payload details, and timestamps",
      "Fuel Logging & Maintenance Record keeping with cost analytical reporting",
      "Permit & Insurance Expiry Alert System for proactive compliance",
      "Protected Routes & Role-based Redirection Middleware"
    ],
    architecture: {
      frontend: "React SPA built with Axios interceptors, custom hooks, and Tailwind CSS responsive UI",
      api: "RESTful JSON API with Express routes (/api/v1/auth, /api/v1/vehicles, /api/v1/trips, /api/v1/maintenance)",
      backend: "Node.js + Express.js modular MVC architecture with custom error handling & validator middleware",
      database: "MongoDB with Mongoose schemas, relational references, indexing, and transactional integrity"
    },
    challenges: [
      "Managing complex state transitions across 4 distinct user roles while keeping authorization tight.",
      "Handling HTTP-Only Cookie JWT validation across client requests without compromising UX performance.",
      "Designing relational Mongoose schemas for Drivers, Trips, Vehicles, and Maintenance Logs."
    ],
    learnings: [
      "Mastered MERN architecture best practices, security patterns with HTTP-only cookies, and RBAC middleware.",
      "Gained hands-on experience structuring scalable RESTful APIs with clean error handlers and request validation."
    ]
  },
  {
    id: "salon-booking-system",
    number: "02",
    title: "Lucky Hair Style — Salon Booking",
    shortDescription: "A modern salon appointment platform enabling frictionless guest bookings while providing an authenticated admin dashboard for service and schedule management.",
    category: "React • Supabase • PostgreSQL",
    tag: "Live Project",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Supabase Auth"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    color: "from-amber-600 to-orange-700",
    accentColor: "#F59E0B",
    liveUrl: "https://lucky-hair-style.vercel.app/",
    githubUrl: "https://github.com/ayan-ansari/lucky-hair-style",
    overview: "Lucky Hair Style is a production web application built for a local salon to digitize client bookings. It allows clients to quickly reserve appointments without registration friction, while salon owners manage daily appointments and services through an authenticated admin panel.",
    problem: "Traditional phone call bookings caused double-bookings, missed customer inquiries during busy hours, and zero visibility into daily schedule availability.",
    solution: "Created a mobile-optimized web app powered by Supabase PostgreSQL. Clients select services, available time slots, and receive automated WhatsApp confirmation links.",
    roles: ["Customer (Guest)", "Salon Owner (Admin)"],
    keyFeatures: [
      "Frictionless Customer Booking without mandatory account creation",
      "Authenticated Admin Dashboard for appointment approval and service CRUD",
      "Real-time Slot Availability Engine to prevent double-bookings",
      "Automated One-Click WhatsApp Booking Confirmation link builder",
      "Service Duration & Pricing catalog management",
      "Blackout Dates & Closed Day operating calendar controls"
    ],
    architecture: {
      frontend: "React + TypeScript single-page application formatted with Tailwind CSS styling",
      api: "Supabase JS Client SDK communicating directly with backend PostgreSQL services",
      backend: "Supabase BaaS providing Row Level Security (RLS) and Auth mechanisms",
      database: "PostgreSQL with typed tables for services, appointments, and store settings"
    },
    challenges: [
      "Preventing concurrent double-booking during peak request windows using database constraints.",
      "Structuring responsive calendar slot pickers that adapt seamlessly to mobile viewports."
    ],
    learnings: [
      "Strengthened skills in TypeScript, Supabase backend integration, Row Level Security (RLS), and real-world user flow optimization."
    ]
  },
  {
    id: "zaptro-ecommerce",
    number: "03",
    title: "Zaptro — E-commerce Platform",
    shortDescription: "A feature-rich e-commerce web application with product filtering, shopping cart state management, Clerk authentication, and administrative CRUD operations.",
    category: "React • Context API • Clerk",
    tag: "Live Project",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Context API", "Clerk", "REST API", "JSON Server"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-600 to-teal-700",
    accentColor: "#10B981",
    liveUrl: "https://zaptroo.netlify.app/",
    githubUrl: "https://github.com/ayan-ansari/zaptro-ecommerce",
    overview: "Zaptro is an e-commerce platform built to deliver a smooth shopping experience. It features complete product exploration, search filtering, cart state synchronization, user authentication via Clerk, and admin controls for inventory management.",
    problem: "Standard tutorial e-commerce apps lack persistent state, proper authentication guards, and real administrative CRUD workflows.",
    solution: "Engineered a production-feel storefront using React Context API for global state, combined with Clerk for secure identity management and admin routes.",
    roles: ["Shopper", "Store Admin"],
    keyFeatures: [
      "Dynamic Product Catalog with instant search, category filters, and sorting",
      "Persistent Shopping Cart & Wishlist powered by React Context API",
      "Clerk Authentication for guest checkout and secure user profiles",
      "Admin Panel for creating, editing, and deleting product listings",
      "Interactive Order Summary with price calculations and tax estimation",
      "Responsive Product Details view with image galleries"
    ],
    architecture: {
      frontend: "React with Context API for state management and Tailwind CSS UI",
      api: "REST API endpoints consuming product database feeds",
      backend: "Mock REST backend / JSON Server handling CRUD requests",
      auth: "Clerk authentication provider integrated into client router"
    },
    challenges: [
      "Designing clean global state mechanisms for cart synchronization without unnecessary component re-renders.",
      "Implementing role checking via Clerk metadata to protect admin creation routes."
    ],
    learnings: [
      "Enhanced proficiency in React Context API, third-party authentication integration, dynamic filter state, and e-commerce UX best practices."
    ]
  }
];

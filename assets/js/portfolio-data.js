/**
 * Portfolio project data from CV (assets/file/irawanagungnugroho.pdf)
 */
const PORTFOLIO_PROJECTS = [
  {
    "id": "hospire",
    "title": "HOSPIRE - Hospitality Learning Ecosystem",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Hospitality LMS",
    "client": "HOSPIRE",
    "date": "Jul 2026 - Present",
    "role": "Fullstack Developer (Freelance)",
    "url": "",
    "stack": "Laravel 12, Vue 3, Tailwind CSS, SeaweedFS, LiveKit, Docker, L5-Swagger",
    "overview": [
      "Enterprise-grade Hospitality Learning Management System (LMS) combining program management, learning modules, assessments, certifications, job placements, and payment processing into a unified ecosystem.",
      "Built with Laravel 12, Vue 3, Tailwind CSS, multi-language support (English & Indonesian), RBAC, real-time communication via LiveKit, SeaweedFS S3-compatible storage, and Docker."
    ],
    "features": [
      "Program Management",
      "Learning Modules & Assessments",
      "Certifications & Job Placements",
      "Payment Processing",
      "Multi-Language Content",
      "Role-Based Access Control",
      "Real-Time Communication (LiveKit)",
      "API Documentation (L5-Swagger)"
    ]
  },
  {
    "id": "indotani-store",
    "title": "IndotaniPOS",
    "category": "Cloud & Enterprise",
    "categoryDetail": "AI-Powered POS & Business Intelligence",
    "client": "Indotani Store",
    "date": "May 2026 - Jun 2026",
    "role": "Fullstack Developer (Freelance)",
    "url": "",
    "stack": "Golang (Gin), Next.js, TypeScript, PostgreSQL, Redis, SeaweedFS, Nginx, Docker",
    "overview": [
      "Enterprise-grade Point of Sale (POS) platform for retail stores, distributors, and agricultural businesses with AI-powered business insights for data-driven decision making.",
      "Built with Golang (Gin), Next.js, TypeScript, PostgreSQL, Redis, SeaweedFS, Nginx, and Docker with RESTful APIs for POS, inventory, finance, and reporting modules."
    ],
    "features": [
      "Multi-branch POS",
      "Product, Category, Supplier & Customer Management",
      "Inventory & Stock Monitoring",
      "Sales & Purchase Management",
      "Cash Flow & Financial Dashboard",
      "Accounts Receivable Management",
      "Loyalty Points & Membership",
      "AI Insight Dashboard",
      "Sales Trend Analytics",
      "Best-Selling Product Analysis",
      "Low Stock & Restock Recommendations",
      "Business Performance Reporting",
      "Role-Based Access Control (RBAC)"
    ]
  },
  {
    "id": "bontings-pos",
    "title": "Bontings POS",
    "category": "Web Application",
    "categoryDetail": "Multi-branch Retail POS",
    "client": "Bontings",
    "date": "Feb 2026 - May 2026",
    "role": "Fullstack Developer (Freelance)",
    "url": "",
    "stack": "Laravel, MySQL, Bootstrap",
    "overview": [
      "Web-based retail management and Point of Sale (POS) system for multi-branch souvenir shops and retail businesses, unifying back-office operations and front-line cashier workflows in a single Laravel application.",
      "Five main areas: Configuration, Master Data, Transactions, Reports, and Activity Logs. POS module provides a fast single-page cashier interface with thermal receipt printing and WhatsApp notifications."
    ],
    "features": [
      "Multi-branch Management",
      "POS Single-Page Cashier Interface",
      "Product, Stock & Inventory Management",
      "Inter-branch Stock Transfers",
      "FIFO-based Cost of Goods Sold (HPP)",
      "Sales, Purchases & Cancellations",
      "Cash Withdrawals & Receivables/Payables",
      "VAT Configuration & Agent Commissions",
      "Thermal Receipt Printing (58/70/80mm)",
      "WhatsApp Customer Notifications",
      "Sales, Cashier & Stock Reports",
      "Activity Logs & Audit Trails"
    ]
  },
  {
    "id": "genesis-financial-system",
    "title": "Genesis Financial System",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Financial Management & Distribution",
    "client": "Genesis",
    "date": "Apr 2026",
    "role": "Fullstack Developer (Freelance)",
    "url": "",
    "stack": "React 18, Next.js 16, TypeScript, TailwindCSS, Go (Gin), PostgreSQL, Redis, SeaweedFS, Nginx, Docker, JWT",
    "overview": [
      "Financial management and distribution application with multi-role management, POS, inventory, financial tracking, ledger & wallet system, multi-level distribution, and AI assistant.",
      "Built with React 18, Next.js 16, TypeScript, Go (Gin), PostgreSQL, Redis, SeaweedFS, Nginx, Docker, and JWT with microservices architecture."
    ],
    "features": [
      "Multi-Role Management (Owner, Developer, Manager, Member, Reseller, Supplier)",
      "Dashboard Analytics & POS System",
      "Inventory & Financial Tracking",
      "Ledger & Wallet System",
      "Multi-Level Distribution & Commission Tracking",
      "Contribution Calculation & Audit Trail",
      "Budget Management & Payment Processing",
      "Invoice Generation & Multi-Currency",
      "Tax Management & 2FA Security",
      "Branch Management & Real-time Updates",
      "Workflow Automation & Integration APIs",
      "Data Analytics & AI Assistant"
    ]
  },
  {
    "id": "gendhis-prima-sentosa",
    "title": "Gendhis Prima Sentosa",
    "category": "Web Application",
    "categoryDetail": "Multi-Tenant Training & Consulting Platform",
    "client": "Gendhis Prima Sentosa",
    "date": "Jan 2026 - Feb 2026",
    "role": "Fullstack Developer (Freelance)",
    "url": "",
    "stack": "Laravel 12, MySQL, Bootstrap",
    "overview": [
      "Laravel 12 web application for training and consulting companies with admin dashboard to manage multiple tenants (companies), each with its own public website served by domain.",
      "Dashboard features include events & calendar, attendance, training budget with proof upload, invoices with PDF/Word export, training reports, form templates, consultation forms, certificates with QR code, employees & access levels, syllabus, and multi-tenant public sites."
    ],
    "features": [
      "Multi-Tenant Company Management",
      "Events & Calendar",
      "Attendance (Absen) & Quick-Absen",
      "Training Budget with Proof Upload & Excel/PDF Export",
      "Invoices with PDF/Word Export",
      "Training & Invoice Reports",
      "Form Templates & Responses",
      "Consultation Form (Public Submit)",
      "Certificates with QR Code",
      "Employees & Access Levels",
      "Syllabus & Categories",
      "Public Gallery (Fancybox Lightbox)",
      "Multi-Tenant Public Sites by Domain"
    ]
  },
  {
    "id": "analisis-data-pemulihan-aset",
    "title": "Analisis Data Pemulihan Aset (Kejaksaan Agung)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Fullstack / Asset Management",
    "client": "Kejaksaan Agung RI",
    "date": "June 2025 - Present",
    "role": "Fullstack Programmer (Freelance)",
    "url": "https://dev-free.sysdev.id",
    "stack": "NextJS, Golang GIN, PostgreSQL, CI/CD, Docker",
    "overview": [
      "Integrated web-based information system to support comprehensive asset management for Kejaksaan Agung, including asset identification and categorization, tracking, maintenance, monitoring, dashboards and reporting for data-driven decision-making, and reducing the risk of asset loss or mismanagement in record keeping.",
      "Built with NextJS frontend, Golang GIN backend, PostgreSQL database, CI/CD automation, and Docker."
    ],
    "features": [
      "Asset Registration & Cataloging",
      "Asset Distribution Map",
      "Asset Maintenance Management",
      "Asset Valuation",
      "Asset Condition Monitoring",
      "Asset Log & History",
      "Dashboard & Report",
      "Security & Access Control",
      "Notification and Alert",
      "QR Code Module",
      "Comparison & Analysis",
      "Role & User Management"
    ]
  },
  {
    "id": "icp-bnpt",
    "title": "ICP (Intelligent Collaboration Platform)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Enterprise Collaboration Platform",
    "client": "BNPT",
    "date": "Oct 2025 - Present",
    "role": "Project Manager (Freelance)",
    "url": "https://icp.sysdev.id",
    "stack": "Go GIN, ReactJS, PostgreSQL, Docker, MinIO, React Native, CI/CD",
    "overview": [
      "Organization task and project management platform enabling task assignment, priority setting, task division, short communication, and work report monitoring.",
      "Built with Go GIN, ReactJS, PostgreSQL, Docker, MinIO for storage bucket, React Native, and CI/CD."
    ],
    "features": [
      "Dashboard & Feeds",
      "Tasks & Projects",
      "Document Collaboration",
      "Company Structure",
      "Webmail",
      "Chat & Calls",
      "Private Channel",
      "Calendar",
      "Meeting Room",
      "My Drive",
      "Log Activity"
    ]
  },
  {
    "id": "adhyaksapedia",
    "title": "Adhyaksapedia (Kejaksaan RI)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Legal Information Platform",
    "client": "Kejaksaan RI",
    "date": "Aug 2023 - Jun 2024",
    "role": "Fullstack Programmer (Freelance)",
    "url": "https://adhyaksapedia.id",
    "stack": "Go GIN, ReactJS, PostgreSQL, Docker, MinIO, CI/CD",
    "overview": [
      "Public legal information platform for easy access to law information, public discussion on applicable laws, direct complaints, legal activity information, polls management, and grouping public interests by legal product category.",
      "Built with Go GIN, ReactJS, PostgreSQL, Docker, MinIO for storage bucket, and CI/CD with scalable architecture and GIS integration."
    ],
    "features": [
      "Dashboards",
      "News & Information",
      "Poll & Event Management",
      "Statistical Data",
      "Q&A Management",
      "Community Complaints & Feedback",
      "Helpdesk & Reporting",
      "GIS & Mobile Platforms",
      "Authentication & API Management"
    ]
  },
  {
    "id": "memotis",
    "title": "Memotis (Graha Yasa Selaras)",
    "category": "Web Application",
    "categoryDetail": "Internal Correspondence System",
    "client": "Graha Yasa Selaras",
    "date": "Aug 2023",
    "role": "Fullstack Programmer (Freelance)",
    "url": "https://gys.app",
    "stack": "Laravel, Bootstrap, MySQL, cPanel",
    "overview": [
      "Internal application for letters and dispositions, event agendas, and MOM used by Graha Yasa Selaras to monitor business processes and employee work.",
      "Built using Laravel, Bootstrap, MySQL, and cPanel."
    ],
    "features": [
      "Inter-division Letters & Dispositions",
      "Event Agenda for All Divisions",
      "Internal and External MOM",
      "Work Assignments with Progress Status",
      "User Settings by Division and Leveling"
    ]
  },
  {
    "id": "sahabat-iwan",
    "title": "Sahabat Iwan",
    "category": "Web Application",
    "categoryDetail": "Political Media Platform",
    "client": "Iwan Nurdin Campaign",
    "date": "Jul 2023",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel 10, Bootstrap, MySQL, cPanel",
    "overview": [
      "Media platform for political struggle and empowerment movement, developed using Laravel 10 and MySQL with role-based access control.",
      "Built using Laravel, Bootstrap, MySQL, and cPanel."
    ],
    "features": [
      "Slideshow & Profile",
      "Program & Social Media",
      "Testimonials & Swara Nusvantara",
      "Comments, Reports & Support",
      "Contact Us, Subscribe & Gallery",
      "RBAC"
    ]
  },
  {
    "id": "peruri-digital-signing",
    "title": "Peruri Digital Signing (POS & SCM)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Digital Signing & Supply Chain",
    "client": "PERURI",
    "date": "Nov 2022 - Aug 2023",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, Docker, CI/CD, PostgreSQL",
    "overview": [
      "POS portal to facilitate digital product usage distributed by strategic partners for signing and digital stamp, supporting PDS electronic system legal compliance.",
      "SCM system to facilitate digital product quota allocation, partner registration with document upload, and partner selection by PDS team."
    ],
    "features": [
      "POS Portal for Digital Products",
      "Digital Signing & Digital Stamp",
      "SCM Quota Allocation",
      "Partner Registration & Verification",
      "Quota Monitoring Dashboard",
      "Legal Compliance Support"
    ]
  },
  {
    "id": "smartkantin",
    "title": "Smartkantin (Graha Yasa Selaras)",
    "category": "Mobile & Fullstack",
    "categoryDetail": "Canteen Ordering Platform",
    "client": "Graha Yasa Selaras",
    "date": "Dec 2022 - Feb 2023",
    "role": "Fullstack Programmer (Freelance)",
    "url": "https://smartkantin.com",
    "stack": "Golang GIN, Laravel, React Native, PostgreSQL, Docker, CI/CD",
    "overview": [
      "Smart canteen application to facilitate UMKM canteen sellers and students in Telkom dormitory environment for ordering and food delivery without hassle.",
      "Using Golang for API, Laravel for web, React Native for Android and iOS, PostgreSQL, Docker, Midtrans Payment Gateway, Firebase Push Notification, and Google Cloud Storage."
    ],
    "features": [
      "Mobile Ordering (Android & iOS)",
      "Seller & Student Management",
      "Payment Gateway (Midtrans)",
      "Push Notifications (Firebase)",
      "File Manager (Google Cloud Storage)",
      "Server Monitoring (New Relic)"
    ]
  },
  {
    "id": "donut-genic",
    "title": "Donut Genic",
    "category": "Web Application",
    "categoryDetail": "Sales Management",
    "client": "Donut Genic",
    "date": "Jun 2022",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, Bootstrap, MySQL, cPanel",
    "overview": [
      "Sales management application with dynamic dashboard settings, administrator leveling, and master data for public display.",
      "Built using Laravel, Bootstrap, MySQL, and cPanel."
    ],
    "features": [
      "Dynamic Dashboard Settings",
      "System Administrator Leveling",
      "Master Data for Public Display",
      "Sales Transactions",
      "Sales Report"
    ]
  },
  {
    "id": "nesiatix",
    "title": "Nesiatix",
    "category": "Web Application",
    "categoryDetail": "Online Ticketing",
    "client": "Nesiatix",
    "date": "Jun 2022",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Golang, PostgreSQL, Laravel, Bootstrap, Nginx",
    "overview": [
      "Online ticketing sales application with dashboard and online ticketing built on Laravel, API on Golang, and PostgreSQL database on AlmaLinux with Nginx.",
      "Built using Golang, PostgreSQL, Laravel, and Bootstrap."
    ],
    "features": [
      "Dashboard Admin",
      "Online Ticketing",
      "Golang REST API",
      "PostgreSQL Database",
      "Nginx on AlmaLinux"
    ]
  },
  {
    "id": "pasteur-trans-web-ticketing",
    "title": "Pasteur Trans Web Ticketing",
    "category": "Web Application",
    "categoryDetail": "Travel Ticketing System",
    "client": "Pasteur Trans",
    "date": "Dec 2020 - Mar 2021",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, MySQL, Bootstrap",
    "overview": [
      "Online ticket booking application and company profile website integrated with Traveloka and RedBus for outlet management, seat maps, scheduling, and payments.",
      "Built using Laravel, MySQL, and Bootstrap with Midtrans payment and Zenviva SMS integration."
    ],
    "features": [
      "Outlet & Seat Map Settings",
      "Travel Schedule Management",
      "Traveloka & RedBus Integration",
      "Midtrans Payment",
      "SMS Notifications (Zenviva)",
      "Order Reports & Manifest",
      "Barcode Check Order Status"
    ]
  },
  {
    "id": "conservation-agriculture",
    "title": "Conservation Agriculture Kementerian Pertanian",
    "category": "Web Application",
    "categoryDetail": "Agricultural Information Portal",
    "client": "Kementerian Pertanian",
    "date": "Oct 2020 - Nov 2020",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, Bootstrap, MySQL",
    "overview": [
      "Website application to display agricultural infrastructure information as part of the Ministry of Agriculture.",
      "Built using Laravel, Bootstrap, and MySQL."
    ],
    "features": [
      "Access Rights Management",
      "Slideshow & About Us",
      "Information & Related Institutions",
      "Program, Gallery, News & Articles",
      "Links Module"
    ]
  },
  {
    "id": "hlwintlive",
    "title": "Hlwintlive",
    "category": "Mobile & Fullstack",
    "categoryDetail": "Live Streaming Platform",
    "client": "Shwetech",
    "date": "Dec 2018 - Dec 2019",
    "role": "Senior Backend Developer (Shwetech)",
    "url": "http://hlwintlive.com/",
    "stack": "Laravel, Bootstrap, MySQL, React Native, Wowza",
    "overview": [
      "Hlwint is a live streaming video and social video chat application. Website application used to assist marketing in promoting the application.",
      "Created using Laravel 5.5.19, Bootstrap for admin, MySQL, JavaScript, jQuery, and React Native."
    ],
    "features": [
      "Multi Dynamic Languages",
      "Level System & Account",
      "Panel Menu Settings",
      "About, Contact & Reward",
      "Feature, FAQ & Privacy Policy"
    ]
  },
  {
    "id": "sil-bbkkp",
    "title": "SIL BBKKP - Sistem Informasi Laboratorium",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Laboratory Information System",
    "client": "Balai Besar Kulit Karet Dan Plastik",
    "date": "Oct 2019 - Dec 2019",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, Bootstrap, MySQL",
    "overview": [
      "Laboratory information system for Center for Leather, Rubber and Plastics under the Industrial Research and Development Agency (BPPI).",
      "Main modules include web settings, master data, transaction data, reports, and administrator management."
    ],
    "features": [
      "Web Settings & Master Data",
      "Test Request & Assignment",
      "Payment & Testing Workflow",
      "Verification & STU",
      "Process & Customer Reports",
      "PNBP & Tester Reports"
    ]
  },
  {
    "id": "locate-brickston",
    "title": "Locate (Brickston Singapore)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Bus Route Management",
    "client": "Brickston Coach Singapore",
    "date": "Oct 2019 - Feb 2020",
    "role": "Assistant Project Manager (Coding Collective)",
    "url": "https://www.brickston.com.sg/locateapp/login",
    "stack": "Mobile App, CMS Dashboard",
    "overview": [
      "Automated mobile application to improve bus communications with client employees, replacing manual WhatsApp group updates for bus route status and real-time location.",
      "Allows Brickston Coach to manage bus route assignments via CMS dashboard and notify employees of route changes via in-app notifications."
    ],
    "features": [
      "Bus Route CMS Dashboard",
      "Real-time Location Tracking",
      "Sub-contract Driver Login",
      "In-App Notifications",
      "Starred Route Alerts",
      "Driver Login Monitoring"
    ]
  },
  {
    "id": "citracker",
    "title": "CITRACKER (Agency for Integrated Care Singapore)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Inventory Tracking System",
    "client": "Agency for Integrated Care Singapore",
    "date": "Nov 2019",
    "role": "Assistant Project Manager (Coding Collective)",
    "url": "https://aicapps.com/login",
    "stack": "Web Application",
    "overview": [
      "CI Tracker module for inventory management of tablets and ID tags with role-based access for Main Administrator, Division Leaders, and Volunteers.",
      "Tracks item assignment, return acknowledgment, and full system logs with email notifications."
    ],
    "features": [
      "Main Administrator Management",
      "Division Leader Profiles",
      "Volunteer Profiles",
      "Tablet & ID Tag Inventory",
      "Item Assignment & Return",
      "System Log & Email Reminders"
    ]
  },
  {
    "id": "fl121",
    "title": "FL121",
    "category": "Mobile & Fullstack",
    "categoryDetail": "Currency Exchange App",
    "client": "Shwetech",
    "date": "Aug 2019 - Sep 2019",
    "role": "Senior Backend Developer (Shwetech)",
    "url": "",
    "stack": "Node.js, MongoDB, MySQL, Laravel, React Native",
    "overview": [
      "Currency exchange application built with Node.js API, MongoDB, MySQL, Laravel Framework, and React Native for Android and iOS.",
      "Features include market, chat with agents, COD money exchange, forum, and SMS verification registration."
    ],
    "features": [
      "Market & Currency Settings",
      "Chat with Agents",
      "COD Money Exchange",
      "Forum & Reviews",
      "SMS Verification Register",
      "Purchase History & Notifications"
    ]
  },
  {
    "id": "shwetech-pos",
    "title": "Shwetech POS",
    "category": "Web Application",
    "categoryDetail": "Point of Sales",
    "client": "Shwetech",
    "date": "Jul 2019 - Aug 2019",
    "role": "Senior Backend Developer (Shwetech)",
    "url": "",
    "stack": "Laravel 5.8, MySQL",
    "overview": [
      "Point of sales application developed using Laravel 5.8 and MySQL with wizard installation and loyalty program.",
      "Complete POS features including cashier, inventory, sales reports, and admin management."
    ],
    "features": [
      "Wizard Installation & Cashier",
      "Loyalty Program & Barcode",
      "Sales Order & Cash Sales",
      "Stock Management & Alerts",
      "Customer & Product Management",
      "Daily Earning Report & Admin Roles"
    ]
  },
  {
    "id": "deskera-pos",
    "title": "Deskera POS (Nova APEX)",
    "category": "Web Application",
    "categoryDetail": "Point of Sales",
    "client": "Nova APEX",
    "date": "Jun 2019 - Jul 2019",
    "role": "Senior Backend Developer (Shwetech)",
    "url": "",
    "stack": "Laravel 5.8, MySQL",
    "overview": [
      "Point of sales application developed using Laravel 5.8 and MySQL database for Nova APEX company.",
      "Complete POS system with cashier, sales management, inventory, and reporting features."
    ],
    "features": [
      "Cashier & Print Purchase Note",
      "Sales Order & Cash Sales",
      "Purchase Order & Payment",
      "Stock Adjustment & Alerts",
      "Customer & Product Management",
      "Daily Earning Report & Admin Roles"
    ]
  },
  {
    "id": "emusrenbangtan-kementerian-pertanian",
    "title": "Emusrenbangtan Kementerian Pertanian",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Budget Planning System",
    "client": "Kementerian Pertanian",
    "date": "Jan 2019 - Jun 2019",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, Bootstrap, MySQL",
    "overview": [
      "Emusrenbangtan synchronizes regional proposals (bottom up) with central design (top down) to obtain agreement on programs and activities for the following year.",
      "Result is an agreement sheet signed by Echelon 1 representative with Provincial Agriculture Service forming the basis for budget allocation."
    ],
    "features": [
      "Upload/Download eProposal Data",
      "Upload/Download Rancangan Pusat",
      "Discussion Session Management",
      "Budget Recap Calculation",
      "Fund Allocation",
      "Offline Data Sync via API"
    ]
  },
  {
    "id": "emusrenbangtan-upgrade",
    "title": "Emusrenbangtan Kementerian Pertanian (Upgrade)",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Budget Planning System Upgrade",
    "client": "Kementerian Pertanian",
    "date": "Apr 2020 - Jul 2020",
    "role": "Fullstack Programmer (Freelance)",
    "url": "http://147.139.174.200/",
    "stack": "Laravel, Bootstrap, MySQL",
    "overview": [
      "Upgrade of Emusrenbangtan with online discussions in 34 provinces of Indonesia, real-time data from discussions to reports, and tracking data from eproposal, central design, and discussion to produce budget fund allocation data for each province's districts.",
      "Built with Laravel, Bootstrap, and MySQL."
    ],
    "features": [
      "Online Discussions in 34 Provinces",
      "Real-Time Discussion Data to Reports",
      "Eproposal Tracking",
      "Central Design Tracking",
      "Discussion Tracking",
      "Budget Fund Allocation per District"
    ]
  },
  {
    "id": "sikp",
    "title": "SIKP - Sistem Informasi Kawasan Pertanian",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Agricultural Planning GIS",
    "client": "Kementerian Pertanian",
    "date": "Dec 2018 - Jan 2019",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, Bootstrap, MySQL",
    "overview": [
      "Agricultural Region Planning Information System (SIKP) containing tabular and spatial data on agricultural areas collected from e-Proposal application database.",
      "Follow-up from Minister of Agriculture Regulation No. 41/Permentan/OT.140/3/2014 on e-Planning based agricultural development planning."
    ],
    "features": [
      "Tabular & Spatial Data Display",
      "Statistical Comparison Tables",
      "e-Proposal Integration",
      "Agricultural Area Management",
      "Dynamic Annual Data Updates"
    ]
  },
  {
    "id": "walet-healthy-care",
    "title": "Walet Healthy Care",
    "category": "Web Application",
    "categoryDetail": "Spa & Wellness Booking",
    "client": "Walet Healthy Care",
    "date": "Sep 2018 - Nov 2018",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel 5.6.38, MySQL",
    "overview": [
      "Application used to market spa products and reservations with multilingual support.",
      "Built using Laravel 5.6.38 and MySQL."
    ],
    "features": [
      "Multilingual Support",
      "Spa Services & Products",
      "Online Reservation",
      "Content Management",
      "FAQ & Partnership",
      "Gallery & Contact Us"
    ]
  },
  {
    "id": "smki-yogyakarta",
    "title": "SMKI Yogyakarta",
    "category": "Web Application",
    "categoryDetail": "School Information System",
    "client": "SMKI Yogyakarta",
    "date": "Jul 2018 - Sep 2018",
    "role": "Fullstack Programmer (Freelance)",
    "url": "https://smki-yogya.sch.id/",
    "stack": "Laravel 5.6.38, MySQL, Bootstrap, UI Kit",
    "overview": [
      "Web-based application used as publication media to introduce Yogyakarta Junior High School with student admission and management features.",
      "Built using Laravel 5.6.38, MySQL, Bootstrap for admin, and UI Kit for public display."
    ],
    "features": [
      "Student & Teacher Management",
      "Student Admission System",
      "Report Cards & Live Chat",
      "Articles, News & Gallery",
      "Activity Facilities & Visitor Reports",
      "Download Files & External Links"
    ]
  },
  {
    "id": "e-agenda",
    "title": "e-Agenda",
    "category": "Mobile & Fullstack",
    "categoryDetail": "Correspondence Disposition",
    "client": "Kementerian Pertanian",
    "date": "Sep 2018",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel, React Native",
    "overview": [
      "Correspondence disposition application to streamline assignment process from superiors to subordinates in government organization within Ministry of Agriculture planning scope.",
      "Built using Laravel for web API and React Native for Android."
    ],
    "features": [
      "Correspondence Disposition",
      "Assignment Workflow",
      "Superior to Subordinate Tracking",
      "Laravel Web API",
      "React Native Android App"
    ]
  },
  {
    "id": "majelis-lingkungan-hidup",
    "title": "Majelis Lingkungan Hidup Muhammadiyah",
    "category": "Web Application",
    "categoryDetail": "Organization Portal",
    "client": "Muhammadiyah Yogyakarta",
    "date": "Jul 2018",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel 5.6.25, Bootstrap, MySQL",
    "overview": [
      "Application used as medium to publish articles and news like a blog for Majelis Lingkungan Hidup Muhammadiyah Yogyakarta organization.",
      "Built using Laravel 5.6.25, Bootstrap CSS 3, jQuery, JS, and MySQL."
    ],
    "features": [
      "Articles & News",
      "Publications & Download Files",
      "Admin Management & Profile",
      "Multiple Language Support",
      "Activity Gallery",
      "Organizational Structure"
    ]
  },
  {
    "id": "eplanning-biroren",
    "title": "Eplanning Biro Perencanaan Pertanian",
    "category": "Cloud & Enterprise",
    "categoryDetail": "e-Government Planning",
    "client": "Kementerian Pertanian",
    "date": "Apr 2018 - Jun 2018",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel 5.6.17, Bootstrap, MySQL",
    "overview": [
      "e-Planning system for Biro Perencanaan (Biroren) Ministry of Agriculture supporting e-Government with planning and budgeting process information.",
      "Built using Laravel 5.6.17, Bootstrap CSS 3, jQuery, JS, and MySQL."
    ],
    "features": [
      "Agenda & Basis Data e-Planning",
      "Budget & Profile Management",
      "Public Information (RPJMN, RENSTRA, RKP)",
      "Public Service (eProposal, eSakip, eMonev)",
      "Publication & Digital Library",
      "Leveling System Access"
    ]
  },
  {
    "id": "mutiara-timur-travel",
    "title": "Mutiara Timur Travel",
    "category": "Web Application",
    "categoryDetail": "Hajj & Umrah Travel",
    "client": "Mutiara Timur Travel",
    "date": "Mar 2018",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "Laravel 5.6.12, Bootstrap, MySQL",
    "overview": [
      "Application to expand marketing of hajj and umrah travel products with agent management and member data tracking for pilgrimage departures.",
      "Built using Laravel 5.6.12, Bootstrap CSS 4, jQuery, JS, and MySQL."
    ],
    "features": [
      "Agent Data & Product Service",
      "Order Tracking (Member Data)",
      "Portfolio & Video Gallery",
      "Admin & Agent Dashboards",
      "Financial Statements",
      "Visitor Statistics & Project Management"
    ]
  },
  {
    "id": "trivia-game",
    "title": "Trivia Game",
    "category": "Web Application",
    "categoryDetail": "WhatsApp Game Bot",
    "client": "Shwetech",
    "date": "Nov 2017 - Jan 2018",
    "role": "Senior Backend Developer (Shwetech)",
    "url": "",
    "stack": "Laravel 5.5.25, Bootstrap, API Passport, Python",
    "overview": [
      "WhatsApp Game Bot allowing users to create their own agent and play games with friends. Features BOT system, Admin and Member Area, and Landing Page.",
      "Built using Laravel 5.5.25, Bootstrap 4, and API Passport to connect Python bot."
    ],
    "features": [
      "Auto Response & Easy Register",
      "Game Information Broadcast",
      "Custom Response & Private Messages",
      "Member Area Dashboard",
      "Manage & Get Report",
      "Administrator Page & Landing Page CMS"
    ]
  },
  {
    "id": "rintisan-digital",
    "title": "Rintisan Digital Teknology Company Profile",
    "category": "Web Application",
    "categoryDetail": "Company Profile",
    "client": "Rintisan Digital Teknologi",
    "date": "Oct 2017",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP 7.0.6, Laravel 5.4, MySQL, Bootstrap",
    "overview": [
      "Information system developed as promotional website for Rintisan Digital Teknologi company.",
      "Built using PHP v7.0.6, Laravel v5.4, MySQL, Bootstrap, jQuery, and JavaScript."
    ],
    "features": [
      "Company Profile Pages",
      "Promotional Content",
      "Responsive Design",
      "Admin Content Management"
    ]
  },
  {
    "id": "nasmoco-mlati",
    "title": "Web Sales Marketing Nasmoco Mlati Yogyakarta",
    "category": "Web Application",
    "categoryDetail": "Automotive Marketing",
    "client": "Toyota Nasmoco Mlati",
    "date": "Sep 2017",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "WordPress 4.8.1, Bootstrap",
    "overview": [
      "Website to help Toyota Nasmoco Mlati Yogyakarta marketing team sell vehicles online.",
      "Built using WordPress Indonesia v4.8.1 with Bootstrap, TablePress, WhatsApp chat, Yoast SEO, and visitor traffic tracking."
    ],
    "features": [
      "Vehicle Sales Marketing",
      "Photo & Portfolio Gallery",
      "WhatsApp Chat & Share",
      "Call Now Integration",
      "Yoast SEO",
      "Visitor Traffic Analytics"
    ]
  },
  {
    "id": "pringgodani",
    "title": "Pringgodani Company Profile",
    "category": "Web Application",
    "categoryDetail": "Company Profile",
    "client": "Pringgodani",
    "date": "Apr 2017 - Aug 2017",
    "role": "Fullstack Programmer (Freelance)",
    "url": "http://www.zuhaits.com/pringgodani",
    "stack": "PHP 7.0.6, CodeIgniter 3, MySQL, Bootstrap",
    "overview": [
      "Company profile information system used as promotional website for Pringgodani company.",
      "Built using PHP v7.0.6, CodeIgniter v3, MySQL, Bootstrap, jQuery, and JavaScript."
    ],
    "features": [
      "Company Profile Pages",
      "Promotional Content",
      "Admin Content Management",
      "Responsive Design"
    ]
  },
  {
    "id": "personal-financial",
    "title": "Personal Financial Application",
    "category": "Web Application",
    "categoryDetail": "Financial Management",
    "client": "Personal Project",
    "date": "Jul 2017",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP 7.1.6, Laravel, MySQL, Bootstrap",
    "overview": [
      "Personal financial management application for tracking income and expenses with monthly reports and charts.",
      "Built using PHP v7.1.6, Laravel, MySQL, Bootstrap V4 (Admin) V3 (User), jQuery, and JavaScript."
    ],
    "features": [
      "User Management",
      "Financial Categories",
      "Debit & Credit Tracking",
      "Financial Reports",
      "Monthly Financial Reports",
      "Financial Charts"
    ]
  },
  {
    "id": "trass",
    "title": "TRASS - Trading Simulation System",
    "category": "Web Application",
    "categoryDetail": "Trading Simulation",
    "client": "Educational",
    "date": "Mar 2017 - Apr 2017",
    "role": "Fullstack Programmer (Freelance)",
    "url": "https://www.itrass.com/",
    "stack": "PHP 7.0.6, CodeIgniter 3, MySQL, Bootstrap",
    "overview": [
      "Trading Simulation System for share learners in university, seminar, and general users.",
      "Built using PHP v7.0.6, CodeIgniter v3, MySQL, Bootstrap V4, jQuery, and JavaScript."
    ],
    "features": [
      "Trading Simulation",
      "Share Learning Platform",
      "University & Seminar Support",
      "User Management"
    ]
  },
  {
    "id": "zuhaits-agrifintech",
    "title": "Zuhaits Agrifintech Company Profile",
    "category": "Web Application",
    "categoryDetail": "Company Profile",
    "client": "Zuhaits Agrifintech",
    "date": "Apr 2017",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP 7.0.6, CodeIgniter 3, MySQL, Bootstrap",
    "overview": [
      "Company profile application used as promotional website for Zuhaits Agrifintech.",
      "Built using PHP v7.0.6, CodeIgniter v3, MySQL, Bootstrap V4 (Admin) V3 (User), and jQuery."
    ],
    "features": [
      "Company Profile Pages",
      "Promotional Content",
      "Admin Panel",
      "Responsive Design"
    ]
  },
  {
    "id": "mis-karoseri-trisakti",
    "title": "Management Information System Karoseri Trisakti",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Enterprise MIS",
    "client": "Karoseri Trisakti",
    "date": "Nov 2013 - Aug 2016",
    "role": "IT Programmer (Karoseri Trisakti)",
    "url": "",
    "stack": "CodeIgniter 3, Bootstrap, MySQL",
    "overview": [
      "Application Performance Management Support System for Karoseri Trisakti including Inventory Control, Purchasing, Warehouse, Production Planning, Global Manufacturing, Sales Services, Cost Accounting, Finance AP, AR Finance, and Cashier with integrated systems.",
      "Built with CodeIgniter 3 framework, Bootstrap CSS, OOP, MySQL, jQuery, and JavaScript."
    ],
    "features": [
      "Inventory Control & Purchasing",
      "Warehouse & Production Planning",
      "Global Manufacturing",
      "Sales Services",
      "Cost Accounting",
      "Finance AP/AR & Cashier"
    ]
  },
  {
    "id": "asram-sistem",
    "title": "Asram Sistem",
    "category": "Web Application",
    "categoryDetail": "Furniture Simulation",
    "client": "Asram Furniture",
    "date": "Jul 2016",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP 7.0.6, CodeIgniter 3, MySQL, Bootstrap",
    "overview": [
      "Asram Furniture information system used as simulation calculation of furniture for marketing division.",
      "Built using PHP v7.0.6, CodeIgniter v3, MySQL, Bootstrap, and jQuery."
    ],
    "features": [
      "Furniture Simulation Calculation",
      "Marketing Division Support",
      "Product Catalog",
      "Price Calculation"
    ]
  },
  {
    "id": "jogja-mitra",
    "title": "Jogja Mitra",
    "category": "Web Application",
    "categoryDetail": "Tour & Travel",
    "client": "Jogja Mitra",
    "date": "Jun 2016",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP 7.0.6, CodeIgniter 3, MySQL, Bootstrap",
    "overview": [
      "Jogja Mitra information system used as promotional website for tour and travel reservation services.",
      "Built using PHP v7.0.6, CodeIgniter v3, MySQL, Bootstrap, and jQuery."
    ],
    "features": [
      "Tour & Travel Promotion",
      "Reservation Services",
      "Company Profile",
      "Contact & Inquiry"
    ]
  },
  {
    "id": "update-network-karoseri",
    "title": "Update Network Infrastructure Karoseri Trisakti",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Network Infrastructure",
    "client": "Karoseri Trisakti",
    "date": "Nov 2015 - Dec 2015",
    "role": "IT Programmer (Karoseri Trisakti)",
    "url": "",
    "stack": "Network Infrastructure, CCTV",
    "overview": [
      "Updating Karoseri Trisakti computer network infrastructure including network administration, CCTV installation, and client station installation.",
      "IT infrastructure project for enterprise network modernization."
    ],
    "features": [
      "Network Infrastructure Update",
      "Network Administration",
      "CCTV Installation",
      "Client Station Installation"
    ]
  },
  {
    "id": "arwana-mis",
    "title": "Arwana Management Information System",
    "category": "Cloud & Enterprise",
    "categoryDetail": "Enterprise MIS",
    "client": "PT Arwana Citramulia Tbk",
    "date": "Nov 2012 - Mar 2013",
    "role": "IT Programmer (PT Arwana Citramulia TBK)",
    "url": "",
    "stack": "Joomla, PostgreSQL, OpenSUSE Linux",
    "overview": [
      "Update and maintenance of Arwana Management Information System for enterprise operations.",
      "Based on Joomla framework, PostgreSQL, and OpenSUSE Linux Server."
    ],
    "features": [
      "Enterprise MIS Maintenance",
      "System Updates",
      "Database Management",
      "Linux Server Administration"
    ]
  },
  {
    "id": "wara-computer",
    "title": "Selling Information System Of Wara Computer",
    "category": "Web Application",
    "categoryDetail": "Online Shop",
    "client": "Wara Computer Yogyakarta",
    "date": "Jun 2012 - Jul 2012",
    "role": "Fullstack Programmer (STMIK AMIKOM Yogyakarta)",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Web-based computer sales online store application to support company performance with products, ordering, stock, sales reports, delivery, and automatic database backup restore.",
      "Built as student project at STMIK AMIKOM Yogyakarta using PHP and MySQL."
    ],
    "features": [
      "Product Catalog",
      "Ordering & Stock Management",
      "Sales Reports",
      "Delivery Management",
      "Automatic Database Backup Restore"
    ]
  },
  {
    "id": "pcms",
    "title": "Pratama Computer Management System (PCMS)",
    "category": "Web Application",
    "categoryDetail": "Hotel Management",
    "client": "Pratama Computer",
    "date": "Feb 2014",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Hotel management information system used as internal application for room reservation, food beverage processing, inventory, room service, employee data, and hotel revenue reporting.",
      "Built as freelance project for hotel management operations."
    ],
    "features": [
      "Room Reservation",
      "Food & Beverage Processing",
      "Inventory & Room Service",
      "Employee Data Collection",
      "Hotel Revenue Reports"
    ]
  },
  {
    "id": "spare-parts-bus",
    "title": "Sales And Purchase Of Spare Parts Bus Information System",
    "category": "Web Application",
    "categoryDetail": "Inventory & Sales",
    "client": "Karoseri Trisakti",
    "date": "Apr 2013 - Nov 2013",
    "role": "IT Programmer (Karoseri Trisakti)",
    "url": "",
    "stack": "CodeIgniter 2, MySQL, Bootstrap",
    "overview": [
      "Information system supporting company performance for sale and purchase of bus spare parts products.",
      "Created using CodeIgniter v2, MySQL, CSS Bootstrap, jQuery, JavaScript, and HTML."
    ],
    "features": [
      "Spare Parts Sales",
      "Purchase Management",
      "Inventory Tracking",
      "Sales & Purchase Reports"
    ]
  },
  {
    "id": "tasti-computer",
    "title": "Tasti Computer Online Shop Information System",
    "category": "Web Application",
    "categoryDetail": "Online Shop",
    "client": "Tasti Computer",
    "date": "Jan 2011",
    "role": "Fullstack Programmer (Freelance)",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Computer sales online store web-based application to market products online with reservation management, product purchasing, and sales income tracking.",
      "Built using PHP and MySQL."
    ],
    "features": [
      "Online Product Marketing",
      "Reservation Management",
      "Product Purchasing",
      "Sales Income Tracking"
    ]
  },
  {
    "id": "aplikasi-simpan-pinjam",
    "title": "Aplikasi Simpan Pinjam",
    "category": "Web Application",
    "categoryDetail": "Employee Savings & Loan",
    "client": "PT Sentra Solusindo WebCenter",
    "date": "May 2011",
    "role": "Fullstack Programmer",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Application for employee savings and loans management at PT Sentra Solusindo WebCenter.",
      "Built using PHP and MySQL."
    ],
    "features": [
      "Employee Savings Management",
      "Loan Management",
      "Repayment Tracking",
      "Account Balance Reports"
    ]
  },
  {
    "id": "yogyakarta-museum",
    "title": "Yogyakarta Museum Management Information System",
    "category": "Web Application",
    "categoryDetail": "Museum Information System",
    "client": "Academic Project",
    "date": "2011",
    "role": "Fullstack Programmer (STMIK AMIKOM Yogyakarta)",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Museum information system for managing museum collections and visitor information.",
      "Built using PHP and MySQL as a thesis project."
    ],
    "features": [
      "Collection Management",
      "Visitor Information",
      "Museum Catalog",
      "Search & Browse"
    ]
  },
  {
    "id": "yogyakarta-tourism",
    "title": "Yogyakarta Tourism Information System",
    "category": "Web Application",
    "categoryDetail": "Tourism Information Portal",
    "client": "Academic Project",
    "date": "2011",
    "role": "Fullstack Programmer (STMIK AMIKOM Yogyakarta)",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Yogyakarta tourism information system with agendas, news, tourism, culture, association, and gallery of various tourism spots in Yogyakarta.",
      "Built using PHP and MySQL as a thesis project."
    ],
    "features": [
      "Agendas & News",
      "Tourism Spots",
      "Culture Information",
      "Association Directory",
      "Photo Gallery"
    ]
  },
  {
    "id": "cool-box",
    "title": "Cool Box",
    "category": "Web Application",
    "categoryDetail": "Hardware Project",
    "client": "Academic Project",
    "date": "2010",
    "role": "Hardware Developer",
    "url": "",
    "stack": "Peltier Cooler, Dry Battery",
    "overview": [
      "Portable drink cooler built using peltier cooler (processor cooler typically used for overclocking) and dry battery motor as power source.",
      "Designed as a portable, easily transportable drink cooling device."
    ],
    "features": [
      "Peltier Cooler Technology",
      "Portable Design",
      "Battery Powered",
      "Drink Cooling"
    ]
  },
  {
    "id": "music-studio-rental",
    "title": "Music Studio Rental Information System",
    "category": "Web Application",
    "categoryDetail": "Desktop Rental Application",
    "client": "Academic Project",
    "date": "2010",
    "role": "Desktop Developer",
    "url": "",
    "stack": "Java",
    "overview": [
      "Java-based desktop application for managing music studio rental operations.",
      "Built using Java as an academic project."
    ],
    "features": [
      "Studio Rental Management",
      "Booking & Scheduling",
      "Rental Fee Calculation",
      "Studio Availability Tracking"
    ]
  },
  {
    "id": "hotel-reservation-info-system",
    "title": "Web-Based Information System For Media Information and Hotel Reservation",
    "category": "Web Application",
    "categoryDetail": "Hotel Media & Reservation",
    "client": "Academic Project",
    "date": "2010",
    "role": "Fullstack Programmer",
    "url": "",
    "stack": "PHP, MySQL",
    "overview": [
      "Web-based information system for hotel media information and reservation management.",
      "Built using PHP and MySQL as an academic project."
    ],
    "features": [
      "Hotel Media Information",
      "Room Reservation",
      "Booking Management",
      "Hotel Profile"
    ]
  }
];

const PORTFOLIO_BY_ID = PORTFOLIO_PROJECTS.reduce(function(map, project) {
  map[project.id] = project;
  return map;
}, {});

function getPortfolioProject(id) {
  return PORTFOLIO_BY_ID[id] || PORTFOLIO_PROJECTS[0];
}

### Instructions for the project: ### Technical task for the company application on Next.js

#### 1. Introduction

Create a web application for the company using the Next.js framework. The application should contain information about the company, its services, team, and contact information. It should be responsive, easily maintainable, and ensure high performance.

#### 2. Goals

- Present information about the company.
- Showcase the services offered by the company.
- Introduce the company's team.
- Provide users with means to contact the company.

#### 3. Requirements

##### 3.1 General Requirements

- Use Next.js for server-side rendering and performance optimization.
- The application should be responsive and work on various devices (mobile phones, tablets, PCs).
- Code should be well-structured and easily maintainable.
- Utilize TypeScript for typing.
- The application should support multilingualism (e.g., English and Russian).
- Ensure the application meets SEO requirements.

##### 3.2 Pages

1. Home Page

   - Brief information about the company.
   - Slider/banner showcasing main services or promotions.
   - Section with the latest news or events.
   - Buttons/links to navigate to other sections of the site.

2. About Page

   - Company history.
   - Mission and values.
   - Achievements and awards.

3. Services Page

   - List of offered services with detailed descriptions.
   - Ability to filter or search for services.

4. Team Page

   - List of team members with photos and positions.
   - Brief biographies of key team members.

5. Contact Page
   - Contact form.
   - Contact information (address, phone, email).
   - Map indicating the office location.

##### 3.3 Additional Components

- Navigation Menu

  - Should be fixed and accessible on all pages.
  - Support dropdown menus for multi-level navigation.

- Footer

  - Brief contact information.
  - Links to social media.
  - Links to main sections of the site.

- Modal Window
  - Use for feedback forms and newsletter subscriptions.

##### 3.4 Functional Requirements

- SEO Optimization

  - Use meta tags for SEO.
  - User-friendly URLs.
  - Optimized heading structure (h1, h2, h3, etc.).
  - Automatic sitemap generation.
  - Integration with Google Search Console.
  - Page load speed optimization (Lazy loading for images, caching, and code minimization).
  - Use of structured data (schema.org) to enhance site representation in search results.

- Analytics

  - Integration with Google Analytics.

- Feedback Form
  - Data validation on client and server sides.
  - Sending data to the server and notifying the user of the result.

##### 3.5 Performance Requirements

- Use caching to improve performance.
- Image optimization.
- Lazy loading for images and other media.

##### 3.6 Security Requirements

- Protection against XSS and CSRF attacks.
- Secure storage and handling of user data.

#### 4. Technological Stack

- Framework: Next.js
- Programming Language: TypeScript
- Styling: CSS Modules
- Database: PostgreSQL
- Hosting: Vercel or another preferred provider

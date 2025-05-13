# Howell Gallery

Howell Gallery is a digital art gallery web application built with [Next.js](https://nextjs.org). It features a modern, responsive design, category filters, search, dark mode, and showcases generative and digital artworks.

## Features

- **Responsive Design:** Optimized for desktop and mobile devices.
- **Category Filters:** Easily browse artworks by category.
- **Search:** Find artworks by title.
- **Dark Mode:** Toggle between light and dark themes.
- **Popular & Latest Sold Grids:** Highlight trending and recently sold pieces.
- **Artist & Exhibition Pages:** Explore artists and exhibitions.
- **Accessible:** Keyboard navigation and accessible components.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/howell-gallery.git
   cd howell-gallery
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/components/` – React components (Header, Footer, Hero, Grids, etc.)
- `src/api/products.ts` – Artwork/product data source.
- `src/app/` – Next.js app directory and global styles.
- `public/` – Static assets.

## Customization

- **Add Artworks:** Edit `src/api/products.ts` to add or modify artworks.
- **Styling:** Modify CSS modules in `src/components/` or global styles in `src/app/globals.css`.
- **Branding:** Update the logo and text in `Header.tsx` and `Footer.tsx`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## License

This project is licensed under the MIT License.

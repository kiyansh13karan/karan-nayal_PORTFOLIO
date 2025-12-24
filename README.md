# My Portfolio

[![nextdotjs](https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000)](https://nextjs.org/)
[![framer](https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF)](https://www.framer.com/)
[![three.js](https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000)](https://threejs.org/)
[![tailwindcss](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4)](https://tailwindcss.com/)

### A Modern Next.js Portfolio

A modern and responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Showcases my skills, projects, and experience with clean UI and smooth animations.

**Live Demo:** _Coming Soon_ (Will be updated after deployment)

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code to Copy](#snippets)
6. 🔗 [Connect With Me](#connect-with-me)

## 🤖 Introduction

I am a Computer Science Engineering student passionate about Web Development and Machine Learning. I focus on building clean, responsive web applications and enjoy learning new technologies to solve real-world problems effectively.

This portfolio is built with Next.js for handling the user interface, Three.js for rendering 3D elements, Framer Motion for beautiful animations, and styled with Tailwind CSS. It demonstrates my skills in modern web development and creates a lasting impact through interactive design.

## ⚙️ Tech Stack

* **Next.js** - React framework for production
* **Three.js** - 3D graphics library
* **Framer Motion** - Animation library for React
* **Tailwind CSS** - Utility-first CSS framework
* **TypeScript** - Type-safe JavaScript
* **React** - JavaScript library for building user interfaces

## 🔋 Features

✨ **Responsive Design** – Optimized for desktop, tablet, and mobile devices

🎨 **Modern UI & Clean Layout** – Minimal, professional interface with smooth visuals

🎭 **Smooth Animations** – Subtle transitions and interactions powered by Framer Motion for better user experience

💼 **Projects Showcase** – Dedicated section highlighting web and ML projects with detailed descriptions

⚡ **Fast Performance** – Built with Next.js for optimized loading and performance

🌟 **Hero Section** – Captivating introduction featuring a spotlight effect and dynamic background

🎯 **Bento Grid** – Modern layout presenting personal information using cutting-edge CSS design techniques

🌐 **3D Elements** – Interactive 3D design elements, such as a GitHub-style globe and card hover effects

💬 **Work Experience** – Prominent display of professional background and skills

🎨 **Canvas Effect** – Innovative use of HTML5 canvas to create visually striking effects

📱 **Fully Responsive** – Seamless adaptability across all devices, ensuring optimal viewing experience

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/kiyansh13karan/portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**Building for Production**

```bash
npm run build
npm start
```

## 🕸️ Snippets

### Navigation Items (`data/index.ts`)

```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
```

### Grid Items Configuration

```typescript
export const gridItems = [
  {
    id: 1,
    title: "I prioritize clean code and user-centric design in my projects",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Currently exploring Machine Learning and AI technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "CS Engineering student with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building responsive and performant web applications",
    description: "Current Focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
```

### Tailwind Configuration

Add this to your `tailwind.config.ts`:

```typescript
colors: {
  black: {
    DEFAULT: "#000",
    100: "#000319",
    200: "rgba(17, 25, 40, 0.75)",
    300: "rgba(255, 255, 255, 0.125)",
  },
  white: {
    DEFAULT: "#FFF",
    100: "#BEC1DD",
    200: "#C1C2D3",
  },
  blue: {
    "100": "#E4ECFF",
  },
  purple: "#CBACF9",
}
```

### Global Styles

Add to your `globals.css`:

```css
@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }

  .black-gradient {
    background: linear-gradient(90deg, #161a31 0%, #06091f 100%);
  }
}
```

## 🔗 Connect With Me

Feel free to reach out and connect with me on various platforms:

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kiyansh13karan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karan-nayal-054981286/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/somnathtigers13)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/krn_nayal)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/krn_nayal13?igsh=MXg2bHJrNXFzMW5rMg==)

📧 **Email:** [karannayalkannu1982@gmail.com](mailto:karannayalkannu1982@gmail.com)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

* Original design inspiration from [Adrian Hajdin's Portfolio](https://github.com/adrianhajdin/portfolio)
* Built with modern web technologies and best practices
* Special thanks to the open-source community

---

<div align="center">
  <p>Made with ❤️ by Karan Nayal</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
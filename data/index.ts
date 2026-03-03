export const navItems = [
  { name: "About", link: "#about" },
  { name: "Resume", link: "#resume" },
  { name: "Certificates", link: "#certificates" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Computer Science Engineering student at Graphic Era Hill University, Bhimtal (2023–2027) with a CGPA of 7.5. Passionate about Web Development, Machine Learning, and modern UI/UX design.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I belong to Haldwani, Uttarakhand.",
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
    title: "Web Developer & ML Enthusiast with passion for solving real-world problems using technology.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building responsive web applications and ML projects",
    description: "The Inside Scoop",
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

export const projects = [
  {
    id: 1,
    title: "Huffman File Compressor",
    des: "A modern and responsive web application for lossless file compression using Huffman's algorithm. Built with an animated frontend and a Python Flask backend.",
    img: "/file-com.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/kiyansh13karan/Huffman_breeze_compressor",
  },
  {
    id: 2,
    title: "Handwritten Digit Recognition",
    des: "A machine learning project that trains a neural network on the MNIST dataset to recognize handwritten digits and predict external 28x28 pixel images.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/kiyansh13karan/Handwritten_digit_recognition",
  },
  {
    id: 3,
    title: "BMI Calculator",
    des: "A glassmorphism-based BMI calculator with real-time calculation, input validation, and health category classification.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/kiyansh13karan/BMI-Calculator",
  },
  {
    id: 4,
    title: "Portfolio Website",
    des: "A modern Next.js portfolio featuring 3D elements, animations, and responsive design showcasing my projects and skills.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/kiyansh13karan/karan-nayal_PORTFOLIO",
  },
  {
    id: 5,
    title: "Student Print Hub",
    des: "A web-based platform that allows students to upload documents and request printouts online, making the printing process efficient and queue-free.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/ts.svg", "/c.svg", "/stream.svg", "/fm.svg"],
    link: "https://github.com/kiyansh13karan/Student-Print-Hub-",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 6,
    title: "YOLOv8 Tracker",
    des: "A real-time object detection and tracking system using YOLOv8 and DeepSORT. Detects and tracks multiple objects in video streams with unique ID assignment.",
    img: "/p4.svg",
    iconLists: ["/c.svg", "/tail.svg", "/stream.svg", "/next.svg"],
    link: "https://github.com/kiyansh13karan/yolov8-tracker",
    techStack: ["Python", "OpenCV", "YOLOv8", "DeepSORT", "NumPy", "PyTorch"],
  },
];

export const testimonials = [
  {
    quote: "Karan demonstrated exceptional problem-solving skills and dedication during our collaborative project. His expertise in web development and machine learning is impressive for a student.",
    name: "Dr. Rajesh Kumar",
    title: "Professor, Computer Science Department",
  },
  {
    quote: "Working with Karan on the Huffman File Compressor project was great. His attention to detail and modern approach to web development really stood out.",
    name: "Priya Sharma",
    title: "Senior Developer, Tech Solutions",
  },
  {
    quote: "Karan's machine learning projects showcase his strong analytical thinking and technical skills. He has great potential in the field of AI and web development.",
    name: "Amit Singh",
    title: "ML Engineer, DataTech Corp",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Campus Mantri – GeeksforGeeks",
    desc: "Official campus representative at Graphic Era Hill University, Bhimtal. Promoted GfG resources, organized technical events, and boosted student engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Web Developer",
    desc: "Built responsive full-stack web applications using React.js, Next.js, Node.js and MongoDB with focus on user experience and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    desc: "Developed ML & Computer Vision projects including handwritten digit recognition (97% accuracy), YOLOv8 object tracking, and data analytics pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Problem Solver & Competitive Coder",
    desc: "Solved 300+ DSA problems on LeetCode and GeeksforGeeks. Finalist at IIIT Delhi Research Tank Hackathon. Participated in 5+ hackathons.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const internships = [
  {
    id: 1,
    company: "GeeksforGeeks",
    role: "Campus Mantri (Official Representative)",
    duration: "January 2026 – June 2026",
    type: "6 Months",
    responsibilities: [
      "Served as the official GeeksforGeeks representative at Graphic Era Hill University, Bhimtal.",
      "Acted as the primary point of contact between GeeksforGeeks and the student community.",
      "Organized and promoted campus-level technical events and initiatives.",
      "Increased student engagement with GeeksforGeeks educational resources and platforms.",
      "Demonstrated leadership, communication, and event coordination skills.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "AH",
  title: "Hello, I'm Atharva Hude",
  subTitle: emoji(
    "AI and Robotics Developer 🤖 | Experience in AI, Computer Vision, Language Models, Robotics, Sensor Fusion and Edge AI."
  ),
  introduction: "I’ve always been fascinated by the way machines perceive the world. Growing up, I was the kind of person who would take things apart just to understand how they worked—only to put them back together in a way that made them better. That curiosity led me into the world of artificial intelligence and robotics, where I’ve spent years exploring how we can make machines not just smarter, but also more intuitive and explainable. My journey has taken me from late-night coding sessions to securing research contracts that push AI beyond black-box solutions. Whether it’s building autonomous systems that respond to natural language or optimizing machine learning models to run efficiently on the edge, I thrive on challenges that merge intelligence with real-world application. At the core of it all, I believe technology should be more than just powerful—it should be understandable, adaptable, and built for impact.",
  resumeLink:
    "https://drive.google.com/file/d/1RUYixkfAdxIdzJQmY2VOjzrBt6FAUfaK/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/atharvahude",
  linkedin: "https://www.linkedin.com/in/atharvahude/",
  gmail: "ahude@asu.edu",
  scholar: "https://scholar.google.com/citations?hl=en&user=C3DM9yEAAAAJ",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills and Tools",
  subTitle: "Frameworks and tools I work with",
  skills: [
    emoji("🤖 Develop AI driven robotics solutions using ROS2, NAV2, and VLMs for autonomous navigation and task planning"),
    emoji("🧠 Implement Explainable AI (XAI) to enhance transparency and interpretability in deep learning models"),
    emoji("🚀 Optimize AI models for real-time Edge Deployment using TensorRT, NVIDIA Jetson, and model quantization"),
    emoji("📡 Fuse multi-modal sensor data (LiDAR, Radar, Camera) for robust perception and localization in autonomous systems"),
    emoji("🎨 Design synthetic data pipelines using GANs and NeRF to improve model generalization and robustness"),
    emoji("🛡️ Develop and evaluate adversarial robustness frameworks for AI models against camouflage and patch attacks"),
    emoji("⚡ Engineer high-performance AI systems with parallel computing, CUDA acceleration, and model pruning techniques"),
    emoji("🔬 Conduct AI research at the intersection of robotics, computer vision, and generative AI for real-world applications")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
  { skillName: "ROS2 Humble", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "Gazebo", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "TensorFlow", fontAwesomeClassname: "fab fa-google" },
  { skillName: "Pytorch", fontAwesomeClassname: "fab fa-facebook" },
  { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-github" },
  { skillName: "NVIDIA Jetson", fontAwesomeClassname: "fas fa-microchip" },
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "MS Robotics and Autonomous Systems (Artificial Intelligence) <i>GPA : 3.89 / 4.0</i>",
      duration: "Aug 2023 - May 2025",
      desc: "Research on Computer Vision and Gen AI.",
      
      descBullets: [
        "Research aide for CIS Department. (Jan 24 - Present)",
        "Research Volunteer at DCIM Lab. (Sept 23 - Jan 24)"
      ],
      courses: [
        "Knowledge Representation",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Python for Rapid Engineering",
        "Operational Deep Learning",
        "Machine Learning Accelerator Design",
        "Perception in Robotics",
        "Statistical Machine Learning",
        "Applied Linear Algebra",
        "Robotic Systems"
      ]
      
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/puneLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science <i> CGPA: 9.18 / 10.0 </i>",
      duration: "Aug 2017 - May 2021",
      desc: "Graduated with a strong foundation in AI and Computer Vision.",
      courses: [
        "Engineering Mathematics I ,II & III",
        "Discrete Mathematics",
        "Data Structures & Algorithms",
        "Comp Organization & Archi",
        "Object Oriented Programming",
        "Computer Graphics",
        "Advanced Data Structures",
        "Microprocessor",
        "Principles of Prog. Lang",
        "Theory of Computation",
        "Database Management Systems",
        "Sw. Engg. & Project Mgmt",
        "Info. Systems & Engg. Econ.",
        "Computer Networks (CN)",
        "Design & Anly of Algo.",
        "Sys. Prog. & Operating Sys.",
        "Embed. Sys. & Inet of Things",
        "Software Modeling and Design",
        "Web Technology",
        "High Performance Computing",
        "Artificial Intel. & Robotics",
        "Data Analytics",
        "Pervasive & Ubq. Comp.",
        "Sw. Testing & QA.",
        "Machine Learning",
        "Information and Cyber Security",
        "Embedded & Real Time O.S.",
        "Cloud Computing",
    ]
    
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Aide",
      company: "ASU (Teuvonet Technologies)",
      // companylogo: require("./assets/images/asuLogo.png"),
      date: "Jan 2024 – Present",
      desc: "Experimental research on Explainable AI and adversarial robustness.",
      descBullets: [
        "Integrated neuro-symbolic and object detection for a 30% recall boost.",
        "Secured funding Air Force/Space Force STTR Phase 1 contract.",
        "Developed a stress-testing framework for patch and camouflage attacks using Meta SAM 2.",
        "Optimized XAI models on Nvidia Jetson Xavier Orin via TensorRT acceleration and pruning."
      ]
    },
    {
      role: "AI Solutions Architect",
      company: "Automaton AI Infosystems Ltd",
      // companylogo: require("./assets/images/automatonLogo.png"),
      date: "Oct 2021 – May 2023",
      desc: "Built AI-driven industrial solutions.",
      descBullets: [
        "Led synthetic data generation solutions with GANs.",
        "Managed a team of computer vision engineers and provided training to interns.",
        "Developed real-time detection/tracking pipelines with Nvidia DeepStream for footfall analysis.",
        "Improved cylinder tare weight detection efficiency by 20–25% for a leading gas provider."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "My personal projects",
  projects: [
    {
      image: require("./assets/images/roboticArm.png"),
      projectName: "Robotic Arm (CoBot) Tic Tac Toe",
      projectDesc: `
                    • Programmed a 6 DOF Robotic Arm (Cobot 280M5) to play with a human.
                    • Integrated a Camera Module for object detection, maintaining an accuracy rate of 95%+ in recognizing and responding to the player's input during the game.
                    • Utilizes a suction pump for interactive moves.
                    `,
      footerLink: [
        {
          name: "Youtube Video",
          url: "https://www.youtube.com/watch?v=1AKvKo89SIc"
        },
        {
          name: "Github",
          url: "https://github.com/atharvahude/TicTacToeMyCobot"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/robotWaypoint.png"),
      projectName: "VLM ROS2 NAV2 Waypoint Navigation",
      projectDesc: `
                    • Combined Vision-Language Models with Nav2 to enable TurtleBot3 to navigate autonomously using
natural language commands.
                    • Enabled the robot to interpret spatial descriptions, plan user specific routes, and adapt to dynamic environments.
                    • Tech Stack: OpenAI APIs GPT 4 - Vision, ROS2, Gazebo, Navigation 2, Lidar SLAM.
                    `,
      footerLink: [
        {
          name: "Youtube Video",
          url: "https://www.youtube.com/watch?v=9UGKGdawtN0"
        },
        {
          name: "Github",
          url: "https://github.com/atharvahude/nav2-vlm"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sensorFusionCut.webp"),
      projectName: "Highway-Vehicle-State-Estimation",
      projectDesc: `
                    • Implemented an Unscented Kalman Filter (UKF) in C++ for sensor fusion, utilizing data from noisy radar and lidar measurements to estimate the state of multiple cars on a highway. 
                    • This implementation is structured to handle real-time data from laser and radar sensors, allowing for accurate tracking and state estimation even in the presence of significant noise.
                    • Tech Stack: C++, Eigen Library, Radar/Lidar Data Fusion, UKF.
                    `,
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/atharvahude/Highway-Vehicle-State-Estimation"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ttc-dataflow.png"),
      projectName: " Camera and Lidar Based Time to Collision Estimation",
      projectDesc: `
                    • Developed algorithm to match 3D Objects Over Time. 
                    • Computing TTC Based on Lidar and Camera Measurements.
                    • Conducting Various Tests with the Framework to To identify the most suitable detector/descriptor combination.
                    • Tech Stack: C++, Eigen Library, PCL, Open CV C++.
                    `,
      footerLink: [
        {
          name: "Github : Contains Project Report",
          url: "https://github.com/atharvahude/3D-Vehicle-Time-To-Collision"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lidarCut.webp"),
      projectName: "Lidar Obstacle Detection",
      projectDesc: `
                    • Utilized Lidar data to implement segmentation, clustering, and tracking of objects.
                    • Own implementation of RANSAC for plane segmentation and Euclidean clustering for object detection.
                    • Tech Stack: C++, Eigen Library, PCL, Open CV C++.
                    `,
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/atharvahude/Lidar-Obstacle-Detection"
        }

        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Sensor Fusion Nano Degree (Udacity)",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udacity.com/certificate/e/da777a08-215a-11ef-910f-c3a671b6885e"
        }
      ]
    },
    {
      title: "Generative Adversarial Networks (Coursera)",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/KUQ2PX2HBQWW"
        }
      ]
    },
    {
      title: "Nvidia DLI - DeepStream for Video Analytics on Jetson",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.nvidia.com/certificates?id=IVpOTBteR4aiHrXtAMGM8w"
        }
      ]
    },
    {
      title: "NVIDIA DLI – Building Video AI Applications at the Edge on Jetson Nano",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.nvidia.com/certificates?id=BQ6eWHOuSsSdSienaNrvMA"
        }
      ]
    },
    {
      title: "Custom and Distributed Training with TensorFlow",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/LBDA85EQQ92X"
        }
      ]
    },
    {
      title: "Custom Models, Layers, and Loss Functions with TensorFlow",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/4SQEKPSALYWK"
        }
      ]
    },
    {
      title: "TensorFlow: Data and Deployment",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/6GBGEH62MJWK"
        }
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/FBZEA3SH3F46"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/XKBM3YVJBB6K"
        }
      ]
    },
    {
      title: "Machine Learning - Andrew Ng",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/JXDYC8YSF4QP"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Tutorials / Reports",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-623-332-8534",
  email_address: "ahude@asu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "atharvahude", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

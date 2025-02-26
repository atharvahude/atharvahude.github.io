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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Atharva Hude",
  title: "Hi all, I'm Atharva",
  subTitle: emoji(
    "AI and Robotics Developer 🚀 | Experience in AI, Computer Vision, Language Models, ROS2, Sensor Fusion and Edge AI"
  ),
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
  title: "What I do",
  subTitle: "AI & Robotics Enthusiast Exploring Autonomous Systems and Deep Learning",
  skills: [
    emoji("⚡ Develop AI-driven Robotics solutions using ROS, NAV2, and Vision-Language Models"),
    emoji("⚡ Implement Explainable AI for interpretable ML/DL models"),
    emoji("⚡ Optimize AI models for Edge Deployment using TensorRT and NVIDIA Jetson")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
  { skillName: "ROS", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "TensorFlow", fontAwesomeClassname: "fab fa-google" },
  { skillName: "Pytorch", fontAwesomeClassname: "fab fa-facebook" },
  { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }

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
      subHeader: "MS Robotics and Autonomous Systems (Artificial Intelligence)",
      duration: "Aug 2023 - May 2025",
      desc: "Research on Computer Vision and Sensor Fusion.",
      
      descBullets: [
        "Research aide for CIS Department. (Jan 24 - Present)",
        "Research Volunteer at DCIM Lab. (Sept 23 - Jan 24)"
      ]
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/puneLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "Aug 2017 - May 2021",
      desc: "Graduated with a strong foundation in AI and Computer Vision."
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
      desc: "Developing Explainable AI (XAI) solutions for geospatial imagery, secured Air Force contract."
    },
    {
      role: "AI Solutions Architect",
      company: "Automaton AI Infosystems Ltd",
      // companylogo: require("./assets/images/automatonLogo.png"),
      date: "Oct 2021 – May 2023",
      desc: "Built AI-driven industrial automation solutions with NVIDIA TensorRT and GAN-based synthetic data generation."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/asuLogo.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/asuLogo.png"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Sensor Fusion Nano Degree",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/asuLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "DIY easy tutorials.",
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
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

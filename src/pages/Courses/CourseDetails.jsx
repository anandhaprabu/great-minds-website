import { Link, useParams } from "react-router-dom";
import "./CourseDetails.css";

const courseData = {
  "python-programming": {
    title: "Python Programming",
    icon: "🐍",
    category: "PROGRAMMING",
    subtitle:
      "Learn Python from the basics and develop the skills to build practical applications.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    topics: [
      "Python Fundamentals",
      "Variables and Data Types",
      "Conditional Statements",
      "Loops and Functions",
      "Lists, Tuples and Dictionaries",
      "Object-Oriented Programming",
      "File Handling",
      "Mini Projects",
    ],
    projects: [
      "Student Management System",
      "Personal Expense Tracker",
      "Quiz Application",
    ],
  },

  "data-analytics": {
    title: "Data Analytics",
    icon: "📊",
    category: "DATA & ANALYTICS",
    subtitle:
      "Learn how to organize, analyze and visualize data to discover useful insights.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    topics: [
      "Excel Fundamentals",
      "Formulas and Functions",
      "Pivot Tables",
      "SQL Fundamentals",
      "Data Cleaning",
      "Power Query",
      "Power BI Dashboards",
      "Data Visualization",
    ],
    projects: [
      "Sales Analytics Dashboard",
      "Student Performance Analysis",
      "Social Media Analytics Dashboard",
    ],
  },

  "web-development": {
    title: "Web Development",
    icon: "💻",
    category: "WEB TECHNOLOGY",
    subtitle:
      "Build responsive and attractive websites using modern frontend development technologies.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    topics: [
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Forms and Validation",
      "Git and GitHub Basics",
      "React Fundamentals",
    ],
    projects: [
      "Personal Portfolio Website",
      "Responsive Business Website",
      "Interactive JavaScript Application",
    ],
  },

  "full-stack-development": {
    title: "Full Stack Development",
    icon: "⚙️",
    category: "SOFTWARE DEVELOPMENT",
    subtitle:
      "Explore frontend and backend development and learn how web applications work together.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    topics: [
      "HTML and CSS",
      "JavaScript",
      "React Fundamentals",
      "Backend Development Concepts",
      "REST API Fundamentals",
      "Database Fundamentals",
      "Authentication Basics",
      "Deployment Fundamentals",
    ],
    projects: [
      "Full Stack Student Portal",
      "Task Management Application",
      "Database-Connected Web Application",
    ],
  },
};

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courseData[slug];

  if (!course) {
    return (
      <main className="cd-not-found">
        <span className="cd-not-found-icon">📚</span>
        <h1>Course Not Found</h1>
        <p>
          The course you are looking for is unavailable or the link is
          incorrect.
        </p>
        <Link to="/courses" className="cd-primary-btn">
          Explore All Courses
        </Link>
      </main>
    );
  }

  return (
    <main className="course-details">
      <section className="cd-hero">
        <div className="cd-hero-glow" />

        <div className="cd-container cd-hero-layout">
          <div className="cd-hero-content">
            <Link to="/courses" className="cd-back-link">
              ← Back to Courses
            </Link>

            <span className="cd-category">{course.category}</span>

            <h1>
              Master <span>{course.title}</span>
            </h1>

            <p className="cd-subtitle">{course.subtitle}</p>

            <div className="cd-course-info">
              <div className="cd-info-item">
                <span className="cd-info-icon">◷</span>
                <div>
                  <small>Duration</small>
                  <strong>{course.duration}</strong>
                </div>
              </div>

              <div className="cd-info-item">
                <span className="cd-info-icon">✦</span>
                <div>
                  <small>Level</small>
                  <strong>{course.level}</strong>
                </div>
              </div>
            </div>

            <div className="cd-hero-actions">
              <Link to="/contact" className="cd-primary-btn">
                Enquire Now <span>↗</span>
              </Link>

              <a href="#course-curriculum" className="cd-secondary-btn">
                View Curriculum ↓
              </a>
            </div>
          </div>

          <div className="cd-visual">
            <div className="cd-visual-orbit cd-orbit-one" />
            <div className="cd-visual-orbit cd-orbit-two" />

            <div className="cd-visual-card">
              <span className="cd-visual-label">GREAT MINDS TECHNOLOGY</span>
              <div className="cd-main-icon">{course.icon}</div>
              <h2>{course.title}</h2>
              <p>Learn. Practice. Grow.</p>

              <div className="cd-visual-bottom">
                <span>SKILL DEVELOPMENT</span>
                <span>✦</span>
              </div>
            </div>

            <span className="cd-floating-badge cd-badge-top">
              Practical Learning
            </span>
            <span className="cd-floating-badge cd-badge-bottom">
              Build Your Skills ✦
            </span>
          </div>
        </div>
      </section>

      <section className="cd-curriculum" id="course-curriculum">
        <div className="cd-container">
          <div className="cd-section-heading">
            <span className="cd-section-label">WHAT YOU WILL LEARN</span>
            <h2>
              Course <span>Curriculum</span>
            </h2>
            <p>
              Explore the important topics covered throughout your learning
              journey.
            </p>
          </div>

          <div className="cd-topic-grid">
            {course.topics.map((topic, index) => (
              <article className="cd-topic-card" key={topic}>
                <span className="cd-topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="cd-topic-check">✓</div>
                <h3>{topic}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cd-projects">
        <div className="cd-container cd-project-layout">
          <div className="cd-project-intro">
            <span className="cd-section-label">LEARN BY DOING</span>
            <h2>
              Turn Your Knowledge Into <span>Projects.</span>
            </h2>
            <p>
              Practice your skills through projects and build work that you can
              discuss in your portfolio.
            </p>

            <Link to="/contact" className="cd-primary-btn">
              Start Learning <span>↗</span>
            </Link>
          </div>

          <div className="cd-project-list">
            {course.projects.map((project, index) => (
              <article className="cd-project-item" key={project}>
                <div className="cd-project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="cd-project-text">
                  <span>PROJECT {index + 1}</span>
                  <h3>{project}</h3>
                </div>

                <span className="cd-project-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cd-bottom-cta">
        <div className="cd-container cd-cta-content">
          <div>
            <span className="cd-section-label">YOUR NEXT STEP STARTS HERE</span>
            <h2>Ready to Begin Your Learning Journey?</h2>
            <p>
              Contact Great Minds Technology to learn more about this course.
            </p>
          </div>

          <Link to="/contact" className="cd-primary-btn">
            Contact Us <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

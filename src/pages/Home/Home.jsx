import "./Home.css";

const courses = [
  {
    slug: "python-programming",
    icon: "🐍",
    title: "Python Programming",
    description:
      "Learn Python from basics to advanced with practical projects.",

    className: "python-card",
  },
  {
    slug: "data-analytics",
    icon: "📊",
    title: "Data Analytics",
    description: "Master Excel, SQL, Power BI and data visualization tools.",

    className: "analytics-card",
  },
  {
    slug: "web-development",
    icon: "💻",
    title: "Web Development",
    description: "Build modern websites using HTML, CSS, JavaScript and React.",

    className: "web-card",
  },
  {
    slug: "full-stack-development",
    icon: "⚙️",
    title: "Full Stack Development",
    description:
      "Become a complete developer with frontend and backend skills.",
    className: "fullstack-card",
  },
];

const benefits = [
  {
    icon: "⚙",
    title: "Practical Training",
    description: "Work on real-world projects and case studies.",
  },
  {
    icon: "♙",
    title: "Expert Trainers",
    description: "Learn from experienced training professionals.",
  },
  {
    icon: "🚀",
    title: "Career Guidance",
    description: "Get support for resumes, interviews and career preparation.",
  },
  {
    icon: "▦",
    title: "Flexible Learning",
    description: "Explore available online and offline learning options.",
  },
];

const journey = [
  ["▤", "1. Enroll", "Choose your course and get started."],
  ["▣", "2. Learn", "Attend interactive learning sessions."],
  ["</>", "3. Practice", "Work on practical projects."],
  ["▣", "4. Get Career-Ready", "Prepare for your next opportunity."],
];

export default function Home() {
  return (
    <div className="gmt-home">
      <div className="gmt-topbar">
        <span>Learn • Practice • Grow</span>
        <span>Build your future with Great Minds Technology</span>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className="gmt-hero">
          <div className="gmt-hero-overlay" />

          <div className="gmt-hero-content">
            <span className="gmt-pill">✦ &nbsp; LEARN • PRACTICE • GROW</span>

            <h1>
              Build Your Skills
              <br />
              for a <span>Better Future.</span>
            </h1>

            <p>
              Discover your potential with practical technology training. Learn
              new skills, build projects and prepare for your career with Great
              Minds Technology.
            </p>

            <div className="gmt-hero-buttons">
              <a href="/courses" className="gmt-btn gmt-btn-primary">
                Explore Courses <span>↗</span>
              </a>

              <a href="/about" className="gmt-btn gmt-btn-outline">
                <span className="gmt-play">▶</span>
                About Our Institute
              </a>
            </div>

            <div className="gmt-hero-features">
              <span>✦ Practical Learning</span>
              <i />
              <span>✦ Expert Guidance</span>
              <i />
              <span>✦ Career Preparation</span>
            </div>
          </div>

          <div className="gmt-hero-caption">
            <span>LEARN TODAY</span>
            <span>GROW TOMORROW ↗</span>
          </div>
        </section>

        {/* COURSES SECTION */}
        <section className="gmt-courses" id="courses">
          <div className="gmt-section-heading">
            <span className="courses-tag">WHAT YOU CAN LEARN</span>

            <h2>
              Explore Our <span>Courses</span>
            </h2>

            <p>
              Build your skills with industry-focused training and practical
              projects.
            </p>
          </div>

          <div className="gmt-course-grid">
            {courses.map((course) => (
              <article
                className={`gmt-course-card ${course.className}`}
                key={course.slug}
              >
                <div className="course-art">
                  <div className="course-orbit" />

                  <div className="course-icon">{course.icon}</div>

                  <span className="floating-code">{course.floating}</span>
                </div>

                <span className="course-label">{course.label}</span>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <a href={`/courses/${course.slug}`} className="course-link">
                  Learn More <span>⟶</span>
                </a>

                <div className="course-wave" />
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="gmt-why">
          <div className="gmt-why-image-wrap">
            <div className="gmt-image-decoration" />

            <img
              src="/Hero2.png"
              alt="Students learning and collaborating"
              className="gmt-why-image"
              loading="lazy"
            />

            <div className="gmt-image-note">
              <span>✦</span>

              <div>
                <strong>Learn Together</strong>
                <small>Build skills with confidence</small>
              </div>
            </div>
          </div>

          <div className="gmt-why-content">
            <span className="gmt-label">WHY CHOOSE US</span>

            <h2>
              Your Success
              <br />
              Is Our <span>Priority.</span>
            </h2>

            <p className="gmt-why-description">
              We focus on practical learning, personal guidance and skill
              development to help you move forward with confidence.
            </p>

            <div className="gmt-benefits-grid">
              {benefits.map((benefit) => (
                <article className="gmt-benefit" key={benefit.title}>
                  <div className="gmt-benefit-icon">{benefit.icon}</div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="gmt-stats">
          <div>
            <span className="gmt-stat-icon">♧</span>
            <div>
              <strong>Practical</strong>
              <small>Learning Focus</small>
            </div>
          </div>

          <div>
            <span className="gmt-stat-icon">▣</span>
            <div>
              <strong>Project-Based</strong>
              <small>Skill Development</small>
            </div>
          </div>

          <div>
            <span className="gmt-stat-icon">☆</span>
            <div>
              <strong>Career-Focused</strong>
              <small>Learning Approach</small>
            </div>
          </div>

          <div>
            <span className="gmt-stat-icon">♧</span>
            <div>
              <strong>Student-First</strong>
              <small>Guidance & Support</small>
            </div>
          </div>
        </section>

        {/* LEARNING JOURNEY */}
        <section className="gmt-journey">
          <div className="gmt-journey-heading">
            <span className="gmt-label">YOUR LEARNING JOURNEY</span>

            <h2>From Learning to Career</h2>

            <p>Take your next step, one skill at a time.</p>
          </div>

          <div className="gmt-journey-grid">
            {journey.map(([icon, title, description], index) => (
              <div className="gmt-journey-item" key={title}>
                <div className="gmt-journey-icon">{icon}</div>

                <h3>{title}</h3>
                <p>{description}</p>

                {index !== journey.length - 1 && (
                  <span className="gmt-journey-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="gmt-cta">
          <div className="gmt-cta-icon">➤</div>

          <div className="gmt-cta-copy">
            <h2>Ready to Start Your Learning Journey?</h2>

            <p>
              Take the first step towards learning new skills and building your
              future.
            </p>
          </div>

          <a href="/contact">
            Contact Us <span>→</span>
          </a>
        </section>
      </main>
    </div>
  );
}

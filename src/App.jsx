import { useState } from 'react';
import {
  FaArrowRight,
  FaDownload,
  FaGraduationCap,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaXmark,
} from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import './App.css';
import brandMark from './assets/wa-mark.svg';
import myImg from './img/Wondie_blk_bg.png';
import htmlIcon from './img/html-5.png';
import cssIcon from './img/css-3.png';
import javascriptIcon from './img/js.png';
import reactIcon from './img/react-js.png';
import nodeIcon from './img/node-js.png';
import bootstrapIcon from './img/bs.webp';
import mysqlIcon from './img/mysql.png';
import gitIcon from './img/git.png';
import githubIcon from './img/github.png';
import certificateImage from './img/fullstack certificate.jpg';
import evangadiImage from './img/Evangadi-Forum.jpg';

const navigation = [
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

const skills = [
  ['HTML', htmlIcon],
  ['CSS', cssIcon],
  ['JavaScript', javascriptIcon],
  ['React', reactIcon],
  ['Node.js', nodeIcon],
  ['Bootstrap', bootstrapIcon],
  ['MySQL', mysqlIcon],
  ['Git', gitIcon],
  ['GitHub', githubIcon],
];

const projects = [
  {
    name: 'Evangadi Forum',
    category: 'AI FORUM · FULL STACK',
    description:
      'A developer Q&A community with semantic search, document-grounded answers, and discussion rooms.',
    image: evangadiImage,
    imageAlt: 'Evangadi Forum question and answer interface',
    tags: ['Semantic search', 'Course RAG', 'AI assistant'],
    stack: 'React · Node.js · Express · MySQL · Gemini',
    repository: 'https://github.com/wondiferaw/Evangadi-Forum',
    demo: 'https://evangadi-forum-kappa.vercel.app/',
  },
  {
    name: 'ChatGPT Clone',
    category: 'AI CHAT · FULL STACK',
    description:
      'A conversational AI experience with saved chat history and a familiar, responsive interface.',
    tags: ['Chat history', 'AI responses', 'Responsive UI'],
    stack: 'React · Node.js · Express · MySQL',
    repository: 'https://github.com/wondiferaw/Cloning-of-ChatGPT',
    demo: 'https://wondiechat-gpt-clone.vercel.app/',
    preview: 'chat',
  },
  {
    name: 'netflix-clone',
    category: 'STREAMING · FRONT END',
    description:
      'A responsive movie and TV discovery experience with featured titles and browsable collections.',
    image:
      'https://raw.githubusercontent.com/wondiferaw/netflix-clone/main/src/assets/image/banner.jpeg',
    imageAlt: 'Featured title on the netflix-clone movie discovery interface',
    tags: ['TMDB powered', 'Movie carousels', 'Responsive'],
    stack: 'React · Vite · TMDB API · Swiper',
    repository: 'https://github.com/wondiferaw/netflix-clone',
    demo: 'https://netflix-clone-rust-zeta.vercel.app/',
    preview: 'streaming',
  },
];

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:wondiferaw.asmare@gmail.com',
    icon: <IoMailOutline aria-hidden="true" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wondiferaw-asmare-alemu/',
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/wondiferaw',
    icon: <FaGithub aria-hidden="true" />,
  },
];

function ProjectPreview({ project }) {
  if (project.preview === 'chat') {
    return (
      <div className="project-preview project-preview--chat" aria-label="ChatGPT Clone preview">
        <div className="chat-preview-sidebar">
          <span className="chat-preview-logo">✳</span>
          <span className="chat-preview-new">＋ New chat</span>
          <i />
          <i />
          <i />
        </div>
        <div className="chat-preview-main">
          <span className="chat-preview-message">Help me build a React app</span>
          <p><span>✳</span> Sure! Let's start with a clean component structure...</p>
          <div className="chat-preview-input">Message ChatGPT <span>↑</span></div>
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className={`project-preview ${project.preview === 'streaming' ? 'project-preview--streaming' : ''}`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        {project.preview === 'streaming' && <span className="streaming-label">NETFLIX CLONE</span>}
      </div>
    );
  }

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Wondiferaw Asmare, home">
            <img className="brand-mark" src={brandMark} alt="" />
            <span>Wondiferaw Asmare</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          <nav
            className={`primary-navigation ${menuOpen ? 'primary-navigation--open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map(([label, target]) => (
              <a key={target} href={`#${target}`} onClick={closeMenu}>{label}</a>
            ))}
          </nav>

          <div className="header-socials" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Building thoughtful digital experiences.</h1>
            <p className="hero-intro">
              I&apos;m <strong>Wondiferaw Asmare</strong>, a full-stack developer creating
              user-friendly web applications from idea to launch.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <FaArrowRight aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="mailto:wondiferaw.asmare@gmail.com">
                Get in touch
              </a>
              <a
                className="button button-secondary resume-button"
                href="https://drive.google.com/uc?export=download&id=1wiCuOioi-gXPu5ovdLWZRzSAWOx-ocDE"
                target="_blank"
                rel="noreferrer"
              >
                <FaDownload aria-hidden="true" /> Download resume
              </a>
            </div>
            <div className="hero-socials">
              {socialLinks.slice(1).map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {icon}<span>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img src={myImg} alt="Portrait of Wondiferaw Asmare" />
            </div>
            <div className="hero-note">
              <span className="hero-note-mark">✳</span>
              <span><strong>Full-stack developer</strong><small>Web · Mobile · UI</small></span>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br />Developer by craft.</h2>
          </div>
          <div className="about-copy">
            <p>
              I build useful, reliable digital products across web and mobile. My work
              spans frontend interfaces, backend services, and the details that make
              software feel clear and effortless to use.
            </p>
            <p>
              I enjoy learning through collaboration and turning complex ideas into
              simple, thoughtful experiences. From designing an interface to building
              the systems behind it, I care about making every part work well together.
            </p>
            <a className="text-link" href="mailto:wondiferaw.asmare@gmail.com">
              Let&apos;s work together <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">SELECTED WORK</p>
                <h2>Projects I&apos;m proud of.</h2>
              </div>
              <a className="text-link" href="https://github.com/wondiferaw" target="_blank" rel="noreferrer">
                More on GitHub <FaArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <ProjectPreview project={project} />
                  <div className="project-card-content">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tags" aria-label={`${project.name} highlights`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <p className="project-stack"><strong>Stack</strong>{project.stack}</p>
                    <div className="project-links">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live demo <FaArrowRight aria-hidden="true" />
                        </a>
                      )}
                      <a href={project.repository} target="_blank" rel="noreferrer">
                        <FaGithub aria-hidden="true" /> Source code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section skills-section section-shell" id="skills">
          <div className="section-heading">
            <p className="eyebrow">TOOLS OF THE TRADE</p>
            <h2>Skills &amp; technologies.</h2>
            <p className="section-description">
              A practical toolkit for taking ideas from interface to implementation.
            </p>
          </div>
          <ul className="skills-grid">
            {skills.map(([name, image]) => (
              <li className="skill-card" key={name}>
                <img src={image} alt="" loading="lazy" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="education-section" id="education">
          <div className="section-shell education-layout">
            <div className="section-heading">
              <p className="eyebrow">BACKGROUND</p>
              <h2>Education &amp; Experience</h2>
              <p className="section-description">
                A foundation in engineering, complemented by focused training in full-stack web development.
              </p>
            </div>
            <div className="education-items">
              <article className="education-card degree-card">
                <div className="education-icon"><FaGraduationCap aria-hidden="true" /></div>
                <div>
                  <p className="project-category">MASTER&apos;S DEGREE</p>
                  <h3>M.Sc. Power System Engineering</h3>
                  <p className="education-institution">Bahir Dar University, Ethiopia</p>
                  <p className="education-date">Graduated June 2024 <span>(2016 E.C.)</span></p>
                </div>
              </article>
              <article className="education-card degree-card">
                <div className="education-icon"><FaGraduationCap aria-hidden="true" /></div>
                <div>
                  <p className="project-category">BACHELOR&apos;S DEGREE</p>
                  <h3>B.Sc. Electrical Engineering</h3>
                  <p className="education-institution">Bahir Dar University, Ethiopia</p>
                  <p className="education-date">Graduated June 2017 <span>(2009 E.C.)</span></p>
                </div>
              </article>
              <article className="education-card certificate-card">
                <img src={certificateImage} alt="AI Powered Fullstack Application Development certificate" loading="lazy" />
                <div>
                  <p className="project-category">PROFESSIONAL TRAINING</p>
                  <h3>AI Powered Fullstack Application Development</h3>
                  <p>Evangadi · MERN program</p>
                  <p className="education-date">Completed October 2026</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let&apos;s make something meaningful.</h2>
              <p>
                Have a role, a project, or an idea you&apos;d like to discuss? Send me a
                note and I&apos;ll get back to you.
              </p>
              <a className="contact-email" href="mailto:wondiferaw.asmare@gmail.com">
                <IoMailOutline aria-hidden="true" /> wondiferaw.asmare@gmail.com
              </a>
            </div>
            <form className="contact-form" action="https://formsubmit.co/wondiferaw.asmare@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New portfolio message" />
              <label>
                Your name
                <input type="text" name="name" autoComplete="name" placeholder="Jane Smith" required />
              </label>
              <label>
                Email address
                <input type="email" name="email" autoComplete="email" placeholder="jane@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Tell me a little about what you have in mind..." required />
              </label>
              <button className="button button-primary" type="submit">
                Send message <FaArrowRight aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand" href="#home">
            <img className="brand-mark" src={brandMark} alt="" />
            <span>Wondiferaw Asmare</span>
          </a>
          <p>© {new Date().getFullYear()} Wondiferaw Asmare. Built with care.</p>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

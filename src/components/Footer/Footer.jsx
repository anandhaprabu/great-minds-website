import logo from '../../assets/logo.jpeg';
import './Footer.css';
export default function Footer(){return <footer className="site-footer"><div className="section-wrap footer-main"><a href="/" className="footer-brand"><img src={logo} alt="Great Minds — Way to Go"/></a><p>Learn with purpose. Grow with confidence.</p><a className="footer-top" href="#top">Back to top ↑</a></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Great Minds Technology</span><span>Way to Go...</span></div></footer>}

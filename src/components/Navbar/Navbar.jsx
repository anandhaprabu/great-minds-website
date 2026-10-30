import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.jpeg';
import './Navbar.css';
const links = [['Home','/'],['About Us','/about'],['Courses','/courses'],['Careers','/careers'],['Contact','/contact']];
export default function Navbar(){ const [open,setOpen]=useState(false); return <header className="site-header"><a href="/" className="brand" aria-label="Great Minds home"><img src={logo} alt="Great Minds — Way to Go" /></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</button><nav className={open?'nav nav-open':'nav'}>{links.map(([label,url])=><a key={url} href={url} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Enquire now <ArrowRight size={16}/></a></nav></header> }

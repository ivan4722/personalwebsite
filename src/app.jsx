import React from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Router>
      <Seo />
      <div className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
        <div className="social-links">
          {/* GitHub link with image */}
          <motion.a
            href="https://github.com/ivan4722"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: 'inline-block' }}
          >
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="social-icon"
              width="50px"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          {/* LinkedIn link with image */}
          <motion.a
            href="https://linkedin.com/in/ivanxiong4722"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: 'inline-block' }}
          >
            <motion.img
              src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
              alt="LinkedIn"
              className="social-icon"
              width="50px"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
        </div>
      </div>
      <footer className="sticky-footer">
        <div className="links">
          <Link href="/" style={{ color: 'white' }}>Home</Link>
          <span className="divider">|</span>
          <Link href="/projects" style={{ color: 'white' }}>Projects</Link> 
          <span className="divider">|</span>
          <Link href="/skills" style={{ color: 'white' }}>Skills</Link>
        </div>
      </footer>
    </Router>
  );
}

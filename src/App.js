import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Brain, Globe, Cpu, User, Mail, Zap, Terminal, Code, Smartphone, Recycle, GraduationCap, MapPin, Award, ExternalLink } from 'lucide-react';

// --- STYLES ---
const projectCardStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  borderRadius: '24px',
  border: '1px solid rgba(0, 242, 255, 0.08)',
  backdropFilter: 'blur(20px)',
  transition: '0.4s ease',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const certCardStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '20px',
  textAlign: 'center',
  transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  cursor: 'pointer',
};

// --- BRAND ICONS (SVG) ---
const GithubSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const YoutubeSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // --- DATA (Sequence Fixed) ---
  const projectList = [
    { title: "Fake Product Review Detection", tag: "AI / ML", desc: "NLP engine detecting fake reviews with high-precision deep learning.", video: "/videos/fakereview.mp4", github: "https://github.com/LukkaSanjay/fake-product-review-detection", icon: <Brain size={30} color="#00f2ff" /> },
    { title: "Online Complaint System", tag: "MERN STACK", desc: "Real-time grievance management portal with automated response systems.", video: "/videos/complaint.mp4", github: "https://github.com/LukkaSanjay/online-complaint-registration-and-management-system", icon: <Globe size={30} color="#00f2ff" /> },
    { title: "Food Waste Management", tag: "COMMUNITY SERVICE", desc: "Smart strategy platform for waste reduction and sustainable redistribution.", video: "/videos/foodwaste.mp4", github: "https://github.com/LukkaSanjay/food-waste-management", icon: <Recycle size={30} color="#00f2ff" /> },
    { title: "Blockchain Voting System", tag: "BLOCKCHAIN", desc: "Decentralized voting protocol using Ethereum smart contracts.", video: "/videos/blockchain.mp4", github: "https://github.com/SanjayLukka", icon: <Shield size={30} color="#00f2ff" /> },
    { title: "Sustainable SmartCity", tag: "URBAN TECH", desc: "IoT-driven framework for sustainable urban resource management.", video: "/videos/smartcity.mp4", github: "https://github.com/LukkaSanjay/sustainable-smart-city", icon: <Cpu size={30} color="#00f2ff" /> },
    { title: "SnapLoad Pro", tag: "MEDIA UTILITY", desc: "High-speed video downloader engine built for seamless content retrieval.", video: "/videos/snapload.mp4", github: "https://github.com/SanjayLukka", icon: <Zap size={30} color="#00f2ff" /> }
  ];

  // --- 6 CERTIFICATES DATA ---
  const certList = [
    { name: "Databases for Devlopers Foundations", issuer: "Oracle", image: "/certs/oracle.jpeg" },
    { name: "Generative AI With IBM Cloud", issuer: "Smart Bridge", image: "/certs/genai.jpeg" },
    { name: "Full Stack Development(MERN)", issuer: "Smart Bridge", image: "/certs/mern.jpeg" },
    { name: "Python Course", issuer: "Udemy", image: "/certs/ml.jpeg" },
    { name: "AWS Cloud Practitioner Essential", issuer: "Simple Learn", image: "/certs/aws.jpeg" },
    { name: "Next Talent Course On Database Solutions", issuer: "Wipro", image: "/certs/wipro.jpeg" },
  ];

  return (
    <div style={{ backgroundColor: '#010101', minHeight: '200vh', width: '100vw', color: 'white', fontFamily: 'Inter, sans-serif', overflowX: 'hidden', scrollBehavior: 'smooth' }}>
      
      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: '30px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', padding: '12px 30px', borderRadius: '100px', display: 'flex', gap: '25px', zIndex: 100, border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        {['Home', 'About', 'YouTube', 'Artifacts', 'Certificates', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.6, cursor: 'pointer', textDecoration: 'none', color: 'white' }}>{item}</a>
        ))}
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <motion.div style={{ y: y1, position: 'absolute', zIndex: 0, width: '100%', height: '120%', backgroundImage: `url('sanjay_hero.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) brightness(0.4) contrast(1.1)', opacity: 0.5 }} />
        <motion.div style={{ y: y2, zIndex: 1 }}>
          <motion.h1 initial={{ opacity: 0, letterSpacing: '20px' }} animate={{ opacity: 1, letterSpacing: '-4px' }} transition={{ duration: 1.5 }} style={{ fontSize: 'clamp(3rem, 15vw, 8.5rem)', fontWeight: '950', margin: 0 }}>SANJAY LUKKA</motion.h1>
          <p style={{ letterSpacing: '12px', color: '#00f2ff', textTransform: 'uppercase', fontSize: '0.85rem', marginTop: '20px', fontWeight: '300' }}>Full Stack Developer And Content Creator</p>
          <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,242,255,0.5)', backgroundColor: '#00f2ff', color: '#000' }} onClick={() => window.open('/resume.pdf', '_blank')} style={{ marginTop: '50px', padding: '18px 50px', background: 'transparent', border: '1px solid #00f2ff', color: '#00f2ff', borderRadius: '100px', cursor: 'pointer', letterSpacing: '3px', fontSize: '0.75rem', fontWeight: 'bold', transition: '0.3s' }}>RESUME</motion.button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{ padding: '120px 10%', background: '#020202' }}>
        <div style={{ opacity: 0.4, letterSpacing: '5px', marginBottom: '40px', fontSize: '0.8rem' }}>BIOGRAPHICAL DATA</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', lineHeight: 1.1, marginBottom: '30px' }}>I live at the intersection of <span style={{ color: '#00f2ff' }}>logic</span> and <span style={{ color: '#00f2ff' }}>creativity.</span></h2>
            <p style={{ opacity: 0.5, lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px' }}>I am Lukka Sanjay, a final-year Information Technology student at<strong>Seshadri Gudlavalleru Engineering College</strong>. My expertise lies in architecting scalable digital solutions ranging from Full-Stack MERN applications and Blockchain-based governance systems to high-precision AI/ML models for NLP tasks.

Beyond the terminal, I am the creative mind behind 'Cinema Bagundali', where I leverage my technical lens to deconstruct cinematic storytelling. Whether it’s training a neural engine or producing high-end digital content, my goal is to design experiences that feel like the future. I am currently seeking opportunities to bridge the gap between emerging technology and impactful user experiences.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', opacity: 0.7 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="#00f2ff"/> Gudlavalleru, AP</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><GraduationCap size={18} color="#00f2ff"/> B.Tech IT (Final Year)</div>
            </div>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[{ icon: <Terminal size={20} />, label: 'Development', detail: 'MERN Stack' }, { icon: <Brain size={20} />, label: 'AI & ML', detail: 'NLP / Python' }, { icon: <Zap size={20} />, label: 'Web3', detail: 'Blockchain' }, { icon: <Code size={20} />, label: 'Scripting', detail: 'Automated Tools' }].map((skill, i) => (
              <motion.div key={i} whileHover={{ y: -5, background: 'rgba(0,242,255,0.05)' }} style={{ padding: '30px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: '#00f2ff', marginBottom: '15px' }}>{skill.icon}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{skill.label}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.4, marginTop: '5px' }}>{skill.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section id="youtube" style={{ padding: '100px 10%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <YoutubeSVG /> <h2 style={{ fontSize: '1.2rem', letterSpacing: '5px', opacity: 0.5 }}>CINEMATIC CHANNEL</h2>
        </div>
        <motion.div whileHover={{ borderColor: 'rgba(255,0,0,0.5)', scale: 1.01 }} style={{ position: 'relative', background: 'rgba(255,255,255,0.01)', padding: '80px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', backdropFilter: 'blur(10px)', overflow: 'hidden' }}>
          <video src="/videos/youtube_demo.mp4" autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.15, filter: 'grayscale(100%)' }} />
          <h3 style={{fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: '900', letterSpacing: '-1px', margin: 0}}>CINEMA BAGUNDALI</h3>
          <p style={{ opacity: 0.4, maxWidth: '650px', margin: '20px auto', lineHeight: '1.8', fontSize: '1.1rem' }}>Deconstructing stories with a technical lens.</p>
          <button onClick={() => window.open('https://www.youtube.com/@CinemaBagundali', '_blank')} style={{ padding: '20px 60px', background: 'red', border: 'none', color: '#fff', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', letterSpacing: '2px', marginTop: '20px' }}>SUBSCRIBE</button>
        </motion.div>
      </section>

      {/* CERTIFICATIONS SECTION (PROPER 6 CARDS) */}
      <section id="certificates" style={{ padding: '100px 10%', background: '#010101' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '50px' }}>
          <Award size={24} color="#00f2ff" />
          <h2 style={{ opacity: 0.4, letterSpacing: '5px', margin: 0 }}>VERIFIED CREDENTIALS</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {certList.map((cert, index) => (
            <motion.div 
              key={index}
              whileHover={{ 
                y: -12, 
                borderColor: '#00f2ff', 
                boxShadow: '0 15px 35px rgba(0,242,255,0.15)',
                background: 'rgba(0, 242, 255, 0.02)' 
              }}
              style={certCardStyle}
            >
              <div style={{ width: '100%', height: '190px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.8 }} />
              </div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '1.15rem', fontWeight: '800' }}>{cert.name}</h4>
              <p style={{ opacity: 0.4, fontSize: '0.8rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ARTIFACTS SECTION */}
      <section id="artifacts" style={{ padding: '100px 10%' }}>
        <h2 style={{ opacity: 0.4, letterSpacing: '5px', marginBottom: '50px' }}> PROJECT ARCHIVE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {projectList.map((project, index) => (
            <motion.div key={index} whileHover={{ y: -12, borderColor: 'rgba(0,242,255,0.4)' }} style={projectCardStyle}>
              <div style={{ height: '260px', width: '100%', position: 'relative', overflow: 'hidden', background: '#050505' }}>
                <video src={project.video} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
                <div onClick={() => window.open(project.github, '_blank')} style={{ position: 'absolute', top: '25px', right: '25px', background: 'rgba(0,0,0,0.8)', padding: '12px', borderRadius: '50%', cursor: 'pointer', border: '1px solid rgba(0,242,255,0.3)', backdropFilter: 'blur(10px)' }}>
                  <GithubSVG />
                </div>
              </div>
              <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.9rem', margin: 0, fontWeight: '900' }}>{project.title}</h3>
                  {project.icon}
                </div>
                <p style={{ opacity: 0.4, fontSize: '1rem', marginTop: '18px', lineHeight: '1.7' }}>{project.desc}</p>
                <div style={{ marginTop: '30px' }}>
                   <span style={{ fontSize: '0.65rem', border: '1px solid #00f2ff', padding: '7px 18px', borderRadius: '50px', color: '#00f2ff', fontWeight: 'bold', letterSpacing: '1px' }}>{project.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ padding: '120px 100px', textAlign: 'center', opacity: 0.4 }}>
        <div style={{display:'flex', justifyContent:'center', gap:'40px', marginBottom:'40px'}}>
           <motion.div whileHover={{color:'#00f2ff', scale: 1.2}} onClick={()=>window.open('https://github.com/LukkaSanjay')} style={{cursor:'pointer'}}><GithubSVG /></motion.div>
           <motion.div whileHover={{color:'#00f2ff', scale: 1.2}} style={{cursor:'pointer'}}><Mail size={24}/></motion.div>
           <motion.div whileHover={{color:'#00f2ff', scale: 1.2}} style={{cursor:'pointer'}}><User size={24}/></motion.div>
        </div>
        <p style={{ fontSize: '0.75rem', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: '300' }}>SANJAY LUKKA © 2026 // SYSTEM_ONLINE</p>
      </footer>
    </div>
  );
}

export default App;
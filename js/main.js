// ═══ MOBILE MENU ═══
function toggleMenu(){
  document.getElementById('sidebar').classList.toggle('open');
}
document.addEventListener('click',function(e){
  const sb=document.getElementById('sidebar');
  const btn=document.getElementById('menu-toggle');
  if(sb.classList.contains('open')&&!sb.contains(e.target)&&!btn.contains(e.target)){
    sb.classList.remove('open');
  }
});

emailjs.init("YOUR_PUBLIC_KEY");

document.querySelector('.btn-sub').addEventListener('click', function(){
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name:    document.querySelector('input[placeholder="John Doe"]').value,
    from_email:   document.querySelector('input[type="email"]').value,
    subject:      document.querySelector('input[placeholder="Project discussion..."]').value,
    message:      document.querySelector('textarea').value,
  }).then(()=> alert('Message sent!'))
    .catch(()=> alert('Something went wrong.'));
});

// ═══ PROJECTS DATA ═══
const projects = [
  {
    name:'MediBook – Medical Booking System',cat:'Web Development',client:'Personal Project',start:'Jan 2025',end:'Mar 2025',
    link:'https://github.com/Tarekattallah',
    desc:'A full-stack medical appointment booking system built with React.js, Node.js, Express, and MongoDB. Features doctor listings, patient registration, appointment scheduling, and an admin dashboard.',
    // ── IMAGE NAMES: port-slide-0-0, port-slide-0-1, port-slide-0-2 ──
    slides:[
      '../images/Blog header image for _MediBook – Medical Booking System_ - featuring medical appointment scheduling interface, calendar with medical appointments, doctor and patient icons, healthcare app design, stethoscope,  (1).jpg',
      '../images/Blog header image for _MediBook – Medical Booking System_ - featuring medical appointment scheduling interface, calendar with medical appointments, doctor and patient icons, healthcare app design, stethoscope,  (2).jpg',
      '../images/Blog header image for _MediBook – Medical Booking System_ - featuring medical appointment scheduling interface, calendar with medical appointments, doctor and patient icons, healthcare app design, stethoscope, medi.jpg'
    ]
  },
  {
    name:'Personal Portfolio Website',cat:'Web Development',client:'Self',start:'Mar 2025',end:'Apr 2025',
    link:'#',desc:'A responsive personal portfolio built with pure HTML, CSS, and JavaScript. Features animated hero background, typed text effect, skill bars, timeline resume, and portfolio filter.',
    // ── IMAGE NAMES: port-slide-1-0, port-slide-1-1, port-slide-1-2 ──
    slides:[
      '../images/img-9.png',
      '../images/Blog header image for _Personal Portfolio Website_ - featuring modern portfolio website design, laptop displaying portfolio layout, developer workspace, code editor, design mockups, personal branding elements,  (1).jpg',
      '../images/Blog header image for _Personal Portfolio Website_ - featuring modern portfolio website design, laptop displaying portfolio layout, developer workspace, code editor, design mockups, personal branding elements, resu.jpg'
    ]
  },
  {
    name:'Task Manager App (CRUD)',cat:'Web Development',client:'Freelance',start:'Nov 2024',end:'Dec 2024',
    link:'https://github.com/tarekattallah',
    desc:'A CRUD task management application with user authentication, priority levels, due dates, and status tracking. Built with Node.js, Express, MongoDB, and vanilla JS frontend.',
    // ── IMAGE NAMES: port-slide-2-0, port-slide-2-1, port-slide-2-2 ──
    slides:[
      '../images/Blog header image for _Task Manager App (CRUD)_ - featuring task management interface, to-do list with checkboxes, CRUD operations icons (create, read, update, delete), productivity dashboard, task cards, check (1).jpg',
      '../images/Blog header image for _Task Manager App (CRUD)_ - featuring task management interface, to-do list with checkboxes, CRUD operations icons (create, read, update, delete), productivity dashboard, task cards, check (2).jpg',
      '../images/Blog header image for _Task Manager App (CRUD)_ - featuring task management interface, to-do list with checkboxes, CRUD operations icons (create, read, update, delete), productivity dashboard, task cards, checklist.jpg'
    ]
  },
  {
    name:'REST API Project',cat:'API',client:'Freelance',start:'Aug 2024',end:'Sep 2024',
    link:'https://github.com/tarekattallah',
    desc:'A clean RESTful API built with Node.js and Express. Implements JWT authentication, role-based access control, input validation, error handling, and follows REST best practices.',
    // ── IMAGE NAMES: port-slide-3-0, port-slide-3-1, port-slide-3-2 ──
    slides:[
      '../images/img-4.jpg',
      '../images/img-2.jpg',
      '../images/img-3.jpg'
    ]
  },
  {
    name:'Scratch Game (CS50 Project)',cat:'MISC',client:'CS50 Harvard',start:'Jun 2024',end:'Jul 2024',
    link:'https://github.com/tarekattallah',
    desc:'An interactive game built as part of the CS50 Introduction to Computer Science course. Demonstrates core programming concepts using Scratch visual programming language.',
    // ── IMAGE NAMES: port-slide-4-0, port-slide-4-1, port-slide-4-2 ──
    slides:[
      '../images/Scratch programming game interface from CS50 project, showing colorful block-based coding environment with sprite characters, stage area with game elements, code blocks on the left side, and a playful education (1).jpg',
      '../images/Scratch programming game interface from CS50 project, showing colorful block-based coding environment with sprite characters, stage area with game elements, code blocks on the left side, and a playful educational g.jpg',
      '../images/Scratch programming game interface from CS50 project, showing colorful block-based coding environment with sprite characters, stage area with game elements, code blocks on the left side, and a playful education (3).jpg'
    ]
  }
];

// ═══ SERVICES DATA ═══
const services = [
  {icon:'fas fa-laptop-code',name:'Web Development',img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80',body:'Full-stack web development using modern technologies including React.js for frontend, Node.js and Express for backend, and MongoDB for database management. I build scalable, performant, and maintainable applications tailored to your business needs.'},
  {icon:'fas fa-plug',name:'Building REST APIs',img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',body:'Designing and building clean, well-documented RESTful APIs using Node.js and Express. I follow best practices including proper HTTP methods, status codes, authentication with JWT, and API versioning.'},
  {icon:'fas fa-mobile-alt',name:'Responsive Website Design',img:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',body:'Pixel-perfect, mobile-first responsive designs that look and work beautifully across all screen sizes — from smartphones to desktops. Using modern CSS techniques including Flexbox, Grid, and media queries.'},
  {icon:'fas fa-bug',name:'Fixing Bugs & Code Optimization',img:'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80',body:'Debugging existing codebases, identifying performance bottlenecks, and refactoring messy code into clean, maintainable solutions. I analyze your codebase and improve application speed, reliability, and developer experience.'},
  {icon:'fas fa-cloud-upload-alt',name:'Deploying Applications',img:'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&q=80',body:'Deployment of web applications using modern platforms including Vercel, Render, Railway, or VPS servers with Docker containerization. I set up CI/CD pipelines, configure environment variables, and manage domains and SSL.'},
  {icon:'fab fa-git-alt',name:'Version Control Setup',img:'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=900&q=80',body:'Setting up professional Git workflows, branching strategies (GitFlow, trunk-based development), and GitHub repositories for solo developers and teams. Includes configuring hooks, PR templates, and documentation.'}
];

// ═══ BLOG DATA ═══
const blogs = [
  {img:'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',cat:'DevOps',date:'Apr 10, 2026',title:'Getting Started with Docker for Developers',body:'A beginner-friendly guide to containerizing your applications with Docker and DevOps workflows. Docker allows you to package your application with all its dependencies into a container, ensuring it runs consistently across different environments. In this guide, we\'ll cover the basics of Docker, how to write a Dockerfile, and how to use Docker Compose to manage multi-container applications. Whether you\'re a junior developer or an experienced engineer, mastering Docker will significantly improve your development workflow and deployment process.'},
  {img:'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',cat:'Backend',date:'Mar 5, 2026',title:'Building REST APIs with Node.js and Express',body:'Step-by-step tutorial on creating clean, well-structured, and documented REST APIs. REST is the most widely used architecture for web APIs. In this post, we walk through setting up Express, designing routes, handling middleware, implementing JWT authentication, and documenting your API with Swagger. By the end, you\'ll have a fully functioning and secure API ready for production.'},
  {img:'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',cat:'Linux',date:'Feb 18, 2026',title:'Linux Essentials Every Developer Should Know',body:'The most important Linux commands and concepts every modern developer needs daily. From navigating the file system and managing permissions to writing shell scripts and using package managers, Linux proficiency is a foundational skill for any developer — especially those interested in DevOps, cloud, or server-side development. This guide covers the top 30 commands you should know by heart.'}
];

// ═══ PAGE NAVIGATION ═══
function goPage(pageId){
  document.querySelectorAll('.page').forEach(p=>{p.classList.remove('active');p.classList.remove('page-transition')});
  const target=document.getElementById(pageId)||document.getElementById('home');
  target.classList.add('active');
  void target.offsetWidth; // reflow
  target.classList.add('page-transition');
  document.querySelectorAll('.sb-nav a').forEach(a=>{
    a.classList.remove('active');
    if(a.dataset.page===pageId)a.classList.add('active');
  });
  window.scrollTo({top:0,behavior:'smooth'});
  if(pageId==='home'||!pageId){setTimeout(()=>{triggerReveals();triggerSkills();triggerCounters();},100);}
  document.getElementById('sidebar').classList.remove('open');
}

function goServiceDetail(idx){
  const s=services[idx];
  const el=document.getElementById('srv-detail-img');
  // ── IMAGE NAME: srv-detail-{idx} ── shows service image from URL, replace URL with local file
  el.innerHTML=`<img src="${s.img}" alt="${s.name}" style="width:100%;height:100%;object-fit:cover">`;
  document.getElementById('srv-detail-title').textContent=s.name;
  document.getElementById('srv-detail-body').textContent=s.body;
  goPage('service-detail-page');
}

function goPortDetail(idx){
  currentPortIdx=idx;currentSlideIdx=0;
  const p=projects[idx];
  const slidesEl=document.getElementById('port-slides');
  slidesEl.innerHTML=p.slides.map((src,i)=>
    `<div class="port-detail-slide"><img src="${src}" alt="Slide ${i+1}" style="width:100%;height:100%;object-fit:cover"></div>`
  ).join('');
  slidesEl.style.transform='translateX(0)';
  document.getElementById('port-detail-title').textContent=p.name;
  document.getElementById('port-detail-desc').textContent=p.desc;
  document.getElementById('port-meta-cat').textContent=p.cat;
  document.getElementById('port-meta-client').textContent=p.client;
  document.getElementById('port-meta-start').textContent=p.start;
  document.getElementById('port-meta-end').textContent=p.end;
  document.getElementById('port-meta-link').innerHTML=`<a href="${p.link}" target="_blank">${p.link}</a>`;

  // ── Update share links for this project ──
  const shareUrl = p.link && p.link !== '#' ? p.link : window.location.href;
  const shareTitle = encodeURIComponent(p.name);
  const shareText = encodeURIComponent(p.name + ' – ' + p.desc.slice(0,80) + '…');
  document.getElementById('share-fb').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  document.getElementById('share-tw').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`;
  document.getElementById('share-li').href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  document.getElementById('share-wa').href = `https://wa.me/?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`;
  document.getElementById('share-copy').onclick = function(e){
    e.preventDefault();
    navigator.clipboard.writeText(shareUrl).then(()=>{
      const copied = document.getElementById('share-copied');
      copied.style.opacity='1';
      setTimeout(()=>copied.style.opacity='0', 2000);
    }).catch(()=>{
      // Fallback for older browsers
      const ta=document.createElement('textarea');ta.value=shareUrl;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);
      const copied=document.getElementById('share-copied');copied.style.opacity='1';setTimeout(()=>copied.style.opacity='0',2000);
    });
  };

  goPage('portfolio-detail-page');
}

function portSlide(dir){
  const p=projects[currentPortIdx];
  currentSlideIdx=(currentSlideIdx+dir+p.slides.length)%p.slides.length;
  document.getElementById('port-slides').style.transform=`translateX(-${currentSlideIdx*100}%)`;
}

function goBlogDetail(idx){
  const b=blogs[idx];
  const imgEl=document.getElementById('blog-detail-img');
  // ── IMAGE NAME: blog-detail-img-{idx} ── replace src with local file
  imgEl.innerHTML=`<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover">`;
  document.getElementById('blog-detail-cat').innerHTML=`<i class="fas fa-tag"></i> ${b.cat}`;
  document.getElementById('blog-detail-date').innerHTML=`<i class="fas fa-calendar"></i> ${b.date}`;
  document.getElementById('blog-detail-title').textContent=b.title;
  document.getElementById('blog-detail-body').textContent=b.body;
  goPage('blog-detail-page');
}

// ═══ SIDEBAR NAV ═══
document.querySelectorAll('.sb-nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    const pg=a.dataset.page;
    const sectionIds=['about-section','skills-section','resume-section'];
    if(pg==='home'){goPage('home');return;}
    if(sectionIds.includes(pg)){
      goPage('home');
      setTimeout(()=>{const el=document.getElementById(pg);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},120);
    } else {goPage(pg);}
  });
});

// ═══ PORTFOLIOS PAGE FILTER ═══
document.querySelectorAll('[data-filter2]').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter2]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f=b.dataset.filter2;
    document.querySelectorAll('.port-page-card').forEach(c=>c.style.display=(f==='all'||c.dataset.cat2===f)?'':'none');
  });
});

// ═══ LOADER ═══
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hidden'),500));

// ═══ HIRE ME – now static, no runaway ═══
// Button is professional and static – no runaway effect

// ═══ TYPED ═══
const words=['Full Stack Developer','DevOps Engineer','Problem Solver','Backend Developer'];
let wi=0,ci=0,del=false;
const tel=document.getElementById('typed-text');
function type(){const w=words[wi];if(!del){tel.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,1800);return}}else{tel.textContent=w.slice(0,--ci);if(ci===0){del=false;wi=(wi+1)%words.length}}setTimeout(type,del?45:85)}
type();

// ═══ SCROLL REVEALS (up, left, right) ═══
function triggerReveals(){
  const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.07});
  document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-right:not(.visible)').forEach(r=>ro.observe(r));
}
triggerReveals();

// ═══ SKILL BARS ═══
function triggerSkills(){
  const so=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.querySelectorAll('.skill-fill').forEach(b=>b.style.width=b.dataset.width+'%')})},{threshold:.2});
  document.querySelectorAll('#skills-section').forEach(s=>so.observe(s));
}
triggerSkills();

// ═══ COUNTERS ═══
function cnt(el,t){let n=0;const st=Math.max(1,Math.ceil(t/40));const iv=setInterval(()=>{n=Math.min(n+st,t);el.textContent=n+'+';if(n>=t)clearInterval(iv)},40)}
function triggerCounters(){
  const co=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.stat-num').forEach(el=>cnt(el,+el.dataset.count));co.unobserve(e.target)}})},{threshold:.4});
  document.querySelectorAll('#stats-sec').forEach(s=>co.observe(s));
}
triggerCounters();

// ═══ HOME PORTFOLIO FILTER ═══
document.querySelectorAll('.f-btn[data-filter]').forEach(b=>{b.addEventListener('click',()=>{document.querySelectorAll('.f-btn[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;document.querySelectorAll('.port-card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.cat!==f))})});

// ═══ BACK TO TOP ═══
const bt=document.getElementById('back-top');
window.addEventListener('scroll',()=>bt.classList.toggle('visible',window.scrollY>400));
bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// ═══ TESTIMONIAL INFINITE CAROUSEL ═══
(function(){
  const track=document.getElementById('testTrack');
  if(!track)return;
  let pos=0,paused=false;
  const speed=0.4;
  track.addEventListener('mouseenter',()=>paused=true);
  track.addEventListener('mouseleave',()=>paused=false);
  function getCardWidth(){const card=track.querySelector('.test-card');if(!card)return 320;return card.offsetWidth+20;}
  function loop(){if(!paused){pos+=speed;const totalW=getCardWidth()*5;if(pos>=totalW)pos=0;track.style.transform=`translateX(-${pos}px)`;}requestAnimationFrame(loop);}
  loop();
})();

// ═══ RESUME DOWNLOAD ═══
document.querySelectorAll('#dlResume1,#dlResume2').forEach(b=>{b.addEventListener('click',e=>{e.preventDefault();alert('ضع ملف الـ CV واستبدل href بمسار الملف.');})});


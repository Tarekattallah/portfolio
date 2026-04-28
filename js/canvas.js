// ═══ CONTACT PAGE ANIMATED NETWORK ═══
(function(){
  const cv=document.getElementById('contactNetCanvas');
  if(!cv)return;
  const cx=cv.getContext('2d');
  let W,H,dots=[];
  const N=260,DIST=130;
  function resize(){W=cv.width=cv.offsetWidth||window.innerWidth;H=cv.height=cv.offsetHeight||window.innerHeight;}
  function initDots(){dots=[];for(let i=0;i<N;i++)dots.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*1.6,vy:(Math.random()-.5)*1.6,r:Math.random()*2+.8});}
  resize();initDots();
  window.addEventListener('resize',()=>{resize();initDots();});
  // Resize when contact page becomes visible
  const observer=new MutationObserver(()=>{if(document.getElementById('contact-page').classList.contains('active')){resize();initDots();}});
  const cp=document.getElementById('contact-page');
  if(cp)observer.observe(cp,{attributeFilter:['class']});

  function draw(){
    cx.clearRect(0,0,W,H);
    // Dark tinted background
    cx.fillStyle='rgba(13,21,41,0.96)';cx.fillRect(0,0,W,H);
    // Moving dots
    dots.forEach(d=>{
      const spd=Math.sqrt(d.vx*d.vx+d.vy*d.vy);
      if(spd<0.4&&spd>0){d.vx=d.vx/spd*0.4;d.vy=d.vy/spd*0.4;}
      d.vx*=.99;d.vy*=.99;d.x+=d.vx;d.y+=d.vy;
      if(d.x<0)d.x=W;if(d.x>W)d.x=0;if(d.y<0)d.y=H;if(d.y>H)d.y=0;
    });
    // Lines between close dots
    for(let i=0;i<dots.length;i++){for(let j=i+1;j<dots.length;j++){
      const dx=dots[i].x-dots[j].x,dy=dots[i].y-dots[j].y,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<DIST){cx.beginPath();cx.moveTo(dots[i].x,dots[i].y);cx.lineTo(dots[j].x,dots[j].y);cx.strokeStyle=`rgba(100,160,255,${(1-dist/DIST)*.35})`;cx.lineWidth=.8;cx.stroke();}
    }}
    // Dots
    dots.forEach(d=>{cx.beginPath();cx.arc(d.x,d.y,d.r,0,Math.PI*2);cx.fillStyle='rgba(150,200,255,.8)';cx.fill();});
    requestAnimationFrame(draw);
  }
  draw();
})();

// ═══ CODING BACKGROUND ═══
(function(){
  const cv=document.getElementById('code-canvas');const cx=cv.getContext('2d');
  let W,H;const FONT_SIZE=13;
  const snippets=['','','','','','',''];
  let drops=[];
  function resize(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;const cols=Math.floor(W/140);drops=[];for(let i=0;i<cols;i++)drops.push({x:i*(W/cols),y:Math.random()*H,speed:Math.random()*0.5+0.25,text:snippets[Math.floor(Math.random()*snippets.length)]});}
  resize();window.addEventListener('resize',resize);
  function draw(){cx.fillStyle='rgba(20,32,70,0.04)';cx.fillRect(0,0,W,H);cx.font=`${FONT_SIZE}px Fira Code, monospace`;drops.forEach(d=>{cx.fillStyle=`rgba(0,200,100,${Math.random()*0.18+0.06})`;cx.fillText(d.text,d.x,d.y);d.y+=d.speed;if(d.y>H+100){d.y=-40;d.text=snippets[Math.floor(Math.random()*snippets.length)];}});requestAnimationFrame(draw);}
  draw();
})();

// ═══ PARTICLES + GEOMETRIC SHAPES ═══
(function(){
  const cv=document.getElementById('particle-canvas');const cx=cv.getContext('2d');
  let W,H,dots=[],shapes=[],mouse={x:null,y:null},time=0;
  const N=380,DIST=140;
  const SHAPES_DEF=[
    {type:'circle',x:.15,y:.25,r:55,vx:.45,vy:.3,rot:0,rotV:.009},
    {type:'circle',x:.8,y:.7,r:70,vx:-.38,vy:.28,rot:0,rotV:.007},
    {type:'circle',x:.55,y:.15,r:42,vx:.28,vy:.46,rot:0,rotV:.012},
    {type:'hexagon',x:.25,y:.72,r:62,vx:.32,vy:-.36,rot:0,rotV:.014},
    {type:'hexagon',x:.72,y:.3,r:50,vx:-.44,vy:.3,rot:.5,rotV:-.01},
    {type:'triangle',x:.42,y:.55,r:58,vx:.36,vy:-.26,rot:0,rotV:.016},
    {type:'triangle',x:.88,y:.5,r:45,vx:-.3,vy:.38,rot:1,rotV:.012},
    {type:'rect',x:.1,y:.6,r:48,vx:.4,vy:.26,rot:.3,rotV:.01},
    {type:'rect',x:.65,y:.8,r:38,vx:-.26,vy:-.44,rot:.7,rotV:-.014},
    {type:'diamond',x:.35,y:.1,r:52,vx:.28,vy:.48,rot:0,rotV:.008},
    {type:'diamond',x:.9,y:.15,r:40,vx:-.36,vy:.4,rot:.4,rotV:.016},
    {type:'circle',x:.5,y:.45,r:32,vx:.5,vy:-.3,rot:0,rotV:.018},
    {type:'hexagon',x:.3,y:.4,r:44,vx:.34,vy:.34,rot:.2,rotV:.011},
    {type:'triangle',x:.7,y:.6,r:36,vx:-.42,vy:-.28,rot:.8,rotV:-.013},
    {type:'diamond',x:.18,y:.5,r:30,vx:.46,vy:-.36,rot:.1,rotV:.015},
    {type:'circle',x:.6,y:.35,r:28,vx:-.32,vy:.5,rot:0,rotV:.02},
  ];
  function resize(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;shapes=SHAPES_DEF.map(s=>({...s,cx:s.x*W,cy:s.y*H}));}
  resize();window.addEventListener('resize',()=>{resize();initDots();});
  const hero=document.getElementById('hero');
  hero.addEventListener('mousemove',e=>{const r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top});
  hero.addEventListener('mouseleave',()=>{mouse.x=null;mouse.y=null});
  function initDots(){dots=[];for(let i=0;i<N;i++)dots.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*2.2,vy:(Math.random()-.5)*2.2,r:Math.random()*2.4+.8});}
  initDots();
  function drawShape(s){cx.save();cx.translate(s.cx,s.cy);cx.rotate(s.rot);const alpha=0.08+0.04*Math.sin(time*0.02+s.cx);let strokeAlpha=alpha,lw=1.2;if(mouse.x!==null){const dx=s.cx-mouse.x,dy=s.cy-mouse.y,d=Math.sqrt(dx*dx+dy*dy);if(d<200){const b=(200-d)/200;strokeAlpha=alpha+b*0.28;lw=1.5+b*2.5;}}cx.strokeStyle=`rgba(100,200,255,${strokeAlpha})`;cx.lineWidth=lw;cx.beginPath();if(s.type==='circle'){cx.arc(0,0,s.r,0,Math.PI*2);}else if(s.type==='hexagon'){for(let i=0;i<6;i++)cx.lineTo(s.r*Math.cos(i*Math.PI/3),s.r*Math.sin(i*Math.PI/3));cx.closePath();}else if(s.type==='triangle'){for(let i=0;i<3;i++)cx.lineTo(s.r*Math.cos(i*2*Math.PI/3-Math.PI/2),s.r*Math.sin(i*2*Math.PI/3-Math.PI/2));cx.closePath();}else if(s.type==='rect'){cx.rect(-s.r*.8,-s.r*.8,s.r*1.6,s.r*1.6);}else if(s.type==='diamond'){cx.moveTo(0,-s.r);cx.lineTo(s.r*.6,0);cx.lineTo(0,s.r);cx.lineTo(-s.r*.6,0);cx.closePath();}cx.stroke();cx.restore();}
  function draw(){cx.clearRect(0,0,W,H);time++;shapes.forEach(s=>{s.rot+=s.rotV;s.cx+=s.vx;s.cy+=s.vy;if(s.cx<-s.r*2)s.cx=W+s.r;if(s.cx>W+s.r*2)s.cx=-s.r;if(s.cy<-s.r*2)s.cy=H+s.r;if(s.cy>H+s.r*2)s.cy=-s.r;if(mouse.x!==null){const dx=s.cx-mouse.x,dy=s.cy-mouse.y,d=Math.sqrt(dx*dx+dy*dy);if(d<180){const f=(180-d)/180*0.6;s.cx+=dx/d*f*4;s.cy+=dy/d*f*4;}}drawShape(s);});dots.forEach(d=>{if(mouse.x!==null){const dx=d.x-mouse.x,dy=d.y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<130){const f=(130-dist)/130;d.vx+=dx/dist*f*2;d.vy+=dy/dist*f*2}}// Keep minimum speed – particles never fully stop
const spd=Math.sqrt(d.vx*d.vx+d.vy*d.vy);const minSpd=0.5;if(spd<minSpd&&spd>0){d.vx=d.vx/spd*minSpd;d.vy=d.vy/spd*minSpd;}else if(spd===0){d.vx=(Math.random()-.5)*minSpd*2;d.vy=(Math.random()-.5)*minSpd*2;}d.vx*=.985;d.vy*=.985;d.x+=d.vx;d.y+=d.vy;if(d.x<0)d.x=W;if(d.x>W)d.x=0;if(d.y<0)d.y=H;if(d.y>H)d.y=0;});for(let i=0;i<dots.length;i++){for(let j=i+1;j<dots.length;j++){const dx=dots[i].x-dots[j].x,dy=dots[i].y-dots[j].y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<DIST){cx.beginPath();cx.moveTo(dots[i].x,dots[i].y);cx.lineTo(dots[j].x,dots[j].y);cx.strokeStyle=`rgba(255,255,255,${(1-dist/DIST)*.4})`;cx.lineWidth=.8;cx.stroke();}}}dots.forEach(d=>{cx.beginPath();cx.arc(d.x,d.y,d.r,0,Math.PI*2);cx.fillStyle='rgba(255,255,255,.82)';cx.fill();});requestAnimationFrame(draw);}
  draw();
})();


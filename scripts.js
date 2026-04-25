 // ── Video source helper ──
  // To set your video at runtime (e.g. from a CMS or config),
  // call: setHeroVideo('https://your-cdn.com/video.mp4');
  window.setHeroVideo = function(url) {
    var v = document.getElementById('heroVideo');
    if (v) { v.src = url; v.load(); v.play(); }
  };





//-----------------Form validation Script------------------
 const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let W, H;
 
    function resize() {
      const p = canvas.parentElement;
      W = canvas.width = p.offsetWidth;
      H = canvas.height = p.offsetHeight;
    }
 
    const dots = [
      { cx: 0.04, cy: 0.82, r: 18, color: '#0ea5c9', a: 0.18 },
      { cx: 0.09, cy: 0.92, r: 10, color: '#4f8ef7', a: 0.22 },
      { cx: 0.02, cy: 0.96, r:  7, color: '#a78bfa', a: 0.20 },
      { cx: 0.06, cy: 0.75, r:  5, color: '#0ea5c9', a: 0.15 },
      { cx: 0.13, cy: 0.88, r:  6, color: '#4f8ef7', a: 0.13 },
      { cx: 0.01, cy: 0.88, r:  4, color: '#34d399', a: 0.18 },
      { cx: 0.96, cy: 0.18, r: 18, color: '#4f8ef7', a: 0.18 },
      { cx: 0.91, cy: 0.08, r: 10, color: '#0ea5c9', a: 0.22 },
      { cx: 0.98, cy: 0.04, r:  7, color: '#a78bfa', a: 0.20 },
      { cx: 0.94, cy: 0.25, r:  5, color: '#4f8ef7', a: 0.15 },
      { cx: 0.87, cy: 0.12, r:  6, color: '#0ea5c9', a: 0.13 },
      { cx: 0.99, cy: 0.12, r:  4, color: '#34d399', a: 0.18 },
    ];
 
    function draw() {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.cx * W, d.cy * H, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = d.a;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }
 
    resize(); draw();
    window.addEventListener('resize', () => { resize(); draw(); });
 
   function validate(id, errId, type) {
      const val = document.getElementById(id).value.trim();
      const el  = document.getElementById(id);
      const err = document.getElementById(errId);
      if (!val) { el.classList.add('error'); err.textContent = 'This field is required.'; return false; }
      if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { el.classList.add('error'); err.textContent = 'Enter a valid email.'; return false; }
      if (type === 'tel'   && !/^\+?[\d\s\-]{7,15}$/.test(val))         { el.classList.add('error'); err.textContent = 'Enter a valid phone number.'; return false; }
      el.classList.remove('error'); err.textContent = ''; return true;
    }
 
    ['fname','fphone','femail','fmsg'].forEach(id => {
      document.getElementById(id).addEventListener('input', () => {
        const type = id === 'femail' ? 'email' : id === 'fphone' ? 'tel' : 'text';
        validate(id, id + '-err', type);
      });
    });
 
    function submitForm() {
      const a = validate('fname',  'fname-err',  'text');
      const b = validate('fphone', 'fphone-err', 'tel');
      const c = validate('femail', 'femail-err', 'email');
      const d = validate('fmsg',   'fmsg-err',   'text');
      if (a && b && c && d) {
        document.getElementById('successMsg').style.display = 'block';
        ['fname','fphone','femail','fmsg'].forEach(id => { document.getElementById(id).value = ''; });
        setTimeout(() => { document.getElementById('successMsg').style.display = 'none'; }, 3000);
      }
    }
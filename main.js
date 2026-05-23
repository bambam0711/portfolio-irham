  const SUPABASE_URL = 'https://cnzgkcsyxpqigzhbxmlh.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_kC5qI2H0sQHDhhtfQ-GM9g_19SJi8WH';

  let allProjects = [];
  let allCerts = [];
  let activeProjectFilter = 'all';
  let activeCertFilter = 'all';
  let certArchiveQuery = '';
  let lastFocusBeforeModal = null;
  const FEATURED_CERT_LIMIT = 3;

  function projectText(ms, en = ms) {
    return JSON.stringify({ ms, en });
  }

  function projectDetails({ ms, en, problemMs, problemEn, solutionMs, solutionEn, learningMs, learningEn }) {
    return JSON.stringify({
      ms,
      en: en || ms,
      problem: { ms: problemMs || '', en: problemEn || problemMs || '' },
      solution: { ms: solutionMs || '', en: solutionEn || solutionMs || '' },
      learning: { ms: learningMs || '', en: learningEn || learningMs || '' }
    });
  }

  function projectMeta({ demo = '', github = '', report = '', architecture = '', status = 'Completed', featured = false, telegram = '' }) {
    return JSON.stringify({ demo, github, report, architecture, status, featured, telegram });
  }

  const defaultProjects = [
    {
      id: -104,
      name: 'Water Availability System - FlowSense Dashboard',
      description: projectText(
        'Aplikasi web realtime untuk memantau status air tandas menggunakan Firebase, paparan blok, status tandas, pengumuman dan fungsi admin.',
        'A real-time web dashboard for monitoring toilet water availability using Firebase, block views, toilet status, announcements and admin controls.'
      ),
      category: 'web',
      tags: 'Firebase, HTML, CSS, JavaScript, Realtime Database, Dashboard',
      link: projectMeta({
        demo: 'https://flowsense-db763.web.app',
        report: 'assets/projects/flowsense-report.pdf',
        architecture: 'ESP32 > Firebase Realtime Database > Web Dashboard > Admin Actions',
        status: 'Completed',
        featured: true,
        telegram: 'https://t.me/wateravaibilitysystembot'
      }),
      image_url: 'assets/projects/flowsense-dashboard.png',
      images: 'assets/projects/flowsense-dashboard.png,assets/projects/flowsense-prototype.jpg,assets/projects/flowsense-circuit.png',
      long_description: projectDetails({
        ms: 'FlowSense Dashboard ialah aplikasi web yang dibina untuk memaparkan data status air tandas secara realtime. Sistem ini membezakan paparan pelajar dan admin, menunjukkan ringkasan status, senarai blok, status setiap tandas, pengumuman, laporan kerosakan dan maklumat integrasi IoT.\n\nProjek ini menjadi lapisan software untuk projek hardware FlowSense supaya data daripada ESP32 boleh dibaca dan diurus melalui interface yang lebih kemas.',
        en: 'FlowSense Dashboard is a web application built to display toilet water availability data in real time. It separates student and admin views, showing status summaries, block lists, individual toilet status, announcements, broken reports and IoT integration information.\n\nThis project acts as the software layer for the FlowSense hardware so ESP32 data can be viewed and managed through a cleaner interface.',
        problemMs: 'Data sensor sahaja tidak cukup kalau pengguna tidak ada tempat yang mudah untuk semak status tandas atau admin tidak ada interface untuk urus laporan.',
        problemEn: 'Sensor data alone is not enough if users cannot easily check toilet status and admins do not have an interface to manage reports.',
        solutionMs: 'Saya bina dashboard Firebase dengan auth, paparan realtime, status blok/tandas, announcement, broken report dan tindakan admin untuk kemas kini status.',
        solutionEn: 'I built a Firebase dashboard with authentication, real-time views, block/toilet status, announcements, broken reports and admin actions for status updates.',
        learningMs: 'Saya belajar menyusun state frontend, role-based UI, realtime database listener dan cara menjadikan data IoT lebih mudah difahami oleh pengguna.',
        learningEn: 'I learned how to structure frontend state, role-based UI, real-time database listeners and make IoT data easier for users to understand.'
      })
    },
    {
      id: -103,
      name: 'FlowSense IoT Water Monitoring Prototype',
      description: projectText(
        'Prototype IoT menggunakan ESP32, sensor air, raindrop sensor, LED indikator dan Telegram bot untuk memantau ketersediaan air tandas.',
        'An IoT prototype using ESP32, water sensors, a raindrop sensor, LED indicators and a Telegram bot to monitor toilet water availability.'
      ),
      category: 'iot',
      tags: 'ESP32, Arduino IDE, Firebase, Telegram Bot, Water Sensor, Raindrop Sensor',
      link: projectMeta({
        report: 'assets/projects/flowsense-report.pdf',
        architecture: 'Water Sensor > ESP32 > Firebase > Telegram Alerts > Dashboard',
        status: 'Prototype',
        telegram: 'https://t.me/wateravaibilitysystembot'
      }),
      image_url: 'assets/projects/flowsense-prototype.jpg',
      images: 'assets/projects/flowsense-prototype.jpg,assets/projects/flowsense-circuit.png',
      long_description: projectDetails({
        ms: 'FlowSense hardware prototype membaca keadaan air menggunakan sensor dan menghantar status ke Firebase. Prototype ini juga ada LED indikator untuk status setempat dan button untuk laporan rosak supaya sistem boleh membezakan antara tiada air dan tandas bermasalah.\n\nBahagian Telegram digunakan sebagai saluran notifikasi supaya status penting boleh dihantar terus kepada pengguna atau admin.',
        en: 'The FlowSense hardware prototype reads water conditions using sensors and sends the status to Firebase. It also includes LED indicators for local status feedback and a button for broken reports, allowing the system to separate no-water cases from broken toilet cases.\n\nTelegram is used as a notification channel so important updates can be sent directly to users or admins.',
        problemMs: 'Status air tandas biasanya hanya diketahui selepas pengguna sampai ke tandas, jadi masa terbuang dan laporan kerosakan lambat sampai kepada pihak bertanggungjawab.',
        problemEn: 'Toilet water status is usually only known after users reach the toilet, which wastes time and delays broken reports.',
        solutionMs: 'ESP32 membaca sensor, mengemas kini status ke Firebase, mengawal LED indikator dan menghantar notifikasi Telegram untuk perubahan status penting.',
        solutionEn: 'The ESP32 reads sensors, updates Firebase status, controls LED indicators and sends Telegram notifications for important status changes.',
        learningMs: 'Saya belajar kalibrasi sensor, susun pin ESP32, kawal status yang kekal selepas button ditekan, dan sambungkan hardware dengan cloud service.',
        learningEn: 'I learned sensor calibration, ESP32 pin planning, persistent status handling after a button press and connecting hardware to cloud services.'
      })
    },
    {
      id: -101,
      name: 'Smart Attendance Verification System',
      description: projectText(
        'Sistem kehadiran kelab ping pong menggunakan PHP dan MySQL untuk urus ahli, aktiviti, rekod kehadiran dan laporan admin.',
        'A table tennis club attendance system using PHP and MySQL to manage members, activities, attendance records and admin reports.'
      ),
      category: 'web',
      tags: 'PHP, MySQL, CRUD, Session, Database Design',
      link: projectMeta({
        report: 'assets/projects/attendance-report.pdf',
        architecture: 'PHP Pages > Session Login > MySQL Database > Attendance Reports',
        status: 'Completed'
      }),
      image_url: 'assets/projects/attendance-banner.png',
      images: 'assets/projects/attendance-banner.png,assets/projects/attendance-home.png',
      long_description: projectDetails({
        ms: 'Sistem ini dibina untuk Kelab Ping Pong SMK Tinggi Klang bagi memudahkan pendaftaran ahli, pendaftaran aktiviti, rekod kehadiran dan laporan. Projek ini menggunakan PHP untuk paparan dan proses, manakala MySQL digunakan untuk menyimpan data ahli, aktiviti dan kehadiran.\n\nDalam projek ini, saya fokus pada aliran pengguna admin dan pelajar supaya data boleh dimasukkan, dikemaskini, dipadam dan dilihat semula melalui laporan.',
        en: 'This system was built for the SMK Tinggi Klang Table Tennis Club to manage member registration, activity registration, attendance records and reports. PHP handles the pages and processes, while MySQL stores member, activity and attendance data.\n\nIn this project, I focused on admin and student flows so data can be created, updated, deleted and reviewed through reports.',
        problemMs: 'Rekod kehadiran kelab secara manual mudah hilang, lambat dikira dan susah untuk dijadikan laporan aktiviti.',
        problemEn: 'Manual club attendance records can be lost, slow to calculate and difficult to turn into activity reports.',
        solutionMs: 'Saya bina sistem CRUD dengan login role, modul ahli, modul aktiviti, rekod kehadiran dan laporan supaya admin boleh urus data dengan lebih tersusun.',
        solutionEn: 'I built a CRUD system with role login, member modules, activity modules, attendance records and reports so admins can manage data more systematically.',
        learningMs: 'Saya belajar struktur database relational, session PHP, proses form, validasi asas dan cara paparkan laporan daripada data yang disimpan.',
        learningEn: 'I learned relational database structure, PHP sessions, form handling, basic validation and how to display reports from stored data.'
      })
    },
    {
      id: -102,
      name: 'IoT Motor Car Prototype',
      description: projectText(
        'Prototype kereta IoT berasaskan motor DC dan controller untuk latihan pergerakan robotik, wiring dan logik kawalan asas.',
        'An IoT motor car prototype based on DC motors and a controller for practicing robotic movement, wiring and basic control logic.'
      ),
      category: 'iot',
      tags: 'Arduino, ESP32, Motor Driver, DC Motor, Robotics, Prototype',
      link: projectMeta({
        architecture: 'Battery > Controller > Motor Driver > DC Motors > Movement Logic',
        status: 'In Progress'
      }),
      image_url: 'assets/projects/iot-car-wiring.jpg',
      images: 'assets/projects/iot-car-wiring.jpg,assets/projects/iot-car-frame.jpg',
      long_description: projectDetails({
        ms: 'Projek IoT Motor Car ialah prototype awal untuk memahami bagaimana chassis, motor DC, bekalan kuasa dan controller disusun bagi menghasilkan pergerakan robotik. Buat masa ini projek ini lebih kepada setup hardware dan perancangan kawalan, manakala coding penuh akan ditambah kemudian.\n\nSaya nyatakan projek ini sebagai prototype supaya penerangan portfolio kekal jujur terhadap tahap projek.',
        en: 'The IoT Motor Car is an early prototype for understanding how the chassis, DC motors, power supply and controller are arranged to create robotic movement. At this stage, it focuses more on hardware setup and control planning, while the complete code will be added later.\n\nI describe this as a prototype so the portfolio stays honest about the current project stage.',
        problemMs: 'Untuk bina robot bergerak, saya perlu faham hubungan antara power, motor, controller dan arah pergerakan sebelum tambah sensor atau automation.',
        problemEn: 'To build a moving robot, I needed to understand the relationship between power, motors, controller and movement direction before adding sensors or automation.',
        solutionMs: 'Saya susun chassis, motor DC dan controller sebagai platform ujian supaya logik pergerakan seperti forward, reverse dan turn boleh dibina secara berperingkat.',
        solutionEn: 'I arranged the chassis, DC motors and controller as a test platform so movement logic like forward, reverse and turning can be built gradually.',
        learningMs: 'Saya belajar asas wiring motor, pengurusan bekalan kuasa, susunan hardware robotik dan cara merancang coding sebelum projek lengkap.',
        learningEn: 'I learned motor wiring basics, power management, robotic hardware layout and how to plan code before the project is complete.'
      })
    }
  ];

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── ACTIVE NAV ON SCROLL ──
  const navLinksList = Array.from(document.querySelectorAll('#navLinks .nav-link'));
  const navSections = navLinksList
    .map(link => document.getElementById((link.getAttribute('href') || '').replace('#', '')))
    .filter(Boolean);
  let navScrollTicking = false;

  function setActiveNav(sectionId) {
    navLinksList.forEach(link => {
      const isActive = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function updateScrollUi() {
    const activationLine = window.innerHeight * 0.38;
    let current = '';

    navSections.forEach(section => {
      if (section.getBoundingClientRect().top <= activationLine) current = section.id;
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
      current = navSections.at(-1)?.id || current;
    }

    setActiveNav(current);
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
    navScrollTicking = false;
  }

  function requestScrollUiUpdate() {
    if (!navScrollTicking) {
      navScrollTicking = true;
      requestAnimationFrame(updateScrollUi);
    }
  }

  window.addEventListener('scroll', requestScrollUiUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUiUpdate);

  // ── PROJECTS ──
  function barClass(cat) {
    if (cat === 'ai') return 'pbar pink';
    if (cat === 'iot') return 'pbar teal';
    return 'pbar';
  }

  function localizedProjectText(value, lang) {
    if (!value) return '';
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === 'object') {
        return parsed[lang] || parsed.ms || parsed.en || '';
      }
    } catch {}
    return value;
  }

  function localizedProjectDetails(value, lang) {
    const fallback = { desc: localizedProjectText(value, lang), problem: '', solution: '', learning: '' };
    if (!value) return fallback;
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === 'object') {
        return {
          desc: parsed[lang] || parsed.ms || parsed.en || '',
          problem: localizedProjectText(JSON.stringify(parsed.problem || {}), lang),
          solution: localizedProjectText(JSON.stringify(parsed.solution || {}), lang),
          learning: localizedProjectText(JSON.stringify(parsed.learning || {}), lang)
        };
      }
    } catch {}
    return fallback;
  }

  function parseProjectMeta(value) {
    if (!value) return { demo: '', github: '', report: '', architecture: '', status: 'Case Study', featured: false, telegram: '', codeFile: '', codeName: '' };
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === 'object') {
        return {
          demo: parsed.demo || parsed.url || '',
          github: parsed.github || '',
          report: parsed.report || '',
          architecture: parsed.architecture || '',
          status: parsed.status || (parsed.demo ? 'Completed' : 'Case Study'),
          featured: Boolean(parsed.featured),
          telegram: parsed.telegram || '',
          codeFile: parsed.codeFile || parsed.code || parsed.source || '',
          codeName: parsed.codeName || ''
        };
      }
    } catch {}
    return { demo: value, github: '', report: '', architecture: '', status: 'Completed', featured: false, telegram: '', codeFile: '', codeName: '' };
  }

  function parseProjectImages(value) {
    if (!value) return [];
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.filter(Boolean);
    } catch {}
    const trimmed = value.trim();
    if (trimmed.startsWith('data:')) return [trimmed];
    const lineItems = trimmed.split(/\n+/).map(item => item.trim()).filter(Boolean);
    if (lineItems.length > 1) return lineItems;
    return trimmed.split(',').map(item => item.trim()).filter(Boolean);
  }

  function parseCertMeta(value) {
    if (!value) return { name: '', category: 'Other', hidden: false };
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === 'object') return { name: parsed.name || '', category: parsed.category || 'Other', hidden: Boolean(parsed.hidden) };
    } catch {}
    return { name: value, category: 'Other', hidden: false };
  }

  function statusClass(status) {
    return String(status || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  function renderVisibleProjects() {
    const query = (document.getElementById('projectSearch')?.value || '').trim().toLowerCase();
    let projects = activeProjectFilter === 'all' ? allProjects : allProjects.filter(p => p.category === activeProjectFilter);
    if (query) {
      projects = projects.filter(p => {
        const text = [p.name, p.category, p.tags, localizedProjectText(p.description, 'ms'), localizedProjectText(p.description, 'en')].join(' ').toLowerCase();
        return text.includes(query);
      });
    }
    renderProjects(projects);
  }

  function renderProjects(projects) {
    const bento = document.getElementById('bento');
    const lang = localStorage.getItem('lang') || 'ms';
    if (!projects.length) {
      const query = (document.getElementById('projectSearch')?.value || '').trim();
      const isFiltered = activeProjectFilter !== 'all' || query;
      bento.innerHTML = `
        <div class="empty-state project-empty">
          <span>${isFiltered ? (lang === 'ms' ? 'Tiada padanan' : 'No matches') : (lang === 'ms' ? 'Sedang dikurasi' : 'Being curated')}</span>
          <strong>${isFiltered ? (lang === 'ms' ? 'Projek tidak dijumpai' : 'No projects found') : (lang === 'ms' ? 'Projek akan muncul di sini' : 'Projects will appear here')}</strong>
          <p>${isFiltered ? (lang === 'ms' ? 'Cuba tukar kategori atau kosongkan carian untuk lihat projek lain.' : 'Try another category or clear the search to view other projects.') : (lang === 'ms' ? 'Saya sedang pilih projek yang paling sesuai untuk dipaparkan dalam portfolio utama.' : 'I am curating the most relevant work for the main portfolio view.')}</p>
          ${isFiltered ? `<button class="filter-btn" type="button" onclick="resetProjectFilters()">${lang === 'ms' ? 'Reset paparan' : 'Reset view'}</button>` : ''}
        </div>`;
      return;
    }
    bento.innerHTML = projects.map((p) => {
      const meta = parseProjectMeta(p.link);
      const imgHtml = p.image_url ? `<img class="pimg" src="${p.image_url}" alt="${p.name}" onerror="this.style.display='none'">` : '';
      const fallbackHtml = p.image_url ? '' : `<div class="pimg-placeholder ${p.category || 'other'}"><span>${(p.category || 'PR').slice(0, 2).toUpperCase()}</span></div>`;
      const tagsHtml = p.tags ? p.tags.split(',').map(t => `<span class="ptag">${t.trim()}</span>`).join('') : '';
      const status = meta.status || (meta.demo ? 'Completed' : 'Case Study');
      const action = lang === 'ms' ? 'Buka Detail' : 'Open Details';
      const desc = localizedProjectText(p.description, lang);
      return `
        <div class="pcard" data-cat="${p.category || 'other'}" role="button" tabindex="0" onclick="openModal(${p.id})" onkeydown="handleProjectCardKey(event, ${p.id})" style="cursor:pointer;">
          <div class="${barClass(p.category)}"></div>
          <div class="pcard-top"><span class="project-status ${statusClass(status)}">${meta.featured ? 'Featured' : status}</span><span class="project-category">${p.category || 'other'}</span></div>
          ${imgHtml || fallbackHtml}
          <div class="ptitle">${p.name}</div>
          <div class="pdesc">${desc}</div>
          <div class="ptags">${tagsHtml}</div>
          <div class="pcard-action">${action} &#8599;</div>
        </div>`;
    }).join('');
  }

  function resetProjectFilters() {
    activeProjectFilter = 'all';
    const search = document.getElementById('projectSearch');
    if (search) search.value = '';
    document.querySelectorAll('#projects .filter-btn').forEach(btn => btn.classList.remove('active'));
    const firstBtn = document.querySelector('#projects .filter-btn');
    if (firstBtn) firstBtn.classList.add('active');
    renderVisibleProjects();
  }

  function handleProjectCardKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(id);
    }
  }

  async function loadProjects() {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/projects?select=*&order=created_at.desc`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const data = await res.json();
      allProjects = Array.isArray(data) && data.length ? data : defaultProjects;
      allProjects.sort((a, b) => Number(parseProjectMeta(b.link).featured) - Number(parseProjectMeta(a.link).featured));
      renderVisibleProjects();
    } catch {
      allProjects = [...defaultProjects];
      allProjects.sort((a, b) => Number(parseProjectMeta(b.link).featured) - Number(parseProjectMeta(a.link).featured));
      renderVisibleProjects();
    }
  }

  function filterProjects(cat, btn) {
    activeProjectFilter = cat;
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderVisibleProjects();
  }

  // ── MODAL ──
  const infoStories = {
    current: {
      category: { ms: 'Kini', en: 'Currently' },
      title: { ms: 'Kolej Matrikulasi Johor', en: 'Kolej Matrikulasi Johor' },
      tags: ['Matrikulasi', 'Sains Komputer', 'PNGA 3.93'],
      desc: {
        ms: 'Di sini saya sedang bina asas akademik yang lebih kuat, daripada disiplin belajar harian sampai cara fikir yang lebih tersusun. Matrikulasi ajar saya hadap jadual padat, tugasan, latihan, dan masa yang perlu dibahagi dengan betul.\n\nAntara benda yang saya belajar ialah kekal konsisten walaupun penat, berani tanya lecturer bila tak jelas, dan bekerjasama dengan kawan-kawan bila topik jadi berat. Bagi saya, bahagian ini penting sebab ia tunjuk perjalanan sebenar, bukan cuma nombor keputusan.',
        en: 'This is where I am building a stronger academic foundation, from daily study discipline to clearer problem-solving habits. Matriculation taught me how to handle packed schedules, assignments, practice work, and time management.\n\nI learned to stay consistent when things get tiring, ask lecturers when something is unclear, and work with friends when a topic gets heavy. This part matters because it shows the real journey, not just the result.'
      },
      highlights: {
        ms: ['Belajar mengurus masa dengan jadual yang padat', 'Berbincang dengan lecturer dan rakan bila stuck', 'Membina asas untuk sambung bidang komputer'],
        en: ['Learning time management through a packed schedule', 'Discussing with lecturers and friends when stuck', 'Building the foundation for a computing degree']
      }
    },
    apply: {
      category: { ms: 'Memohon ke', en: 'Applying to' },
      title: { ms: 'UKM FTSM 2026', en: 'UKM FTSM 2026' },
      tags: ['UKM', 'FTSM', 'Computer Science'],
      desc: {
        ms: 'Saya sasarkan FTSM UKM sebab minat saya memang dekat dengan web, AI, data, dan sistem yang boleh bantu orang. Bagi saya, permohonan ini bukan sekadar pilih universiti, tapi langkah seterusnya untuk jadikan minat teknologi sebagai laluan yang lebih serius.\n\nSaya nak bawa pengalaman projek kecil, eksperimen coding, dan disiplin belajar dari matrikulasi ke peringkat degree. Kalau diterima, saya mahu terus aktif bina projek, masuk komuniti teknologi, dan belajar daripada pensyarah serta rakan yang lebih luas.',
        en: 'I am aiming for UKM FTSM because my interests sit close to web, AI, data, and systems that can help people. For me, this application is not just about choosing a university, but about taking my tech interest more seriously.\n\nI want to bring my small project experience, coding experiments, and study discipline from matriculation into my degree journey. If accepted, I hope to keep building projects, join tech communities, and learn from more lecturers and peers.'
      },
      highlights: {
        ms: ['Sasaran bidang komputer dan AI', 'Mahu aktif dengan projek dan komuniti', 'Bina laluan dari minat kepada kerjaya'],
        en: ['Targeting computing and AI', 'Planning to stay active with projects and communities', 'Turning interest into a career path']
      }
    },
    location: {
      category: { ms: 'Lokasi', en: 'Based in' },
      title: { ms: 'Putrajaya, Malaysia', en: 'Putrajaya, Malaysia' },
      tags: ['Malaysia', 'Putrajaya', 'Remote-ready'],
      desc: {
        ms: 'Putrajaya jadi tempat saya susun fokus dan bina identiti sebagai pelajar pembangun dari Malaysia. Dari sini saya banyak belajar sendiri, siapkan projek, dan cari peluang untuk berkembang dalam dunia teknologi.\n\nSaya suka letakkan lokasi ini sebab ia bagi konteks: saya bukan datang dari laluan yang terlalu fancy, tapi saya konsisten cari jalan untuk belajar, bina benda, dan connect dengan orang yang minat benda sama.',
        en: 'Putrajaya is where I shape my focus and identity as a student developer from Malaysia. From here, I self-learn, build projects, and look for chances to grow in tech.\n\nI like showing this location because it gives context: I am not coming from an overly fancy path, but I keep finding ways to learn, build, and connect with people who care about similar things.'
      },
      highlights: {
        ms: ['Belajar sendiri dari rumah dan kampus', 'Aktif bina projek web dan AI', 'Terbuka untuk kolaborasi jarak jauh'],
        en: ['Self-learning from home and campus', 'Actively building web and AI projects', 'Open to remote collaboration']
      }
    },
    focus: {
      category: { ms: 'Tumpuan', en: 'Focus' },
      title: { ms: 'Web + AI / IoT', en: 'Web + AI / IoT' },
      tags: ['Web', 'AI', 'IoT'],
      desc: {
        ms: 'Tumpuan saya sekarang ialah gabungkan web development dengan AI dan IoT. Saya suka bila interface nampak kemas, tapi di belakangnya ada logik yang betul-betul menyelesaikan masalah.\n\nAntara benda yang saya hadap ialah susun UI, faham data, cuba model machine learning, dan eksperimen dengan sensor atau microcontroller. Saya masih belajar, tapi saya suka proses tu sebab setiap projek paksa saya jadi lebih tajam.',
        en: 'My current focus is combining web development with AI and IoT. I like clean interfaces, especially when the logic behind them solves a real problem.\n\nI work on UI structure, data understanding, machine learning experiments, and sensor or microcontroller ideas. I am still learning, but I enjoy the process because every project pushes me to get sharper.'
      },
      highlights: {
        ms: ['Frontend yang kemas dan responsive', 'AI dan data untuk insight', 'IoT untuk projek dunia sebenar'],
        en: ['Clean and responsive frontend work', 'AI and data for insight', 'IoT for real-world projects']
      }
    }
  };

  function openModalShell() {
    const overlay = document.getElementById('modalOverlay');
    lastFocusBeforeModal = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => document.querySelector('.modal-close')?.focus({ preventScroll: true }));
  }

  function openInfoModal(key) {
    const story = infoStories[key];
    if (!story) return;
    const lang = localStorage.getItem('lang') || 'ms';
    const tagsHtml = story.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const points = story.highlights[lang].map(item => `<li>${item}</li>`).join('');
    document.getElementById('modalContent').innerHTML = `
      <div class="modal-body story-modal">
        <div class="modal-category">${story.category[lang]}</div>
        <div class="modal-title" id="modalTitle">${story.title[lang]}</div>
        <div class="modal-tags">${tagsHtml}</div>
        <div class="modal-desc">${story.desc[lang]}</div>
        <div class="story-block-title">${lang === 'en' ? 'What this shows' : 'Apa yang bahagian ini tunjuk'}</div>
        <ul class="story-list">${points}</ul>
      </div>`;
    openModalShell();
  }

  function handleInfoCardKey(e, key) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openInfoModal(key);
    }
  }

  const skillStories = {
    html: {
      icon: 'https://cdn.simpleicons.org/html5/E34F26',
      title: 'HTML5',
      category: 'Frontend',
      tags: ['Structure', 'Semantic Web'],
      desc: {
        ms: 'HTML ialah rangka utama laman web. Saya guna untuk susun heading, section, link, borang, dan kandungan supaya browser faham struktur page dengan betul.',
        en: 'HTML is the main structure of a webpage. I use it to arrange headings, sections, links, forms, and content so the browser understands the page properly.'
      },
      uses: {
        ms: ['Bina struktur portfolio dan landing page', 'Susun content supaya mudah dibaca', 'Sediakan asas untuk CSS dan JavaScript'],
        en: ['Build portfolio and landing page structure', 'Arrange readable content', 'Prepare the base for CSS and JavaScript']
      }
    },
    css: {
      icon: 'https://cdn.simpleicons.org/css/663399',
      title: 'CSS3',
      category: 'Frontend',
      tags: ['Styling', 'Responsive UI'],
      desc: {
        ms: 'CSS digunakan untuk design, warna, spacing, layout, responsive screen, hover effect, dan animasi kecil supaya laman nampak kemas.',
        en: 'CSS is used for design, colors, spacing, layout, responsive screens, hover effects, and small animations so the site feels polished.'
      },
      uses: {
        ms: ['Buat layout desktop dan mobile', 'Kawal warna, font, spacing, dan card', 'Tambah transisi supaya UI rasa smooth'],
        en: ['Create desktop and mobile layouts', 'Control colors, fonts, spacing, and cards', 'Add transitions for smoother UI']
      }
    },
    javascript: {
      icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
      title: 'JavaScript',
      category: 'Frontend Logic',
      tags: ['Interaction', 'DOM'],
      desc: {
        ms: 'JavaScript bagi laman web fungsi interaktif. Saya guna untuk popup, filter projek, tukar bahasa, tema gelap/cerah, dan panggil data dari API.',
        en: 'JavaScript gives websites interactive behavior. I use it for popups, project filters, language switching, themes, and API data loading.'
      },
      uses: {
        ms: ['Buka modal dan lightbox', 'Urus event klik dan form', 'Ambil data projek atau sijil dari backend'],
        en: ['Open modals and lightboxes', 'Handle click events and forms', 'Fetch project or certificate data from a backend']
      }
    },
    vscode: {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      title: 'Visual Studio Code',
      category: 'Code Editor',
      tags: ['Editor', 'Extensions'],
      desc: {
        ms: 'VS Code ialah editor utama saya untuk tulis, susun, dan semak kod. Extension bantu saya kerja lebih laju, contohnya formatting, syntax highlight, dan live preview.',
        en: 'VS Code is my main editor for writing, organizing, and checking code. Extensions help me move faster with formatting, syntax highlighting, and live preview.'
      },
      uses: {
        ms: ['Tulis HTML, CSS, JavaScript, dan Python', 'Semak error dan struktur fail', 'Preview perubahan semasa membina laman'],
        en: ['Write HTML, CSS, JavaScript, and Python', 'Check errors and file structure', 'Preview changes while building sites']
      }
    },
    github: {
      icon: 'https://cdn.simpleicons.org/github/FFFFFF',
      title: 'GitHub',
      category: 'Version Control',
      tags: ['Portfolio', 'Repository'],
      desc: {
        ms: 'GitHub saya guna untuk simpan kod projek, susun repository, dan tunjuk hasil kerja kepada orang lain. Ia juga bantu jejak perubahan kod.',
        en: 'I use GitHub to store project code, organize repositories, and show my work to others. It also helps track code changes.'
      },
      uses: {
        ms: ['Simpan projek portfolio dan eksperimen', 'Tunjuk kod kepada recruiter atau rakan', 'Jejak versi dan perubahan projek'],
        en: ['Store portfolio projects and experiments', 'Show code to recruiters or peers', 'Track versions and project changes']
      }
    },
    supabase: {
      icon: 'https://cdn.simpleicons.org/supabase/3FCF8E',
      title: 'Supabase',
      category: 'Backend',
      tags: ['Database', 'API'],
      desc: {
        ms: 'Supabase saya guna sebagai backend ringan untuk simpan dan tarik data seperti projek, sijil, dan tetapan portfolio melalui API.',
        en: 'I use Supabase as a lightweight backend to store and fetch data such as projects, certificates, and portfolio settings through an API.'
      },
      uses: {
        ms: ['Simpan data projek dan sijil', 'Tarik data ke laman portfolio', 'Urus content tanpa edit HTML setiap kali'],
        en: ['Store project and certificate data', 'Fetch data into the portfolio site', 'Manage content without editing HTML every time']
      }
    },
    python: {
      icon: 'https://cdn.simpleicons.org/python/3776AB',
      title: 'Python',
      category: 'Programming',
      tags: ['Automation', 'Data'],
      desc: {
        ms: 'Python saya guna untuk scripting, analisis data, automasi kerja kecil, dan asas machine learning. Syntax dia jelas, jadi senang untuk test idea cepat.',
        en: 'I use Python for scripting, data analysis, small automation tasks, and machine learning basics. Its clear syntax makes it easy to test ideas quickly.'
      },
      uses: {
        ms: ['Bersihkan dan proses data', 'Tulis skrip automasi', 'Eksperimen model AI asas'],
        en: ['Clean and process data', 'Write automation scripts', 'Experiment with basic AI models']
      }
    },
    colab: {
      icon: 'https://cdn.simpleicons.org/googlecolab/F9AB00',
      title: 'Google Colab',
      category: 'AI Notebook',
      tags: ['Notebook', 'Experiment'],
      desc: {
        ms: 'Google Colab ialah tempat saya buat eksperimen Python dan AI dalam notebook tanpa perlu setup environment berat di laptop.',
        en: 'Google Colab is where I run Python and AI experiments in notebooks without setting up a heavy local environment.'
      },
      uses: {
        ms: ['Run notebook untuk data dan model', 'Test kod Python dengan cepat', 'Guna GPU/compute cloud bila perlu'],
        en: ['Run notebooks for data and models', 'Test Python code quickly', 'Use cloud compute when needed']
      }
    },
    pandas: {
      icon: 'https://cdn.simpleicons.org/pandas/150458',
      title: 'Pandas',
      category: 'Data Analysis',
      tags: ['Dataset', 'Cleaning'],
      desc: {
        ms: 'Pandas membantu saya baca dataset, tapis data, bersihkan nilai, dan faham pattern sebelum data digunakan untuk analisis atau model.',
        en: 'Pandas helps me read datasets, filter data, clean values, and understand patterns before using the data for analysis or models.'
      },
      uses: {
        ms: ['Baca CSV dan jadual data', 'Buang data kosong atau pelik', 'Cari ringkasan dan insight awal'],
        en: ['Read CSV files and tables', 'Remove empty or odd data', 'Find summaries and early insights']
      }
    },
    tensorflow: {
      icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
      title: 'TensorFlow',
      category: 'Machine Learning',
      tags: ['Model', 'Training'],
      desc: {
        ms: 'TensorFlow digunakan untuk bina dan latih model machine learning. Saya guna pada tahap pembelajaran untuk faham aliran data, training, dan prediction.',
        en: 'TensorFlow is used to build and train machine learning models. I use it at a learning level to understand data flow, training, and prediction.'
      },
      uses: {
        ms: ['Latih model asas', 'Fahami prediction dan accuracy', 'Eksperimen dengan dataset kecil'],
        en: ['Train basic models', 'Understand prediction and accuracy', 'Experiment with small datasets']
      }
    },
    arduino: {
      icon: 'https://cdn.simpleicons.org/arduino/00878F',
      title: 'Arduino IDE',
      category: 'Embedded',
      tags: ['Microcontroller', 'Upload Code'],
      desc: {
        ms: 'Arduino IDE saya guna untuk tulis dan upload kod ke board seperti ESP32. Ia penting untuk projek IoT yang melibatkan sensor dan hardware.',
        en: 'I use Arduino IDE to write and upload code to boards like ESP32. It is important for IoT projects involving sensors and hardware.'
      },
      uses: {
        ms: ['Upload kod ke ESP32', 'Test sensor dan output', 'Debug projek hardware asas'],
        en: ['Upload code to ESP32', 'Test sensors and outputs', 'Debug basic hardware projects']
      }
    },
    esp32: {
      icon: 'https://cdn.simpleicons.org/espressif/E7352C',
      title: 'ESP32',
      category: 'IoT Board',
      tags: ['Wi-Fi', 'Sensors'],
      desc: {
        ms: 'ESP32 ialah microcontroller dengan Wi-Fi/Bluetooth. Saya guna untuk projek IoT yang perlu baca sensor dan hantar data ke aplikasi atau dashboard.',
        en: 'ESP32 is a microcontroller with Wi-Fi/Bluetooth. I use it for IoT projects that read sensors and send data to an app or dashboard.'
      },
      uses: {
        ms: ['Sambung sensor kepada internet', 'Hantar bacaan ke dashboard', 'Bina prototaip IoT murah dan fleksibel'],
        en: ['Connect sensors to the internet', 'Send readings to a dashboard', 'Build affordable and flexible IoT prototypes']
      }
    },
    blynk: {
      iconText: 'B',
      title: 'Blynk IoT',
      category: 'IoT Platform',
      tags: ['Dashboard', 'Mobile App'],
      desc: {
        ms: 'Blynk IoT digunakan untuk buat dashboard telefon/web bagi monitor data sensor dan kawal device dari jauh.',
        en: 'Blynk IoT is used to create phone or web dashboards for monitoring sensor data and controlling devices remotely.'
      },
      uses: {
        ms: ['Pantau bacaan sensor real-time', 'Kawal device dari aplikasi', 'Paparkan status projek IoT'],
        en: ['Monitor real-time sensor readings', 'Control devices from an app', 'Display IoT project status']
      }
    },
    iot: {
      iconText: 'IO',
      title: 'IoT Sensors',
      category: 'Hardware',
      tags: ['Input', 'Real-world Data'],
      desc: {
        ms: 'Sensor IoT digunakan untuk baca keadaan dunia sebenar seperti suhu, kelembapan, cahaya, jarak, atau pergerakan.',
        en: 'IoT sensors read real-world conditions such as temperature, humidity, light, distance, or motion.'
      },
      uses: {
        ms: ['Ambil data daripada persekitaran', 'Gabung sensor dengan ESP32', 'Jadikan projek lebih praktikal'],
        en: ['Collect data from the environment', 'Pair sensors with ESP32', 'Make projects more practical']
      }
    },
    circuit: {
      iconText: 'PCB',
      title: 'Circuit Design',
      category: 'Electronics',
      tags: ['Wiring', 'Prototype'],
      desc: {
        ms: 'Circuit design ialah cara saya rancang sambungan komponen seperti sensor, resistor, LED, relay, dan board supaya projek hardware berfungsi dengan stabil.',
        en: 'Circuit design is how I plan component connections such as sensors, resistors, LEDs, relays, and boards so hardware projects work reliably.'
      },
      uses: {
        ms: ['Susun wiring dengan lebih kemas', 'Kurangkan salah sambung komponen', 'Bina prototaip sebelum kemas kini final'],
        en: ['Arrange wiring more clearly', 'Reduce wrong component connections', 'Build prototypes before final improvements']
      }
    }
  };

  function skillIconHtml(skill) {
    if (skill.icon) return `<img class="skill-modal-logo" src="${skill.icon}" alt="${skill.title}">`;
    return `<div class="skill-modal-fallback">${skill.iconText || skill.title.slice(0, 2)}</div>`;
  }

  function openSkillModal(key) {
    const skill = skillStories[key];
    if (!skill) return;
    const lang = localStorage.getItem('lang') || 'ms';
    const tagsHtml = skill.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const usesHtml = skill.uses[lang].map(item => `<li>${item}</li>`).join('');
    document.getElementById('modalContent').innerHTML = `
      <div class="modal-body skill-modal">
        <div class="skill-modal-head">
          <div class="skill-modal-icon">${skillIconHtml(skill)}</div>
          <div>
            <div class="modal-category">${skill.category}</div>
            <div class="modal-title" id="modalTitle">${skill.title}</div>
          </div>
        </div>
        <div class="modal-tags">${tagsHtml}</div>
        <div class="modal-desc">${skill.desc[lang]}</div>
        <div class="story-block-title">${lang === 'en' ? 'Used for' : 'Digunakan untuk'}</div>
        <ul class="story-list">${usesHtml}</ul>
      </div>`;
    openModalShell();
  }

  const educationStories = {
    skksi: {
      category: { ms: 'Sekolah Rendah', en: 'Primary School' },
      title: 'SK Sungai Kapar Indah',
      tags: ['2014 - 2017', 'Klang'],
      desc: {
        ms: 'Ini fasa awal saya mula bina asas sebagai pelajar. Waktu sekolah rendah, benda paling penting ialah belajar disiplin, biasakan diri dengan kelas, kerja sekolah, dan cara bawa diri dengan cikgu serta kawan-kawan.',
        en: 'This was the early phase where I built my foundation as a student. Primary school taught me discipline, classroom habits, homework routines, and how to carry myself with teachers and friends.'
      },
      highlights: {
        ms: ['Mula bina asas akademik', 'Belajar disiplin dan rutin sekolah', 'Kenal cara belajar dalam kelas'],
        en: ['Built early academic foundations', 'Learned school discipline and routines', 'Understood classroom learning habits']
      }
    },
    skrp: {
      category: { ms: 'Sekolah Rendah', en: 'Primary School' },
      title: 'SK Rantau Panjang',
      tags: ['2018 - 2019', 'UPSR 2A 2B 2C'],
      desc: {
        ms: 'Di sini saya melalui tahun akhir sekolah rendah dan mula hadap peperiksaan besar pertama, UPSR. Fasa ini ajar saya fokus, ulang kaji, dan belajar terima keputusan sebagai titik mula untuk jadi lebih baik.',
        en: 'This was where I went through the final years of primary school and faced my first major exam, UPSR. It taught me focus, revision, and how to treat results as a starting point for growth.'
      },
      highlights: {
        ms: ['Hadap UPSR buat kali pertama', 'Belajar ulang kaji dengan lebih serius', 'Mula faham pentingnya konsisten'],
        en: ['Faced UPSR for the first time', 'Took revision more seriously', 'Started understanding consistency']
      }
    },
    smtk: {
      category: { ms: 'Sekolah Menengah', en: 'Secondary School' },
      title: 'SMK Tinggi Klang',
      tags: ['2020 - 2024', 'SPM 5A', 'Yayasan Selangor'],
      desc: {
        ms: 'Sekolah menengah ialah tempat saya banyak berubah. Saya belajar berdikari, hadap tekanan akademik, hidup sebagai pelajar asrama, dan mula serius cari arah masa depan. Di sinilah saya mula nampak minat terhadap teknologi dan pembelajaran kendiri.',
        en: 'Secondary school was where I changed a lot. I learned independence, academic pressure, boarding school life, and started taking my future direction seriously. This was also where my interest in technology and self-learning grew.'
      },
      highlights: {
        ms: ['Pelajar asrama dan penerima biasiswa Yayasan Selangor', 'Mula bina minat teknologi', 'Sediakan diri untuk SPM'],
        en: ['Boarding student and Yayasan Selangor scholarship recipient', 'Started growing a tech interest', 'Prepared for SPM']
      }
    },
    kmj: {
      category: { ms: 'Matrikulasi', en: 'Matriculation' },
      title: 'Kolej Matrikulasi Johor',
      tags: ['2025 - 2026', 'PNGA 3.93', 'UKM FTSM 2026'],
      desc: {
        ms: 'Matrikulasi ialah fasa saya bina momentum selepas SPM. Jadual lebih padat, topik lebih laju, dan saya perlu belajar urus masa dengan lebih matang. Di sini juga saya terus kuatkan portfolio, coding, dan sasaran ke bidang komputer.',
        en: 'Matriculation is where I built momentum after SPM. The schedule is tighter, topics move faster, and I had to manage time more maturely. This is also where I continued strengthening my portfolio, coding, and computing goals.'
      },
      highlights: {
        ms: ['PNGA 3.93', 'Terus bina portfolio dan projek', 'Sasaran ke FTSM UKM'],
        en: ['PNGA 3.93', 'Kept building portfolio and projects', 'Aiming for UKM FTSM']
      }
    },
    upsr: {
      category: { ms: 'Keputusan', en: 'Result' },
      title: 'UPSR',
      tags: ['2019', '2A 2B 2C'],
      desc: {
        ms: 'UPSR ialah keputusan besar pertama saya. Walaupun bukan sempurna, keputusan ini jadi titik mula untuk saya faham cara belajar, kelemahan sendiri, dan pentingnya usaha berterusan.',
        en: 'UPSR was my first major result. Even though it was not perfect, it became a starting point for understanding how I learn, my weaknesses, and the value of consistent effort.'
      },
      highlights: {
        ms: ['Keputusan: 2A 2B 2C', 'Belajar daripada pengalaman peperiksaan', 'Jadi asas untuk sekolah menengah'],
        en: ['Result: 2A 2B 2C', 'Learned from exam experience', 'Built a base for secondary school']
      }
    },
    spm: {
      category: { ms: 'Keputusan', en: 'Result' },
      title: 'SPM',
      tags: ['2024', '5A 1B 2C 1D'],
      desc: {
        ms: 'SPM ialah fasa yang paling mencabar dan banyak membentuk saya. Saya belajar hadap pressure, susun strategi ulang kaji, dan terus berusaha walaupun ada subjek yang berat.',
        en: 'SPM was one of the most challenging phases that shaped me. I learned to handle pressure, plan revision strategy, and keep going even with difficult subjects.'
      },
      highlights: {
        ms: ['Keputusan: 5A 1B 2C 1D', 'Bina disiplin ulang kaji', 'Jadi laluan ke matrikulasi'],
        en: ['Result: 5A 1B 2C 1D', 'Built revision discipline', 'Opened the path to matriculation']
      }
    },
    pnga: {
      category: { ms: 'Keputusan', en: 'Result' },
      title: 'PNGA 3.93',
      tags: ['Matrikulasi', 'Semester result'],
      desc: {
        ms: 'PNGA ini menunjukkan usaha saya untuk kekal konsisten di matrikulasi. Ia bukan sekadar nombor, tapi bukti saya boleh sesuaikan diri dengan pace belajar yang lebih laju.',
        en: 'This PNGA shows my effort to stay consistent in matriculation. It is not just a number, but proof that I can adapt to a faster learning pace.'
      },
      highlights: {
        ms: ['PNGA: 3.93', 'Konsisten dalam jadual padat', 'Motivasi untuk terus ke bidang komputer'],
        en: ['PNGA: 3.93', 'Consistent in a packed schedule', 'Motivation to continue into computing']
      }
    }
  };

  const achievementStories = {
    exclusive: {
      category: { ms: 'Pencapaian', en: 'Achievement' },
      title: { ms: 'Calon Eksklusif SPM', en: 'Exclusive SPM Candidate' },
      tags: ['2024', 'SMK Tinggi Klang'],
      desc: {
        ms: 'Dipilih sebagai calon eksklusif SPM ialah satu pengiktirafan yang menaikkan semangat saya untuk terus fokus. Ia jadi reminder bahawa usaha yang konsisten boleh nampak, walaupun perjalanan belajar kadang-kadang berat.',
        en: 'Being selected as an exclusive SPM candidate was a recognition that motivated me to stay focused. It reminded me that consistent effort can be seen, even when the learning journey gets heavy.'
      },
      highlights: {
        ms: ['Pengiktirafan daripada sekolah', 'Motivasi untuk terus usaha', 'Berkait dengan persediaan SPM'],
        en: ['Recognition from school', 'Motivation to keep pushing', 'Connected to SPM preparation']
      },
      certs: [
        {
          label: 'Sijil Program Supermentor Calon Eksklusif SPM 2024',
          src: 'assets/certificates/exclusive-spm-candidate.jpg'
        }
      ]
    },
    harapan: {
      category: { ms: 'Pencapaian', en: 'Achievement' },
      title: { ms: 'Pelajar Harapan (T3-5)', en: 'Harapan Student (Form 3-5)' },
      tags: ['2022 - 2024', 'AYSK'],
      desc: {
        ms: 'Anugerah Pelajar Harapan dari Tingkatan 3 hingga Tingkatan 5 menunjukkan perkembangan saya dari tahun ke tahun. Bagi saya, ia bukan tentang jadi sempurna, tapi tentang orang nampak potensi dan usaha yang saya cuba bawa.',
        en: 'The Harapan Student award from Form 3 to Form 5 showed my growth year by year. For me, it was not about being perfect, but about people seeing the potential and effort I carried.'
      },
      highlights: {
        ms: ['Diterima berturut-turut T3 hingga T5', 'Tanda perkembangan konsisten', 'Bina keyakinan sebagai pelajar'],
        en: ['Received consecutively from Form 3 to Form 5', 'A sign of consistent growth', 'Built confidence as a student']
      },
      certs: [
        {
          label: 'Sijil Murid Harapan - Peperiksaan Pertengahan Tahun 2023/2024',
          src: 'assets/certificates/murid-harapan-2023-2024.jpg'
        },
        {
          label: 'Sijil Murid Harapan - Peperiksaan Pertengahan Tahun 2024/2025',
          src: 'assets/certificates/murid-harapan-2024-2025.jpg'
        }
      ]
    },
    excellent: {
      category: { ms: 'Pencapaian', en: 'Achievement' },
      title: { ms: 'Pelajar Cemerlang SPM', en: 'Excellent SPM Student' },
      tags: ['2025', 'SPM'],
      desc: {
        ms: 'Pengiktirafan sebagai Pelajar Cemerlang SPM jadi penutup yang bermakna untuk perjalanan sekolah menengah saya. Ia mengingatkan saya bahawa usaha semasa SPM memang berbaloi.',
        en: 'Being recognised as an Excellent SPM Student was a meaningful close to my secondary school journey. It reminded me that the effort during SPM was worth it.'
      },
      highlights: {
        ms: ['Diiktiraf selepas keputusan SPM', 'Bukti usaha akademik', 'Jadi semangat untuk fasa matrikulasi'],
        en: ['Recognised after SPM results', 'Proof of academic effort', 'Motivation for matriculation']
      },
      certs: [
        {
          label: 'Sijil Anugerah Murid Cemerlang SPM 2024',
          src: 'assets/certificates/murid-cemerlang-spm-2024.jpg'
        }
      ]
    },
    scholarship: {
      category: { ms: 'Pencapaian', en: 'Achievement' },
      title: { ms: 'Biasiswa Yayasan Selangor', en: 'Yayasan Selangor Scholarship' },
      tags: ['2020 - 2024', 'RM1,000 / year'],
      desc: {
        ms: 'Biasiswa Yayasan Selangor membantu perjalanan saya sebagai pelajar asrama dan jadi satu amanah untuk terus jaga prestasi. Ia juga ajar saya bahawa peluang perlu dibalas dengan usaha.',
        en: 'The Yayasan Selangor scholarship supported my journey as a boarding student and became a responsibility to maintain my performance. It taught me that opportunities should be answered with effort.'
      },
      highlights: {
        ms: ['Penerima biasiswa RM1,000 setahun', 'Sokongan sepanjang sekolah menengah', 'Bina rasa tanggungjawab akademik'],
        en: ['RM1,000 yearly scholarship recipient', 'Support throughout secondary school', 'Built academic responsibility']
      },
      certs: [
        {
          label: 'Sijil Rancangan Khas Pendidikan KPM - Yayasan Selangor',
          src: 'assets/certificates/yayasan-selangor-rkp-tingkatan-5-2024.jpg'
        }
      ]
    }
  };

  function renderEvidenceSlots(items) {
    const lang = localStorage.getItem('lang') || 'ms';
    const label = lang === 'en' ? 'Certificate slot' : 'Ruang sijil';
    return items.map((item, i) => {
      const evidence = typeof item === 'string' ? { label: item } : item;
      const title = evidence.label || evidence.title || label;
      const src = evidence.src || '';
      const click = src ? `onclick="event.stopPropagation(); openLightbox('${src}')"` : `onclick="event.stopPropagation()"`;
      return `
        <button class="story-photo-slot evidence-slot certificate-slot ${src ? 'has-evidence-image' : ''}" ${click} type="button" aria-label="${title}">
          ${src ? `<img src="${src}" alt="${title}" loading="lazy">` : ''}
          <span>${label} 0${i + 1}</span>
          <strong>${title}</strong>
          <small>${src ? (lang === 'en' ? 'Click to view larger' : 'Klik untuk lihat besar') : (lang === 'en' ? 'Replace with your image URL later' : 'Tukar dengan URL gambar nanti')}</small>
        </button>
      `;
    }).join('');
  }

  function openEducationModal(key) {
    const story = educationStories[key];
    if (!story) return;
    const lang = localStorage.getItem('lang') || 'ms';
    const tagsHtml = story.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const points = story.highlights[lang].map(item => `<li>${item}</li>`).join('');
    document.getElementById('modalContent').innerHTML = `
      <div class="modal-body story-modal">
        <div class="modal-category">${story.category[lang]}</div>
        <div class="modal-title" id="modalTitle">${story.title}</div>
        <div class="modal-tags">${tagsHtml}</div>
        <div class="modal-desc">${story.desc[lang]}</div>
        <div class="story-block-title">${lang === 'en' ? 'Story highlights' : 'Inti cerita'}</div>
        <ul class="story-list">${points}</ul>
      </div>`;
    openModalShell();
  }

  function openAchievementModal(key) {
    const story = achievementStories[key];
    if (!story) return;
    const lang = localStorage.getItem('lang') || 'ms';
    const tagsHtml = story.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const points = story.highlights[lang].map(item => `<li>${item}</li>`).join('');
    document.getElementById('modalContent').innerHTML = `
      <div class="modal-body story-modal">
        <div class="modal-category">${story.category[lang]}</div>
        <div class="modal-title" id="modalTitle">${story.title[lang]}</div>
        <div class="modal-tags">${tagsHtml}</div>
        <div class="modal-desc">${story.desc[lang]}</div>
        <div class="story-block-title">${lang === 'en' ? 'Why it matters' : 'Kenapa ia bermakna'}</div>
        <ul class="story-list">${points}</ul>
        <div class="modal-gallery-label">${lang === 'en' ? 'Evidence' : 'Bukti sijil'}</div>
        <div class="story-photo-grid">${renderEvidenceSlots(story.certs)}</div>
      </div>`;
    openModalShell();
  }

  function handleStoryCardKey(e, type, key) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      type === 'achievement' ? openAchievementModal(key) : openEducationModal(key);
    }
  }

  async function openModal(id) {
    const p = allProjects.find(p => p.id === id);
    if (!p) return;
    const lang = localStorage.getItem('lang') || 'ms';
    const meta = parseProjectMeta(p.link);
    const heroImg = p.image_url ? `<img class="modal-hero-img" src="${p.image_url}" alt="${p.name}" onerror="this.style.display='none'">` : '';
    const tagsHtml = p.tags ? p.tags.split(',').map(t => `<span class="modal-tag">${t.trim()}</span>`).join('') : '';
    const reportAttrs = meta.report?.startsWith('data:') ? 'download="project-report"' : 'target="_blank" rel="noopener"';
    const linkBtn = `
      <div class="modal-actions">
        ${meta.demo ? `<a class="modal-link" href="${meta.demo}" target="_blank" rel="noopener">&#8599; ${lang === 'ms' ? 'Lihat Demo' : 'View Demo'}</a>` : ''}
        ${meta.telegram ? `<a class="modal-link modal-link-ghost" href="${meta.telegram}" target="_blank" rel="noopener">Bot ${lang === 'ms' ? 'Telegram' : 'Telegram'}</a>` : ''}
        ${meta.github ? `<a class="modal-link modal-link-ghost" href="${meta.github}" target="_blank" rel="noopener">&#60;/&#62; ${lang === 'ms' ? 'Lihat Kod' : 'View Code'}</a>` : ''}
        ${meta.codeFile ? `<a class="modal-link modal-link-ghost" href="${meta.codeFile}" target="_blank" rel="noopener" ${meta.codeName ? `download="${meta.codeName}"` : ''}>&#60;/&#62; ${lang === 'ms' ? 'Fail Kod' : 'Code File'}</a>` : ''}
        ${meta.report ? `<a class="modal-link modal-link-ghost" href="${meta.report}" ${reportAttrs}>PDF ${lang === 'ms' ? 'Report' : 'Report'}</a>` : ''}
      </div>`;
    const detail = localizedProjectDetails(p.long_description, lang);
    const desc = detail.desc || localizedProjectText(p.description, lang);
    const defaultProblem = lang === 'ms' ? 'Projek ini dibina untuk menyelesaikan keperluan sebenar dengan interface yang mudah difahami.' : 'This project was built around a real need with an interface that is easy to understand.';
    const defaultSolution = lang === 'ms' ? 'Saya fokus pada struktur, data, dan interaksi supaya pengguna boleh terus faham apa yang perlu dibuat.' : 'I focused on structure, data, and interaction so users can quickly understand what to do.';
    const defaultLearning = lang === 'ms' ? 'Bahagian paling bernilai ialah belajar susun idea teknikal menjadi hasil yang boleh digunakan.' : 'The most valuable part was turning a technical idea into something usable.';
    const quickFacts = `
      <div class="project-facts">
        <div><span>${lang === 'ms' ? 'Kategori' : 'Category'}</span><strong>${p.category || 'Other'}</strong></div>
        <div><span>Status</span><strong>${meta.status || (meta.demo ? 'Completed' : 'Case Study')}</strong></div>
        <div><span>${lang === 'ms' ? 'Teknologi' : 'Tech'}</span><strong>${p.tags ? p.tags.split(',').slice(0, 3).map(t => t.trim()).join(', ') : '-'}</strong></div>
      </div>`;
    const caseStudy = `
      <div class="case-study-grid">
        <div><span>01</span><strong>${lang === 'ms' ? 'Masalah' : 'Problem'}</strong><p>${detail.problem || defaultProblem}</p></div>
        <div><span>02</span><strong>Solution</strong><p>${detail.solution || defaultSolution}</p></div>
        <div><span>03</span><strong>${lang === 'ms' ? 'Pembelajaran' : 'Learning'}</strong><p>${detail.learning || defaultLearning}</p></div>
      </div>`;
    const architectureSteps = meta.architecture ? meta.architecture.split('>').map(step => step.trim()).filter(Boolean) : [];
    const architectureHtml = architectureSteps.length ? `
      <div class="modal-gallery-label">${lang === 'ms' ? 'Architecture Flow' : 'Architecture Flow'}</div>
      <div class="architecture-flow">
        ${architectureSteps.map((step, index) => `<div class="arch-step"><span>${String(index + 1).padStart(2, '0')}</span><strong>${step}</strong></div>`).join('')}
      </div>` : '';
    let galleryHtml = '';
    if (p.images) {
      const imgs = parseProjectImages(p.images);
      if (imgs.length) galleryHtml = `<div class="modal-gallery-label">${lang === 'ms' ? 'Galeri' : 'Gallery'}</div><div class="modal-gallery">${imgs.map(src => `<img src="${src}" alt="${p.name}" onclick="openLightbox('${src}')" onerror="this.style.display='none'">`).join('')}</div>`;
    }
    document.getElementById('modalContent').innerHTML = `${heroImg}<div class="modal-body"><div class="modal-category">${p.category || ''}</div><div class="modal-title" id="modalTitle">${p.name}</div><div class="modal-tags">${tagsHtml}</div>${quickFacts}${linkBtn}<div class="modal-desc">${desc}</div>${caseStudy}${architectureHtml}${galleryHtml}</div>`;
    openModalShell();
  }
  function closeModal(e) { if (e.target === document.getElementById('modalOverlay')) closeModalDirect(); }
  function closeModalDirect() {
    const overlay = document.getElementById('modalOverlay');
    const wasOpen = overlay.classList.contains('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (wasOpen && lastFocusBeforeModal?.isConnected) {
      lastFocusBeforeModal.focus({ preventScroll: true });
    }
    lastFocusBeforeModal = null;
  }

  // ── CERTIFICATES ──
  async function loadCerts() {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/certificates?select=*&order=created_at.desc`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const data = await res.json();
      allCerts = data.filter(c => !parseCertMeta(c.name).hidden);
      renderCerts();
    } catch { document.getElementById('certGallery').innerHTML = '<div style="grid-column:1/-1;color:var(--muted);padding:20px;">Gagal memuatkan sijil.</div>'; }
  }

  function renderCerts() {
    const gallery = document.getElementById('certGallery');
    const actions = document.getElementById('certGalleryActions');
    const featuredCerts = allCerts.slice(0, FEATURED_CERT_LIMIT);
    const lang = localStorage.getItem('lang') || 'ms';
    if (!allCerts.length) {
      gallery.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">${lang === 'en' ? 'No certificates found.' : 'Tiada sijil dijumpai.'}</div>`;
      if (actions) actions.innerHTML = '';
      return;
    }
    gallery.innerHTML = featuredCerts.map(renderCertCard).join('');
    if (actions) {
      const showingText = lang === 'en'
        ? `Showing ${featuredCerts.length} selected proof items`
        : `Memaparkan ${featuredCerts.length} sijil pilihan`;
      actions.innerHTML = `
        <div class="cert-gallery-count">${showingText}</div>
        <div class="cert-gallery-action-buttons">
          ${allCerts.length > FEATURED_CERT_LIMIT ? `<button class="filter-btn" type="button" onclick="openCertificateArchive()" data-en="View Full Archive" data-ms="Lihat Arkib Penuh">${lang === 'en' ? 'View Full Archive' : 'Lihat Arkib Penuh'}</button>` : ''}
        </div>
      `;
    }
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function renderCertCard(c, extraClass = '') {
    const meta = parseCertMeta(c.name);
    const title = escapeHtml(meta.name || 'Sijil');
    const category = escapeHtml(meta.category || 'Other');
    const image = escapeHtml(c.image_url || '');
    return `
      <div class="cert-gallery-item ${extraClass}" data-cert-src="${image}" onclick="openLightbox(this.dataset.certSrc)">
        <img class="cert-gallery-img" src="${image}" alt="${title}" onerror="this.style.display='none'">
        <div class="cert-gallery-name">${title}</div>
        <div class="cert-gallery-cat">${category}</div>
      </div>`;
  }

  function getCertificateArchiveItems() {
    const query = certArchiveQuery.trim().toLowerCase();
    return allCerts.filter(c => {
      const meta = parseCertMeta(c.name);
      const matchesCategory = activeCertFilter === 'all' || meta.category === activeCertFilter;
      const haystack = `${meta.name || 'Sijil'} ${meta.category || ''}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });
  }

  function openCertificateArchive() {
    activeCertFilter = 'all';
    certArchiveQuery = '';
    const lang = localStorage.getItem('lang') || 'ms';
    document.getElementById('modalContent').innerHTML = `
      <div class="modal-body cert-archive-modal">
        <div class="modal-category">${lang === 'en' ? 'Proof archive' : 'Bukti / Sijil'}</div>
        <div class="modal-title" id="modalTitle">${lang === 'en' ? 'Selected Proof Archive' : 'Arkib Sijil Pilihan'}</div>
        <p class="modal-desc">${lang === 'en' ? 'All certificates are kept here so the portfolio stays focused on projects and key achievements.' : 'Semua sijil disimpan di sini supaya portfolio utama kekal fokus pada projek dan pencapaian penting.'}</p>
        <input class="project-search cert-archive-search" id="certArchiveSearch" type="search" placeholder="${lang === 'en' ? 'Search certificates...' : 'Cari sijil...'}" oninput="updateCertificateArchiveSearch(this.value)">
        <div class="filter-row cert-archive-filters">
          <button class="filter-btn active" type="button" onclick="filterCertificateArchive('all',this)" data-en="All" data-ms="Semua">${lang === 'en' ? 'All' : 'Semua'}</button>
          <button class="filter-btn" type="button" onclick="filterCertificateArchive('Academic',this)">Academic</button>
          <button class="filter-btn" type="button" onclick="filterCertificateArchive('Competition',this)">Competition</button>
          <button class="filter-btn" type="button" onclick="filterCertificateArchive('Workshop',this)">Workshop</button>
          <button class="filter-btn" type="button" onclick="filterCertificateArchive('Scholarship',this)">Scholarship</button>
          <button class="filter-btn" type="button" onclick="filterCertificateArchive('Other',this)">Other</button>
        </div>
        <div class="cert-gallery-count" id="certArchiveCount"></div>
        <div class="cert-gallery cert-archive-grid" id="certArchiveGrid"></div>
      </div>`;
    openModalShell();
    renderCertificateArchive();
  }

  function renderCertificateArchive() {
    const grid = document.getElementById('certArchiveGrid');
    const count = document.getElementById('certArchiveCount');
    if (!grid || !count) return;
    const lang = localStorage.getItem('lang') || 'ms';
    const certs = getCertificateArchiveItems();
    count.textContent = lang === 'en'
      ? `${certs.length} certificate${certs.length === 1 ? '' : 's'} found`
      : `${certs.length} sijil dijumpai`;
    grid.innerHTML = certs.length
      ? certs.map(c => renderCertCard(c, 'cert-archive-item')).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">${lang === 'en' ? 'No certificates match this search.' : 'Tiada sijil sepadan dengan carian ini.'}</div>`;
  }

  function filterCertificateArchive(cat, btn) {
    activeCertFilter = cat;
    btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCertificateArchive();
  }

  function updateCertificateArchiveSearch(value) {
    certArchiveQuery = value;
    renderCertificateArchive();
  }

  // ── LIGHTBOX ──
  function openLightbox(src) { document.getElementById('lightboxImg').src = src; document.getElementById('lightbox').classList.add('open'); }
  function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }

  // ── CONTACT FORM ──
  function showSiteToast(msg, type = 'success') {
    const t = document.getElementById('siteToast');
    t.textContent = msg;
    t.className = `toast show ${type}`;
    setTimeout(() => t.classList.remove('show'), 3500);
  }

  async function submitForm() {
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();
    if (!name || !email || !message) { showSiteToast('Sila isi semua ruangan dulu.', 'error'); return; }
    const btn = document.getElementById('formSubmit');
    btn.disabled = true; btn.innerHTML = '<span>Menghantar...</span>';
    const res = await fetch('https://formspree.io/f/xjgldagn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    if (res.ok) {
      document.getElementById('formContainer').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      showSiteToast('Mesej berjaya dihantar. Nice.', 'success');
    } else {
      btn.disabled = false;
      btn.innerHTML = '<span data-en="Send Message ✉️" data-ms="Hantar Mesej ✉️">Hantar Mesej ✉️</span>';
      showSiteToast('Gagal hantar. Cuba lagi.', 'error');
    }
  }

  // ── LANGUAGE ──
  function toggleLang() {
    const isEN = document.documentElement.getAttribute('data-lang') === 'en';
    const newLang = isEN ? 'ms' : 'en';
    setLang(newLang); localStorage.setItem('lang', newLang);
    renderVisibleProjects();
    renderCerts();
  }
  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.getElementById('langThumb').classList.toggle('on', lang === 'en');
    document.getElementById('langToggle')?.setAttribute('aria-pressed', String(lang === 'en'));
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ms');
    });
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      el.placeholder = lang === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-ms-placeholder');
      el.setAttribute('aria-label', el.placeholder);
    });
  }

  function handleToggleKey(event, action) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }

  // ── THEME ──
  function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    document.getElementById('thumb').classList.toggle('on', isLight);
    document.getElementById('tlbl').textContent = isLight ? 'Light' : 'Dark';
    document.getElementById('themeToggle')?.setAttribute('aria-pressed', String(isLight));
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  function toggleMobileNav() {
    const links = document.getElementById('navLinks');
    const btn = document.querySelector('.nav-menu-btn');
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  document.querySelectorAll('#navLinks .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
      const btn = document.querySelector('.nav-menu-btn');
      btn?.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });

  // ── FOOTER ADMIN TRIGGER ──
  let clickCount = 0, clickTimer;
  function handleFooterClick() {
    clickCount++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { clickCount = 0; }, 2000);
    if (clickCount >= 5) { clickCount = 0; window.location.href = 'admin.html'; }
  }

  // ESC key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModalDirect(); closeLightbox(); } });

  // ── INIT ──
  setLang(localStorage.getItem('lang') || 'ms');
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    document.getElementById('thumb').classList.add('on');
    document.getElementById('tlbl').textContent = 'Light';
    document.getElementById('themeToggle')?.setAttribute('aria-pressed', 'true');
  }
  loadProjects();
  loadCerts();
  loadCVLink();
  requestScrollUiUpdate();

  // ── CV LINK ──
  function getEmbeddableResumeUrl(url) {
    const driveMatch = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([^/?&]+)/);
    if (driveMatch?.[1]) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

    const ucMatch = url.match(/drive\.google\.com\/uc\?[^#]*id=([^&]+)/);
    if (ucMatch?.[1]) return `https://drive.google.com/file/d/${ucMatch[1]}/preview`;

    return url;
  }

  async function loadCVLink() {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/settings?key=eq.cv_link&select=*`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const data = await res.json();
      const btn = document.getElementById('cvBtn');
      if (btn && data.length && data[0].value) {
        const resumeUrl = data[0].value;
        const previewUrl = getEmbeddableResumeUrl(resumeUrl);
        btn.href = resumeUrl;
        btn.style.display = 'inline-block';
        const resumeBtn = document.getElementById('resumeBtn');
        if (resumeBtn) { resumeBtn.href = resumeUrl; resumeBtn.style.display = 'inline-block'; }
        const resumeOpenBtn = document.getElementById('resumeOpenBtn');
        if (resumeOpenBtn) { resumeOpenBtn.href = resumeUrl; resumeOpenBtn.style.display = 'inline-block'; }
        const resumePreview = document.getElementById('resumePreview');
        const resumeShell = resumePreview?.closest('.resume-pdf-shell');
        if (resumePreview && resumeShell) {
          resumePreview.src = previewUrl;
          resumeShell.classList.add('has-preview');
        }
      }
    } catch(e) { console.error(e); }
  }

// ================================================================
// BAMBAM PORTFOLIO CHATBOT
// Tampal <script src="chatbot.js"></script> sebelum </body>
// dalam portfolio page
// ================================================================

(function () {

  // ── FAQ DATA ──
  // UBAH: edit jawapan ikut kau punya info sebenar
  const FAQ = [
    {
      keywords: ['nama', 'name', 'siapa', 'who', 'pengenalan', 'introduce'],
      answer: 'Saya <b>Irham Nursyafizan bin Ramli</b>, juga dikenali sebagai <b>bambam</b>. Saya student developer dari Malaysia yang fokus pada <b>web apps</b>, <b>IoT systems</b>, AI/data dan projek teknologi praktikal.'
    },
    {
      keywords: ['projek', 'project', 'buat apa', 'kerja', 'hasil'],
      answer: 'Projek utama saya termasuk <b>FlowSense Dashboard</b> untuk monitor status air tandas secara realtime, <b>FlowSense IoT Prototype</b> dengan ESP32/sensor/Telegram bot, dan <b>Smart Attendance Verification System</b> menggunakan PHP + MySQL. Boleh scroll ke <a href="#projects" style="color:#7c6aff">bahagian Projek</a>.'
    },
    {
      keywords: ['flowsense', 'water', 'air', 'tandas', 'toilet', 'esp32', 'iot'],
      answer: '<b>FlowSense</b> ialah projek web + IoT untuk semak ketersediaan air tandas. Bahagian hardware guna <b>ESP32</b>, water sensor, raindrop sensor, LED indicator dan Telegram bot. Bahagian dashboard pula guna web app realtime untuk paparan student/admin.'
    },
    {
      keywords: ['attendance', 'kehadiran', 'ping pong', 'php', 'mysql', 'club', 'kelab'],
      answer: '<b>Smart Attendance Verification System</b> ialah sistem kehadiran Kelab Ping Pong SMK Tinggi Klang. Ia guna <b>PHP</b> dan <b>MySQL</b> untuk urus ahli, aktiviti, rekod kehadiran dan laporan admin.'
    },
    {
      keywords: ['skill', 'kemahiran', 'tahu', 'boleh', 'programming', 'language', 'bahasa', 'stack'],
      answer: 'Stack saya sekarang: <b>HTML, CSS, JavaScript</b> untuk frontend, <b>Python</b> untuk automasi/data, <b>PHP + MySQL</b> untuk sistem web, <b>Firebase/Supabase</b> untuk backend data, dan <b>ESP32/Arduino/Blynk</b> untuk IoT.'
    },
    {
      keywords: ['education', 'pendidikan', 'sekolah', 'belajar', 'study', 'matrikulasi', 'spm', 'result'],
      answer: 'Saya sekarang di <b>Kolej Matrikulasi Johor</b> dalam aliran Sains Komputer dengan <b>PNGA 3.93</b>. Sebelum ni saya di <b>SMK Tinggi Klang</b>, keputusan SPM <b>5A 1B 2C 1D</b>. Saya juga pernah di SK Sungai Kapar Indah dan SK Rantau Panjang.'
    },
    {
      keywords: ['achievement', 'pencapaian', 'award', 'anugerah', 'sijil', 'certificate'],
      answer: 'Antara pencapaian saya: <b>Calon Eksklusif SPM</b>, <b>Pelajar Harapan</b> dari Tingkatan 3 hingga 5, <b>Pelajar Cemerlang SPM</b>, dan <b>Biasiswa Yayasan Selangor</b>. Boleh buka <a href="#achievements" style="color:#7c6aff">bahagian Pencapaian</a> untuk sijil dan cerita ringkas.'
    },
    {
      keywords: ['contact', 'hubungi', 'email', 'instagram', 'reach', 'linkedin', 'github'],
      answer: 'Boleh hubungi saya melalui:<br><b>Email:</b> irhamnursyafizan@gmail.com<br><b>Instagram:</b> @bambamswift<br><b>GitHub:</b> github.com/bambam0711<br><b>LinkedIn:</b> irham-nursyafizan<br>Atau terus ke <a href="#contact" style="color:#7c6aff">bahagian Hubungi</a>.'
    },
    {
      keywords: ['ukm', 'universiti', 'university', 'degree', 'course', 'program', 'ftsm'],
      answer: 'Saya sedang mensasarkan <b>UKM FTSM 2026</b> sebab minat saya dekat dengan web, AI, data dan sistem yang boleh bantu orang. Saya nak sambung laluan komputer dengan lebih serius di peringkat degree.'
    },
    {
      keywords: ['resume', 'cv', 'pdf', 'download'],
      answer: 'Kalau CV/resume tersedia, button <b>Download CV</b> akan muncul di hero dan <a href="#resume" style="color:#7c6aff">bahagian Resume</a>. Di situ juga ada ringkasan pendidikan, pengalaman projek dan contact.'
    },
    {
      keywords: ['website', 'buat', 'build', 'design', 'portfolio', 'portfolio ini', 'web ini', 'laman', 'site'],
      answer: 'Website portfolio ini dibina dengan <b>HTML, CSS dan JavaScript</b>. Data projek, sijil dan tetapan CV ditarik dari <b>Supabase</b>, ada bilingual BM/EN, theme dark/light, modal projek, galeri sijil dan contact form.'
    },
    {
      keywords: ['hobi', 'hobby', 'minat', 'interest', 'suka', 'free time'],
      answer: 'Minat saya sekarang banyak pada <b>web development</b>, <b>AI/data</b>, dan <b>IoT</b>. Saya suka bina benda yang nampak simple di depan, tapi ada logik yang betul-betul selesaikan masalah di belakang.'
    },
    {
      keywords: ['hello', 'hi', 'hey', 'helo', 'alo', 'assalamualaikum', 'salam'],
      answer: 'Hello! Saya Asisten Portfolio <b>bambam</b>. Boleh tanya tentang projek, kemahiran, pendidikan, pencapaian, UKM FTSM, resume atau cara hubungi Irham.'
    },
    {
      keywords: ['terima kasih', 'thanks', 'thank you', 'tq', 'thx'],
      answer: 'Sama-sama. Ada lagi yang nak tahu tentang bambam?'
    },
    {
      keywords: ['bye', 'goodbye', 'selamat tinggal', 'chao', 'ok thanks'],
      answer: 'Terima kasih kerana melawat portfolio bambam. Jumpa lagi.'
    }
  ];

  const DEFAULT_REPLY = 'Saya belum pasti soalan tu tentang bahagian mana. Cuba tanya tentang <b>projek</b>, <b>FlowSense</b>, <b>kemahiran</b>, <b>pendidikan</b>, <b>pencapaian</b>, <b>resume</b>, atau <b>cara hubungi</b> bambam.';

  // ── STYLES ──
  const style = document.createElement('style');
  style.textContent = `
    #chat-bubble {
      position: fixed; bottom: 24px; right: 24px; z-index: 1000;
    }
    #chat-toggle {
      width: 52px; height: 52px; border-radius: 50%;
      background: linear-gradient(135deg, #7c6aff, #ff6a9b);
      border: none; cursor: pointer; display: flex;
      align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(124,106,255,0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      font-size: 22px;
    }
    #chat-toggle:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(124,106,255,0.5); }

    #chat-window {
      position: fixed; bottom: 88px; right: 24px;
      width: 320px; max-height: 460px;
      background: var(--bg, #0a0a0f);
      border: 1px solid rgba(124,106,255,0.2);
      border-radius: 16px; overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.4);
      display: none; flex-direction: column;
      z-index: 1000; animation: slideUp 0.25s ease;
    }
    #chat-window.open { display: flex; }
    @keyframes slideUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }

    #chat-header {
      padding: 14px 16px;
      background: linear-gradient(135deg, rgba(124,106,255,0.15), rgba(255,106,155,0.1));
      border-bottom: 1px solid rgba(124,106,255,0.2);
      display: flex; align-items: center; gap: 10px;
    }
    #chat-avatar {
      width: 32px; height: 32px; border-radius: 50%;
      background: linear-gradient(135deg, #7c6aff, #ff6a9b);
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; flex-shrink: 0;
    }
    #chat-header-info { flex: 1; }
    #chat-header-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; color: var(--text, #f0eeff); }
    #chat-header-status { font-size: 10px; color: #55ff96; display: flex; align-items: center; gap: 4px; }
    #chat-header-status::before { content:''; width:6px; height:6px; border-radius:50%; background:#55ff96; display:inline-block; animation: blink2 1.5s infinite; }
    @keyframes blink2 { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
    #chat-close { background:none; border:none; color:var(--muted,#888aaa); font-size:18px; cursor:pointer; padding:0; line-height:1; }

    #chat-messages {
      flex: 1; overflow-y: auto; padding: 14px;
      display: flex; flex-direction: column; gap: 10px;
      scrollbar-width: thin; scrollbar-color: rgba(124,106,255,0.2) transparent;
    }
    .msg { display: flex; gap: 8px; max-width: 90%; }
    .msg.user { align-self: flex-end; flex-direction: row-reverse; }
    .msg-bubble {
      padding: 9px 12px; border-radius: 12px;
      font-size: 12px; line-height: 1.6;
      font-family: 'DM Mono', monospace;
    }
    .msg.bot .msg-bubble {
      background: rgba(124,106,255,0.1); border: 1px solid rgba(124,106,255,0.2);
      color: var(--text, #f0eeff); border-radius: 4px 12px 12px 12px;
    }
    .msg.user .msg-bubble {
      background: linear-gradient(135deg, #7c6aff, #ff6a9b);
      color: #fff; border-radius: 12px 4px 12px 12px;
    }
    .msg-avatar {
      width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, #7c6aff, #ff6a9b);
      display: flex; align-items: center; justify-content: center; font-size: 12px;
      align-self: flex-end;
    }

    /* quick replies */
    #quick-replies {
      padding: 8px 14px; display: flex; flex-wrap: wrap; gap: 6px;
      border-top: 1px solid rgba(124,106,255,0.1);
    }
    .qr-btn {
      background: rgba(124,106,255,0.08); border: 1px solid rgba(124,106,255,0.2);
      color: #7c6aff; font-family: 'DM Mono', monospace;
      font-size: 10px; padding: 4px 10px; border-radius: 20px;
      cursor: pointer; transition: all 0.2s; white-space: nowrap;
    }
    .qr-btn:hover { background: rgba(124,106,255,0.18); }

    #chat-input-row {
      padding: 10px 14px; border-top: 1px solid rgba(124,106,255,0.15);
      display: flex; gap: 8px; align-items: center;
    }
    #chat-input {
      flex: 1; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(124,106,255,0.2); border-radius: 8px;
      padding: 8px 10px; color: var(--text, #f0eeff);
      font-family: 'DM Mono', monospace; font-size: 11px;
      outline: none; transition: border-color 0.2s;
    }
    #chat-input:focus { border-color: #7c6aff; }
    #chat-input::placeholder { color: #888aaa; }
    #chat-send {
      width: 32px; height: 32px; border-radius: 50%;
      background: linear-gradient(135deg, #7c6aff, #ff6a9b);
      border: none; cursor: pointer; display: flex;
      align-items: center; justify-content: center;
      font-size: 14px; transition: opacity 0.2s;
    }
    #chat-send:hover { opacity: 0.85; }

    /* typing indicator */
    .typing-dots { display: flex; gap: 4px; padding: 4px 0; }
    .typing-dots span {
      width: 6px; height: 6px; border-radius: 50%;
      background: #7c6aff; animation: bounce 1.2s infinite;
    }
    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes bounce { 0%,60%,100%{transform:translateY(0);} 30%{transform:translateY(-6px);} }

    @media (max-width: 520px) {
      #chat-bubble {
        bottom: 18px;
        right: 18px;
      }
      #chat-toggle {
        width: 50px;
        height: 50px;
      }
      #chat-window {
        left: 12px;
        right: 12px;
        bottom: 78px;
        width: auto;
        max-height: min(68dvh, 520px);
        border-radius: 16px;
      }
      #chat-messages {
        min-height: 160px;
      }
      #quick-replies {
        max-height: 76px;
        overflow-y: auto;
      }
      #chat-input-row {
        padding-bottom: max(10px, env(safe-area-inset-bottom));
      }
    }
  `;
  document.head.appendChild(style);

  // ── HTML ──
  const bubble = document.createElement('div');
  bubble.id = 'chat-bubble';
  bubble.innerHTML = `
    <div id="chat-window">
      <div id="chat-header">
        <div id="chat-avatar">🤖</div>
        <div id="chat-header-info">
          <div id="chat-header-name">bambam Assistant</div>
          <div id="chat-header-status">Online</div>
        </div>
        <button id="chat-close" onclick="toggleChat()">&#x2715;</button>
      </div>
      <div id="chat-messages"></div>
      <div id="quick-replies">
        <button class="qr-btn" onclick="sendQuick('Projek apa yang ada?')">Projek 🚀</button>
        <button class="qr-btn" onclick="sendQuick('Apa itu FlowSense?')">FlowSense</button>
        <button class="qr-btn" onclick="sendQuick('Apa kemahiran kau?')">Kemahiran 💻</button>
        <button class="qr-btn" onclick="sendQuick('Cara nak hubungi?')">Hubungi 📞</button>
      </div>
      <div id="chat-input-row">
        <input id="chat-input" type="text" placeholder="Tanya tentang bambam..." onkeydown="if(event.key==='Enter') sendMsg()">
        <button id="chat-send" onclick="sendMsg()">&#10148;</button>
      </div>
    </div>
    <button id="chat-toggle" onclick="toggleChat()" title="Chat dengan bambam Assistant">🤖</button>
  `;
  document.body.appendChild(bubble);

  // ── LOGIC ──
  let isOpen = false;

  window.toggleChat = function () {
    isOpen = !isOpen;
    const win = document.getElementById('chat-window');
    win.classList.toggle('open', isOpen);
    if (isOpen && document.getElementById('chat-messages').children.length === 0) {
      setTimeout(() => addBotMsg('Hello! Saya Asisten Portfolio <b>bambam</b> 🤖<br>Boleh tanya tentang projek, FlowSense, kemahiran, pendidikan, pencapaian, UKM FTSM, resume atau cara hubungi Irham.'), 300);
    }
  };

  window.sendQuick = function (text) {
    document.getElementById('chat-input').value = text;
    sendMsg();
  };

  window.sendMsg = function () {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    addUserMsg(text);
    showTyping();
    setTimeout(() => {
      removeTyping();
      addBotMsg(getReply(text));
    }, 800);
  };

  function getReply(text) {
    const lower = text.toLowerCase();
    for (const faq of FAQ) {
      if (faq.keywords.some(k => lower.includes(k))) return faq.answer;
    }
    return DEFAULT_REPLY;
  }

  function escapeChatText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function addUserMsg(text) {
    const msgs = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'msg user';
    div.innerHTML = `<div class="msg-bubble">${escapeChatText(text)}</div><div class="msg-avatar">👤</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addBotMsg(text) {
    const msgs = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.innerHTML = `<div class="msg-avatar">🤖</div><div class="msg-bubble">${text}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    const msgs = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'msg bot'; div.id = 'typing-indicator';
    div.innerHTML = `<div class="msg-avatar">🤖</div><div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('typing-indicator');
    if (t) t.remove();
  }

})();

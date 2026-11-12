document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. СЛОВАРЬ ПЕРЕВОДОВ
  // ==========================================
  const translations = {
    en: {
      nav_aim: "Our Aim", nav_engines: "Engines", nav_participants: "Team", nav_participate: "Participate",
      nav_login: "Login", nav_register: "Register", nav_dashboard: "Dashboard", nav_logout: "Logout",
      
      hero_title: "Do you want to <span>participate?</span>", hero_subtitle: "Read below to get information about taking part in the upcoming tournament.",
      
      about_tag: "About us", about_what: "What we do", about_desc: "Each Umut Rocketry model is the perfect combination of creativity and physics.",
      btn_learn_more: "Learn more",
      
      sub_engines: "Our Engines", title_specs: "NEW ENGINES",
      
      edit_p1: "Our team is passionate about innovation...", edit_p2: "We love experimenting...", btn_about_us: "More about us",

      about_title: "Rocketry Aim", about_subtitle: "Leading learners to love, respect, and defend their home country.",
      about_mission_title: "Our Mission", about_mission_text: "Umut Rocketry priority is to grow qualified instructors among learners...",
      about_science_title: "Science in Practice", about_science_text: "Decision made Model Rocketry, to deliver hand-made models...",
      about_why_title: "Why Model Rocketry?", about_why_p1: "What began as a science week experiment...", about_why_p2: "Qualified model-makers are encouraged...",

      engines_title: "Model Rocket Engines", engines_subtitle: "Solid propellant engines for rocketry sports and technical creativity.",
      engines_specs: "Technical Specifications", engines_safety: "Safety & Launch Instructions",
      
      // Переводы для списков характеристик
      spec_1: "Corpus material: Dense paper sleeve (20mm).",
      spec_2: "Nozzle: Pressed mineral composition.",
      spec_3: "Propellant: Potassium nitrate + charcoal.",
      spec_4: "Mass: Up to 40 grams.",
      
      safe_1: "Age restriction: 16+",
      safe_2: "Launch method: Remote control only.",
      safe_3: "Prohibited: Disassembling the engine.",
      
      engines_misfire: "Misfire Protocol", engines_misfire_text: "If the launch does not occur, wait at least 60 seconds...",
      engines_disposal: "Disposal", engines_disposal_text: "Faulty engines must be immersed in water for 24 hours...",
      
      participants_title: "Our Team", participants_subtitle: "Meet the young engineers and model-makers of Umut Rocketry.",
      part_1_name: "Elchibek Kerimbaev", part_1_role: "Team Coordinator & Lead Instructor",
      part_2_name: "Student Name", part_2_role: "Rocket Modeler (S1 Class)",
      part_3_name: "Student Name", part_3_role: "Propulsion Engineer",

      contact_tg: "Write us", contact_inst: "Our Instagram",
      questions_title: "Questions?", questions_text: "Write to our coordinator for more information...",
      social_title: "Visit our social media", social_text: "Follow us to be the first to get the information...",

      form_name: "Full name", form_email: "Email", form_pass: "Password", form_team: "Team / School",
      form_reg_btn: "Register", form_login_btn: "Login", form_reg_title: "Create Account", form_login_title: "Welcome Back",
      form_have_acc: "Already have an account?", form_no_acc: "No account?"
    },
    ru: {
      nav_aim: "Наша цель", nav_engines: "Двигатели", nav_participants: "Команда", nav_participate: "Участие",
      nav_login: "Вход", nav_register: "Регистрация", nav_dashboard: "Профиль", nav_logout: "Выйти",
      
      hero_title: "Хотите <span>участвовать?</span>", hero_subtitle: "Читайте ниже, чтобы получить информацию об участии в предстоящем турнире.",
      
      about_tag: "О нас", about_what: "Что мы делаем", about_desc: "Каждая модель Umut Rocketry — это идеальное сочетание креатива и физики.",
      btn_learn_more: "Узнать больше",
      
      sub_engines: "Наши двигатели", title_specs: "НОВЫЕ ДВИГАТЕЛИ",
      
      edit_p1: "Наша команда увлечена инновациями...", edit_p2: "Мы любим экспериментировать...", btn_about_us: "Подробнее о нас",

      about_title: "Цель проекта", about_subtitle: "Воспитание любви и уважения к родине через призму науки.",
      about_mission_title: "Наша миссия", about_mission_text: "Приоритет Umut Rocketry — выращивать квалифицированных инструкторов...",
      about_science_title: "Наука на практике", about_science_text: "Мы выбрали модельный ракетизм для создания моделей...",
      about_why_title: "Почему модельный ракетизм?", about_why_p1: "То, что началось как эксперимент...", about_why_p2: "Мы помогаем учащимся поступать в колледжи...",

      engines_title: "Ракетные двигатели", engines_subtitle: "Двигатели на твердом топливе для ракетомодельного спорта.",
      engines_specs: "Технические характеристики", engines_safety: "Безопасность и запуск",
      
      // Переводы для списков характеристик
      spec_1: "Материал корпуса: Плотная бумажная гильза (20мм).",
      spec_2: "Сопло: Прессованный минеральный состав.",
      spec_3: "Топливо: Нитрат калия + древесный уголь.",
      spec_4: "Масса: До 40 грамм.",
      
      safe_1: "Возрастное ограничение: 16+",
      safe_2: "Метод запуска: Только дистанционный.",
      safe_3: "Запрещено: Разбирать двигатель.",
      
      engines_misfire: "Действия при осечке", engines_misfire_text: "Если запуск не произошел, подождите не менее 60 секунд...",
      engines_disposal: "Утилизация", engines_disposal_text: "Неисправные двигатели необходимо погрузить в воду на 24 часа...",
      
      participants_title: "Наша команда", participants_subtitle: "Познакомьтесь с молодыми инженерами и создателями моделей.",
      part_1_name: "Элчибек Керимбаев", part_1_role: "Координатор команды и главный инструктор",
      part_2_name: "Имя ученика", part_2_role: "Создатель моделей ракет (Класс S1)",
      part_3_name: "Имя ученика", part_3_role: "Инженер по двигателям",

      contact_tg: "Написать", contact_inst: "Наш Instagram",
      questions_title: "Вопросы?", questions_text: "Напишите нашему координатору, чтобы получить информацию...",
      social_title: "Наши соцсети", social_text: "Подписывайтесь, чтобы первыми узнавать о событиях!",

      form_name: "Полное имя", form_email: "Email", form_pass: "Пароль", form_team: "Команда / Школа",
      form_reg_btn: "Зарегистрироваться", form_login_btn: "Войти", form_reg_title: "Создать аккаунт", form_login_title: "С возвращением",
      form_have_acc: "Уже есть аккаунт?", form_no_acc: "Нет аккаунта?"
    }
  };

  function setLanguage(lang) {
    localStorage.setItem('umut_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  const currentLang = localStorage.getItem('umut_lang') || 'ru';
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => setLanguage(e.target.getAttribute('data-lang')));
  });

  // ==========================================
  // 2. АНИМАЦИИ, БУРГЕР И АВТОРИЗАЦИЯ
  // ==========================================
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  // Бургер (без изменения анимации)
  const burgerMenu = document.getElementById('burgerMenu');
  const navLinks = document.getElementById('navLinks');
  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => { navLinks.classList.toggle('active'); });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // Авторизация (осталась без изменений)
  const getUsers = () => JSON.parse(localStorage.getItem('umut_users') || '[]');
  const saveUsers = (u) => localStorage.setItem('umut_users', JSON.stringify(u));
  const setSession = (u) => localStorage.setItem('umut_session', JSON.stringify(u));
  const getSession = () => JSON.parse(localStorage.getItem('umut_session') || 'null');
  const clearSession = () => localStorage.removeItem('umut_session');

  const regForm = document.getElementById('registerForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const msg = document.getElementById('msg');
      const users = getUsers();
      if (users.find(u => u.email === email)) {
        msg.textContent = currentLang === 'ru' ? 'Этот email уже занят.' : 'Email already exists.';
        msg.className = 'msg error'; return;
      }
      users.push({ name: document.getElementById('name').value, email: email, password: document.getElementById('password').value, team: document.getElementById('team').value });
      saveUsers(users);
      msg.textContent = currentLang === 'ru' ? 'Успешно!' : 'Success!';
      msg.className = 'msg success';
      setTimeout(() => window.location.href = 'login.html', 1500);
    });
  }

  const logForm = document.getElementById('loginForm');
  if (logForm) {
    logForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const pass = document.getElementById('password').value;
      const msg = document.getElementById('msg');
      const user = getUsers().find(u => u.email === email && u.password === pass);
      if (!user) { msg.textContent = currentLang === 'ru' ? 'Неверный email или пароль.' : 'Invalid credentials.'; msg.className = 'msg error'; return; }
      setSession(user); window.location.href = 'dashboard.html';
    });
  }

  const session = getSession();
  if (session) {
    if (document.getElementById('loginLink')) document.getElementById('loginLink').style.display = 'none';
    if (document.getElementById('dashboardLink')) document.getElementById('dashboardLink').style.display = 'block';
    if (document.getElementById('logoutLink')) document.getElementById('logoutLink').style.display = 'block';
  } else {
    if (document.getElementById('dashboardLink')) document.getElementById('dashboardLink').style.display = 'none';
    if (document.getElementById('logoutLink')) document.getElementById('logoutLink').style.display = 'none';
  }

  if (window.location.pathname.includes('dashboard.html') && !session) window.location.href = 'login.html';

  if (document.getElementById('logoutLink')) {
    document.getElementById('logoutLink').addEventListener('click', (e) => {
      e.preventDefault(); clearSession(); window.location.href = 'index.html';
    });
  }
});

  // ==========================================
  // 5. АНИМАЦИЯ СЧЕТЧИКОВ (Цифры на странице Engines)
  // ==========================================
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / 30; // Скорость анимации
        
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(animateCounters, 30);
        } else {
          counter.innerText = target;
        }
      });
    };

    // Запускаем анимацию, когда блок появляется на экране
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.unobserve(entries[0].target);
        }
      }, { threshold: 0.5 });
      observer.observe(statsSection);
    }
  }
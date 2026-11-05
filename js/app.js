(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Toast feedback
  const toast = $('#toast');
  const say = msg => { toast.textContent = msg; toast.classList.add('show'); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove('show'), 2600); };

  // Mobile nav (user control + aria-expanded state)
  const btn = $('.menu-btn'), list = $('#nav-list');
  btn.addEventListener('click', () => { const o = list.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && list.classList.contains('open')) { list.classList.remove('open'); btn.setAttribute('aria-expanded', false); btn.focus(); } });

  // Open/closed status (visibility of system status). Hours: 7:00–21:00.
  $$('[data-status]').forEach(el => {
    const h = new Date().getHours(), open = h >= 7 && h < 21;
    el.classList.add(open ? 'open' : 'closed');
    el.textContent = open ? 'Open now · until 9 pm' : 'Closed · opens 7 am';
  });

  // Session filter (user control, instant feedback, easy reset)
  const filters = $$('[data-filter]');
  if (filters.length) {
    const cards = $$('[data-type]'), count = $('#count');
    filters.forEach(f => f.addEventListener('click', () => {
      filters.forEach(x => x.setAttribute('aria-pressed', x === f));
      let n = 0;
      cards.forEach(c => { const show = f.dataset.filter === 'all' || c.dataset.type === f.dataset.filter; c.classList.toggle('hidden', !show); n += show; });
      count.textContent = `Showing ${n} of ${cards.length} sessions`;
    }));
  }

  // Booking form
  const form = $('#booking');
  if (form) {
    const date = $('#date'), session = $('#session'), guests = $('#guests'), out = $('#guests-out'), sum = $('#sum');
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().split('T')[0];
    date.min = today;
    const pre = new URLSearchParams(location.search).get('session');
    if (pre) session.value = pre;                       // recognition over recall

    const prices = { 'Dry Sauna': 28, 'Cold Plunge': 22, 'Heat & Cold Circuit': 45 };
    const update = () => {
      const p = prices[session.value];
      sum.textContent = p ? `${session.value} × ${guests.value} guest(s) = $${p * guests.value}` : 'Choose a session to see your total.';
    };
    $$('[data-step]').forEach(b => b.addEventListener('click', () => {
      guests.value = Math.min(6, Math.max(1, +guests.value + +b.dataset.step)); out.textContent = guests.value; update();
    }));
    session.addEventListener('change', update); update();

    const rules = {
      name: v => v.trim().length >= 2 || 'Enter your name (at least 2 characters).',
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter an email like name@example.com.',
      session: v => !!v || 'Choose a session.',
      date: v => (v && v >= today) || 'Pick today or a future date.'
    };
    const check = el => {
      const r = rules[el.id](el.value), f = el.closest('.field'), msg = $('.error', f);
      f.classList.toggle('invalid', r !== true); msg.textContent = r === true ? '' : r;
      el.setAttribute('aria-invalid', r !== true); return r === true;
    };
    Object.keys(rules).forEach(id => {
      const el = $('#' + id);
      el.addEventListener('blur', () => check(el));
      el.addEventListener('input', () => el.closest('.field').classList.contains('invalid') && check(el));
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const bad = Object.keys(rules).map(id => $('#' + id)).filter(el => !check(el));
      if (bad.length) { bad[0].focus(); say(`${bad.length} field(s) need attention`); return; }
      const ok = $('#confirm');
      ok.innerHTML = `<h2>Session booked</h2><p>Thanks, ${$('#name').value.trim().replace(/[<>&]/g, '')}. ${sum.textContent} on ${date.value}. A confirmation will be sent to ${$('#email').value.replace(/[<>&]/g, '')}.</p>`;
      ok.classList.remove('hidden'); form.classList.add('hidden'); ok.focus(); say('Session booked');
    });
  }
})();

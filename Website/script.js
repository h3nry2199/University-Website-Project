

/* ------------ Form validation (tickets page) ------------ */
document.addEventListener('DOMContentLoaded', function () {

    // Tickets form 
    const form = document.getElementById('ticket-form');
    if (form) {
      const messages = document.getElementById('form-messages');
  
      // Validators
      function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
      function isPhoneValid(phone) {
        return /^\+?[0-9\s\-]{7,15}$/.test(phone);
      }
  
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        messages.className = '';
        messages.textContent = '';
  
        const fullname = form.fullname.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const quantity = Number(form.quantity.value);
        const payment = form.payment.value;
        const terms = form.terms.checked;
  
        const errors = [];
  
        if (!fullname) errors.push('Full name is required.');
        if (!email) errors.push('Email is required.');
        else if (!isEmailValid(email)) errors.push('Email format is invalid.');
        if (!phone) errors.push('Phone number is required.');
        else if (!isPhoneValid(phone)) errors.push('Phone format is invalid. Use digits, spaces, dashes, optional +.');
        if (!quantity || quantity < 1 || quantity > 10) errors.push('Number of tickets must be between 1 and 10.');
        if (!payment) errors.push('Please select a payment method.');
        if (!terms) errors.push('You must agree to the terms and conditions.');
  
        if (errors.length > 0) {
          messages.classList.add('error');
          messages.innerHTML = errors.map(err => `<div>• ${err}</div>`).join('');
          // Focus first invalid field
          const firstInvalid = form.querySelector('input:invalid, select:invalid, textarea:invalid') || null;
          if (firstInvalid) firstInvalid.focus();
          return;
        }
  
        // success message 
        messages.classList.remove('error');
        messages.classList.add('success');
        messages.textContent = `Success! ${quantity} ticket(s) reserved for ${fullname}. A confirmation email will be sent to ${email}.`;

      });
  
      // Clear on reset
      form.addEventListener('reset', function () {
        messages.className = '';
        messages.textContent = '';
      });
    }
  
    /* ------------ Filter(schedule page) ------------ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length) {
      const rows = Array.from(document.querySelectorAll('#schedule-table tbody tr'));
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
          // update ARIA selected states
          filterBtns.forEach(b => b.setAttribute('aria-selected', 'false'));
          btn.setAttribute('aria-selected', 'true');
  
          const day = btn.getAttribute('data-day');
          if (day === 'all') {
            rows.forEach(r => r.style.display = '');
          } else {
            rows.forEach(r => {
              r.style.display = (r.getAttribute('data-day') === day) ? '' : 'none';
            });
          }
        });
      });
    }
  });
  
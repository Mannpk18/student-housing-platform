document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const timeslotsEl = document.getElementById('timeslots');
  const selectedDateTitle = document.getElementById('selected-date-title');

  if (!calendarEl) {
    console.error("Calendar Initialization Failed: The element with ID 'calendar' was not found in the DOM.");
    return;
  }

  let selectedDate = null;
  let selectedTime = null;

  const dailyTimeslots = ["11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"];

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 'auto',
    contentHeight: 'auto',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    dateClick: function(info) {
      const clickedDate = new Date(info.dateStr);
      const today = new Date();
      today.setHours(0,0,0,0);

      if (clickedDate < today) {
        selectedDateTitle.textContent = "Cannot book past dates";
        timeslotsEl.innerHTML = '';
        return;
      }

      // Save the clicked date
      selectedDate = clickedDate;

      const options = { month: 'long', day: 'numeric' };
      const formattedDate = clickedDate.toLocaleDateString('en-US', options);
      selectedDateTitle.textContent = `Available times for ${formattedDate}:`;

      timeslotsEl.innerHTML = '';

      dailyTimeslots.forEach(time => {
        const btn = document.createElement('button');
        btn.textContent = time;
        btn.classList.add('timeslot-btn');

        btn.addEventListener('click', () => {
          // Remove previous selection
          document.querySelectorAll('.timeslot-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');

          // Save selected time
          selectedTime = time;

          // Update modal content
          document.getElementById('modal-date').innerText = formattedDate;
          document.getElementById('modal-time').innerText = time;

          // Show modal
          const modalEl = document.getElementById('timeslotModal');
          const modal = new bootstrap.Modal(modalEl);
          modal.show();
        });

        timeslotsEl.appendChild(btn);
      });
    }
  });

  calendar.render();

  // Confirm Booking button inside DOMContentLoaded
  const confirmBtn = document.getElementById('confirmBookingBtn');
  confirmBtn.addEventListener('click', () => {
    if (!selectedDate || !selectedTime) return; // safety check

    // Close modal
    const modalEl = document.getElementById('timeslotModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.hide();

    // Format date for toast
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = selectedDate.toLocaleDateString('en-US', options);

    // Update and show toast
    const toastEl = document.getElementById('bookingToast');
    toastEl.querySelector('.toast-body').textContent = `Booking confirmed for ${formattedDate} at ${selectedTime}.`;
    const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
    toast.show();
  });

});


// Landlord Chat:
document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chatContainer'); // Wraps chatBox + input
  const chatBox = document.getElementById('chatBox'); // Where messages appear
  const chatInput = document.getElementById('chatMessage');
  const sendBtn = document.getElementById('sendChatBtn');

  // Initially hide chat box
  chatBox.style.display = 'none';

  const sendMessage = () => {
      const message = chatInput.value.trim();
      if (!message) return;

      // Show chat box when first message is sent
      chatBox.style.display = 'block';

      // Add message to chat box
      const msgEl = document.createElement('p');
      msgEl.textContent = `You: ${message}`;
      msgEl.classList.add('user-message');
      chatBox.appendChild(msgEl);

      // Scroll to bottom
      chatBox.scrollTop = chatBox.scrollHeight;

      // Clear input
      chatInput.value = '';

      // Simulate landlord response (optional)
      setTimeout(() => {
          const replyEl = document.createElement('p');
          replyEl.textContent = `Landlord: Thanks for your message!`;
          replyEl.classList.add('landlord-message');
          chatBox.appendChild(replyEl);
          chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
  };

  // Send button click
  sendBtn.addEventListener('click', sendMessage);

  // Press Enter to send
  chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // stop default form refresh

      // You can add real authentication later, for now just redirect
      window.location.href = "listings.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.addEventListener("click", function () {
      // OPTIONAL: clear saved login status
      localStorage.removeItem("isLoggedIn");

      // Redirect to login page
      window.location.href = "index.html";
  });
});

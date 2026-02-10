document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rsvpForm');
  const ticket = document.getElementById('rsvpExtra');

  const nameInput = document.getElementById('rsvpName');
  const guestName = document.getElementById('rsvpGuestName');
  const passesText = document.getElementById('rsvpPassesText');
  const tableText = document.getElementById('rsvpTableText');

  if (!form || !ticket) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 🔹 AQUÍ está la clave
    const name = nameInput.value.trim();

    // Seguridad mínima
    if (!name) return;

    // Datos (por ahora mock)
    const passes = 2;
    const table = 'Mesa 8';

    // 🔹 Pintar ticket
    guestName.textContent = name;
    passesText.textContent = passes;
    tableText.textContent = table;

    // Mostrar ticket
    form.classList.add('hidden');
    ticket.classList.remove('hidden');
  });
});

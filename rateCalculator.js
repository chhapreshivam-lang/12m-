
// Rate Data (all months for 2025 & 2026, grouped by room count)
const rateData = {
  '1 to 8': {
    'Jan-25': { Weekday: 114, Weekend: 129 },
    'Feb-25': { Weekday: 114, Weekend: 124 },
    'Mar-25': { Weekday: 114, Weekend: 129 },
    'Apr-25': { Weekday: 114, Weekend: 129 },
    'May-25': { Weekday: 119, Weekend: 149 },
    'Jun-25': { Weekday: 119, Weekend: 149 },
    'Jul-25': { Weekday: 119, Weekend: 159 },
    'Aug-25': { Weekday: 114, Weekend: 149 },
    'Sep-25': { Weekday: 124, Weekend: 159 },
    'Oct-25': { Weekday: 124, Weekend: 149 },
    'Nov-25': { Weekday: 124, Weekend: 139 },
    'Dec-25': { Weekday: 124, Weekend: 149 },
    'Jan-26': { Weekday: 120, Weekend: 125 },
    'Feb-26': { Weekday: 118, Weekend: 130 },
    'Mar-26': { Weekday: 115, Weekend: 135 },
    'Apr-26': { Weekday: 117, Weekend: 138 },
    'May-26': { Weekday: 119, Weekend: 140 },
    'Jun-26': { Weekday: 121, Weekend: 142 },
    'Jul-26': { Weekday: 123, Weekend: 145 },
    'Aug-26': { Weekday: 124, Weekend: 147 },
    'Sep-26': { Weekday: 125, Weekend: 148 },
    'Oct-26': { Weekday: 126, Weekend: 149 },
    'Nov-26': { Weekday: 127, Weekend: 150 },
    'Dec-26': { Weekday: 128, Weekend: 151 }
  },
  '9 to 17': {
    'Jan-25': { Weekday: 114, Weekend: 129 },
    'Feb-25': { Weekday: 114, Weekend: 124 },
    'Mar-25': { Weekday: 114, Weekend: 129 },
    'Apr-25': { Weekday: 114, Weekend: 129 },
    'May-25': { Weekday: 119, Weekend: 149 },
    'Jun-25': { Weekday: 119, Weekend: 149 },
    'Jul-25': { Weekday: 119, Weekend: 159 },
    'Aug-25': { Weekday: 114, Weekend: 149 },
    'Sep-25': { Weekday: 124, Weekend: 159 },
    'Oct-25': { Weekday: 124, Weekend: 149 },
    'Nov-25': { Weekday: 124, Weekend: 139 },
    'Dec-25': { Weekday: 124, Weekend: 149 },
    'Jan-26': { Weekday: 120, Weekend: 125 },
    'Feb-26': { Weekday: 118, Weekend: 130 },
    'Mar-26': { Weekday: 115, Weekend: 135 },
    'Apr-26': { Weekday: 117, Weekend: 138 },
    'May-26': { Weekday: 119, Weekend: 140 },
    'Jun-26': { Weekday: 121, Weekend: 142 },
    'Jul-26': { Weekday: 123, Weekend: 145 },
    'Aug-26': { Weekday: 124, Weekend: 147 },
    'Sep-26': { Weekday: 125, Weekend: 148 },
    'Oct-26': { Weekday: 126, Weekend: 149 },
    'Nov-26': { Weekday: 127, Weekend: 150 },
    'Dec-26': { Weekday: 128, Weekend: 151 }
  },
  '18 to 25': {
    'Jan-25': { Weekday: 114, Weekend: 129 },
    'Feb-25': { Weekday: 114, Weekend: 129 },
    'Mar-25': { Weekday: 114, Weekend: 134 },
    'Apr-25': { Weekday: 114, Weekend: 134 },
    'May-25': { Weekday: 119, Weekend: 149 },
    'Jun-25': { Weekday: 119, Weekend: 149 },
    'Jul-25': { Weekday: 119, Weekend: 164 },
    'Aug-25': { Weekday: 114, Weekend: 154 },
    'Sep-25': { Weekday: 124, Weekend: 159 },
    'Oct-25': { Weekday: 124, Weekend: 159 },
    'Nov-25': { Weekday: 124, Weekend: 139 },
    'Dec-25': { Weekday: 124, Weekend: 149 },
    'Jan-26': { Weekday: 121, Weekend: 130 },
    'Feb-26': { Weekday: 119, Weekend: 135 },
    'Mar-26': { Weekday: 117, Weekend: 138 },
    'Apr-26': { Weekday: 119, Weekend: 141 },
    'May-26': { Weekday: 121, Weekend: 143 },
    'Jun-26': { Weekday: 123, Weekend: 145 },
    'Jul-26': { Weekday: 125, Weekend: 148 },
    'Aug-26': { Weekday: 126, Weekend: 150 },
    'Sep-26': { Weekday: 127, Weekend: 151 },
    'Oct-26': { Weekday: 128, Weekend: 152 },
    'Nov-26': { Weekday: 129, Weekend: 153 },
    'Dec-26': { Weekday: 130, Weekend: 154 }
  }
};

// Blackout dates
const blackoutDates = [
  "2025-06-05","2025-06-06","2025-06-07","2025-06-15",
  "2025-07-05","2025-07-08","2025-07-09","2025-07-10","2025-07-13","2025-07-18","2025-07-19","2025-07-20","2025-07-26",
  "2025-08-02","2025-08-03","2025-08-08","2025-08-09","2025-08-10","2025-08-12","2025-08-27","2025-08-28","2025-08-30","2025-08-31",
  "2025-09-09","2025-09-13",
  "2025-12-25","2026-01-01"
];

// Helpers
function isWeekend(date) {
  const day = date.getDay();
  return day === 5 || day === 6; // Fri, Sat
}
function getMonthKey(date) {
  const monthAbbr = date.toLocaleString('en-US', { month: 'short' });
  const yearTwoDigit = date.getFullYear().toString().slice(-2);
  return `${monthAbbr}-${yearTwoDigit}`;
}
function getRateGroup(rooms) {
  if (rooms >= 1 && rooms <= 8) return '1 to 8';
  if (rooms >= 9 && rooms <= 17) return '9 to 17';
  if (rooms >= 18 && rooms <= 25) return '18 to 25';
  return null;
}
function isBlackout(date) {
  return blackoutDates.includes(date.toISOString().slice(0, 10));
}

// Pre-fill default dates
window.onload = function() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('checkin').value = today.toISOString().slice(0, 10);
  document.getElementById('checkout').value = tomorrow.toISOString().slice(0, 10);
};

// Main calculation
function calculateRate() {
  const checkinInput = document.getElementById('checkin').value;
  const checkoutInput = document.getElementById('checkout').value;
  const roomsInput = parseInt(document.getElementById('rooms').value, 10);
  const resultDiv = document.getElementById('result');
  const messageDiv = document.getElementById('message');

  resultDiv.style.display = 'none';
  resultDiv.innerHTML = '';
  messageDiv.style.color = 'red';
  messageDiv.innerHTML = '';

  if (!checkinInput || !checkoutInput || isNaN(roomsInput)) {
    messageDiv.innerHTML = "Please fill all fields correctly.";
    return;
  }

  const checkIn = new Date(checkinInput);
  const checkOut = new Date(checkoutInput);
  if (checkOut <= checkIn) {
    messageDiv.innerHTML = "Check-out date must be after check-in date.";
    return;
  }
  if (roomsInput > 25) {
    messageDiv.innerHTML = "Discuss with revenue team: Rooms requested exceed 25.";
    return;
  }

  const rateGroup = getRateGroup(roomsInput);
  if (!rateGroup) {
    messageDiv.innerHTML = "Rooms requested outside supported range (1-25).";
    return;
  }

  let totalRate = 0;
  let totalNights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  let weekendsCount = 0;
  let weekdaysCount = 0;
  let currDate = new Date(checkIn);

  for (let i = 0; i < totalNights; i++) {
    if (isBlackout(currDate)) {
      messageDiv.innerHTML = "Black out date(s) detected: Discuss with revenue team.";
      return;
    }
    const monthKey = getMonthKey(currDate);
    const dayType = isWeekend(currDate) ? 'Weekend' : 'Weekday';
    if (dayType === 'Weekend') weekendsCount++; else weekdaysCount++;
    const rate = rateData[rateGroup][monthKey]?.[dayType] || 0;
    totalRate += rate * roomsInput;
    currDate.setDate(currDate.getDate() + 1);
  }

  const avgRate = totalRate / totalNights / roomsInput;
  messageDiv.style.color = 'green';
  messageDiv.innerHTML = `Weekdays: ${weekdaysCount}, Weekends: ${weekendsCount}`;
  resultDiv.style.display = 'block';
  resultDiv.innerHTML =
    `<p><strong>Total rate for ${roomsInput} room(s) from ${checkinInput} to ${checkoutInput}:</strong> $${totalRate.toFixed(2)}</p>` +
    `<p><strong>Average daily rate per room:</strong> $${avgRate.toFixed(2)}</p>`;
}

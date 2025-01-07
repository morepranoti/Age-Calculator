function age() {
    var d1 = parseInt(document.getElementById('date').value);
    var m1 = parseInt(document.getElementById('month').value);
    var y1 = parseInt(document.getElementById('year').value);

    // Input validation
    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        alert("Please enter valid numbers for date, month, and year.");
        return;
    }

    // Validate month (1-12)
    if (m1 < 1 || m1 > 12) {
        alert("Month must be between 1 and 12.");
        return;
    }

    // Validate date based on month
    var daysInMonth = new Date(y1, m1, 0).getDate(); // Get the number of days in the month
    if (d1 < 1 || d1 > daysInMonth) {
        alert(`Invalid date. The selected month has ${daysInMonth} days.`);
        return;
    }

    // Validate year (must be less than or equal to the current year)
    var currentYear = new Date().getFullYear();
    if (y1 > currentYear) {
        alert("Year cannot be in the future.");
        return;
    }

    // Calculate age
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap year (February has 29 days)
    if ((y2 % 4 === 0 && y2 % 100 !== 0) || y2 % 400 === 0) {
        month[1] = 29;
    }

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';

    setTimeout(() => {
        location.reload(); // Refresh the page
    }, 5000);
}
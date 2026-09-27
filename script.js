function calculateAge() {

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter Day, Month and Year.");
        return;
    }

    const birth = new Date(year, month - 1, day);

    if (
        birth.getFullYear() !== year ||
        birth.getMonth() !== month - 1 ||
        birth.getDate() !== day
    ) {
        alert("Invalid Date.");
        return;
    }

    const today = new Date();

    if (birth > today) {
        alert("Birth date cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;

        const lastMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += lastMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;

    const diff = today - birth;

    const totalDays = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const totalWeeks = Math.floor(totalDays / 7);

    const totalMonths = years * 12 + months;
      document.getElementById("totalDays").innerText = totalDays;
    document.getElementById("totalWeeks").innerText = totalWeeks;
    document.getElementById("totalMonths").innerText = totalMonths;

    // Next Birthday
    let nextBirthday = new Date(
        today.getFullYear(),
        birth.getMonth(),
        birth.getDate()
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const oneDay = 1000 * 60 * 60 * 24;

    const daysLeft = Math.ceil(
        (nextBirthday - today) / oneDay
    );

    if (daysLeft === 0) {
        document.getElementById("nextBirthday").innerText =
            "🎉 Happy Birthday!";
    } else {
        document.getElementById("nextBirthday").innerText =
            daysLeft + " Days Left";
    }
}

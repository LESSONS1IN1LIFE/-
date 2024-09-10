let users = [];

// تحميل البيانات من users.json
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
    });

// تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        if (email === 'mohammedabdelbaset35@gmail.com') {
            window.location.href = 'admin.html'; // انتقل إلى صفحة الإدارة
        } else {
            alert('Welcome, User!');
            window.location.href = 'attendance.html'; // انتقل إلى صفحة الحضور
        }
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid email or password.';
    }
});
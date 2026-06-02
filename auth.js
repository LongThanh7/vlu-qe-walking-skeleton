function login(username, password) {
    return username === "admin" && password === "123";
}

// Xử lý form trên trình duyệt
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = login(username, password);

        document.getElementById("result").textContent =
            result ? "Đăng nhập thành công!" : "Sai tài khoản hoặc mật khẩu!";
    });
}

// Export để Jest có thể test
module.exports = login;

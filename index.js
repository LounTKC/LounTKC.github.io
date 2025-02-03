// อัปเดตราคาสกุลเงินแบบเรียลไทม์ (จำลอง)
function updatePrices() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const priceCell = row.cells[1];
        const changeCell = row.cells[2];
        
        // สุ่มราคาและเปอร์เซ็นต์เปลี่ยนแปลง
        const randomPrice = (Math.random() * 10000 + 1000).toFixed(2);
        const randomChange = (Math.random() * 5 - 2.5).toFixed(2); // -2.5% ถึง +2.5%
        
        priceCell.textContent = $${randomPrice};
        changeCell.textContent = ${randomChange}%;
        changeCell.style.color = randomChange >= 0 ? "green" : "red";
    });
}

// เรียกใช้ฟังก์ชันทุก ๆ 5 วินาที
setInterval(updatePrices, 5000);

// เมนูสำหรับหน้าจอขนาดเล็ก (Toggle Menu)
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("header nav ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
});

// เลื่อนกลับไปด้านบน (Scroll to Top)
const scrollTopButton = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
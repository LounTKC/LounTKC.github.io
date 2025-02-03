document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        localStorage.setItem("screenshotTaken", "true");
    }
});

document.getElementById("payBtn").addEventListener("click", function() {
    if (localStorage.getItem("screenshotTaken") === "true") {
        window.location.href = "bill.html"; // ไปหน้าถัดไป
    } else {
        alert("ยังไม่ได้จ่ายเงิน (กรุณา Screenshot หน้าจอก่อน)");
    }
});

let isScreenshotDone = false;

// ตรวจสอบ checkbox สำหรับ screenshot
function checkScreenshot() {
    isScreenshotDone = document.getElementById('screenshotCheck').checked;
}

// แสดงข้อมูลจาก URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('phoneNumber').textContent = urlParams.get('phone');
    document.getElementById('packageDetails').textContent = urlParams.get('package');
    document.getElementById('orderId').textContent = Math.floor(Math.random() * 100000); // หมายเลขออเดอร์สุ่ม
    document.getElementById('transactionDate').textContent = new Date().toLocaleString();
};

// ยืนยันการชำระเงิน
function confirmPayment() {
    if (!isScreenshotDone) {
        alert('กรุณาทำการ screenshot ก่อนเพื่อยืนยันการชำระเงิน');
        return;
    }

    // ไปที่หน้า bill.html พร้อมข้อมูล
    var orderId = document.getElementById('orderId').textContent;
    var phone = document.getElementById('phoneNumber').textContent;
    var packageDetails = document.getElementById('packageDetails').textContent;
    var transactionDate = document.getElementById('transactionDate').textContent;

    var billUrl = `bill.html?orderId=${encodeURIComponent(orderId)}&phone=${encodeURIComponent(phone)}&package=${encodeURIComponent(packageDetails)}&transactionDate=${encodeURIComponent(transactionDate)}`;
    window.location.href = billUrl;
}
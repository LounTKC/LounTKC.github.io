// ฟังเหตุการณ์เมื่อมีการเปลี่ยนโฟกัสของหน้าเว็บ
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('เว็บไซต์ถูกซ่อน หรือผู้ใช้สลับไปแท็บอื่น');
        // สามารถแสดงข้อความแจ้งเตือนที่นี่ หรือบังคับให้ไม่สามารถยืนยันการชำระเงินได้
    } else {
        console.log('เว็บไซต์กลับมามีการโฟกัส');
        // สามารถทำอะไรบางอย่างเมื่อเว็บไซต์กลับมามีการโฟกัส
    }
});

// หรือใช้งานกับ focus และ blur
window.addEventListener('blur', function() {
    console.log('หน้าต่างเบราว์เซอร์สูญเสียการโฟกัส (อาจมีการสลับไปแอปอื่น)');
});

window.addEventListener('focus', function() {
    console.log('หน้าต่างเบราว์เซอร์กลับมาโฟกัส');
});
// ดึงข้อมูลจาก URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('order-number').textContent = urlParams.get('orderId');
    document.getElementById('phone-number').textContent = urlParams.get('phone');
    document.getElementById('transaction-date').textContent = urlParams.get('transactionDate');
    document.getElementById('package-name').textContent = urlParams.get('package');
};
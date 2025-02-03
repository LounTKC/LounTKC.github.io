<button onclick="loadCustomers()">โหลดข้อมูลลูกค้า</button>
<ul id="customerList"></ul>

<script>
function loadCustomers() {
    fetch('get_customers.php')
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById('customerList');
        list.innerHTML = "";
        data.forEach(customer => {
            let item = document.createElement('li');
            item.textContent = เบอร์: ${customer.phone_number} | แพ็กเกจ: ${customer.package_details} | วันที่: ${customer.transaction_date};
            list.appendChild(item);
        });
    })
    .catch(error => console.error('Error:', error));
}
</script>

// ตรวจสอบการเปลี่ยนภาษา
function changeLanguage(language) {
    window.location.href = window.location.pathname + '?lang=' + language;
}

// ตรวจสอบการส่งข้อมูลไปที่หน้า payment.html เมื่อกดปุ่มเติมเงิน
document.getElementById('topup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์ม

    var phone = document.getElementById('phone').value;
    var packageAmount = document.getElementById('amount').value;

    // หากกรอกข้อมูลไม่ครบ จะไม่ทำการส่ง
    if (!phone || !packageAmount) {
        alert('กรุณากรอกข้อมูลให้ครบ');
        return;
    }

    // ส่งข้อมูลไปยัง payment.html
    var paymentUrl = payment.html?phone=${encodeURIComponent(phone)}&package=${encodeURIComponent(packageAmount)};
    window.location.href = paymentUrl;
});

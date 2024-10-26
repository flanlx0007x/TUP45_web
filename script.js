const hireMeBtn = document.getElementById('hire-me-btn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const mainContent = document.querySelector('.main-content');

hireMeBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  mainContent.classList.add('popup-active'); 
  startCounting(); 
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  mainContent.classList.remove('popup-active'); 
});

function startCounting() {
  countUp('html-percent', 40, 1000); 
  countUp('css-percent', 70, 1000);  
  countUp('js-percent', 90, 1000);  
}

function countUp(elementId, target, duration) {
  let start = 0;
  const element = document.getElementById(elementId);
  const increment = target / (duration / 1000); // แบ่งเป้าหมายตามระยะเวลา
  let lastTimestamp;

  function step(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp; // ตั้งค่าเวลาเริ่มต้น
    const progress = timestamp - lastTimestamp; // คำนวณเวลาที่ผ่านไป

    if (progress >= 50) { // ถ้าผ่านไป 100ms
      start += increment; 
      if (start >= target) {
        start = target; // ถ้าถึงเป้าหมาย ให้ตั้งค่าเป็นเป้าหมาย
        element.textContent = Math.floor(start) + '%'; // แสดงผล
        return; // ออกจากฟังก์ชัน
      }
      element.textContent = Math.floor(start) + '%'; // แสดงผล
      lastTimestamp = timestamp; // อัปเดตเวลา
    }

    requestAnimationFrame(step); // เรียกใช้ฟังก์ชันนี้อีกครั้ง
  }

  requestAnimationFrame(step); // เริ่มต้นการนับ
}


const roles = [
  "Web Designer",
  "UI/UX Developer",
  "Front-end Engineer",
  "HTML Developer",
  "CSS Specialist",
  "JavaScript Enthusiast",
  "Python Developer",
  "Back-end Developer",
  "Lua Programmer",
  "Software Engineer",
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Developer",
  "DevOps Engineer"
];

let currentRoleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');

function typeText() {
  const currentRole = roles[currentRoleIndex];

  if (isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {

    typedText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeText, 500); 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; 
    setTimeout(typeText, 500); 
  } else {
    setTimeout(typeText, isDeleting ? 100 : 150); 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeText, 500); 
});

   
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('time').innerText = now.toLocaleTimeString([], options);
}



// เรียกใช้ฟังก์ชันเมื่อโหลดหน้า
setInterval(updateTime, 1000); // อัพเดตเวลาในทุกๆ วินาที
fetchTemperature(); // เรียกใช้ฟังก์ชันดึงอุณหภูมิ


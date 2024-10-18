// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});


const typedText = "Hien Anh (Annie) Tran";
const typedElement = document.querySelector('.name');
let index = 0;

function type() {
  if (index < typedText.length) {
    typedElement.textContent += typedText.charAt(index);
    index++;
    setTimeout(type, 100); // Thời gian giữa mỗi ký tự
  }
}

type();

function copyEmail() {
  const email = "hienanh1811@gmail.com"; // Địa chỉ email cần sao chép
  
  navigator.clipboard.writeText(email)
}


// Hàm mở PDF và cập nhật đường dẫn cho iframe
function openPDF(pdfUrl) {
  const pdfModal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");

  // Cập nhật thuộc tính src của iframe
  pdfViewer.src = pdfUrl;

  // Hiển thị modal PDF
  pdfModal.classList.remove("hidden");
}

// Hàm đóng modal PDF
function closePDF() {
  const pdfModal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");

  // Ẩn modal PDF
  pdfModal.classList.add("hidden");

  // Xóa src của iframe để ngăn tệp PDF tiếp tục được tải khi đóng modal
  pdfViewer.src = "";
}

// Gắn sự kiện click cho mỗi tiêu đề PDF
document.querySelectorAll(".pdf-description").forEach(item => {
  item.addEventListener("click", function () {
    const pdfUrl = this.getAttribute("data-pdf"); // Lấy đường dẫn PDF từ thuộc tính data-pdf
    openPDF(pdfUrl); // Gọi hàm mở PDF
  });
});

let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const cardsVisible = 3; // Số thẻ hiển thị trên màn hình
const totalCards = cards.length;

function moveSlide(direction) {
    currentIndex += direction;

    // Kiểm tra biên giới
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalCards - cardsVisible) {
        currentIndex = totalCards - cardsVisible;
    }

    // Di chuyển slide track
    const offset = currentIndex * 320; // Chiều rộng mỗi thẻ (300px + margin)
    const slideTrack = document.querySelector('.slide-track');
    slideTrack.style.transform = `translateX(-${offset}px)`;
}

// Lướt để chuyển ảnh
let startX = 0; // Vị trí bắt đầu
let endX = 0; // Vị trí kết thúc

const slideTrackWrapper = document.querySelector('.slide-track-wrapper');

slideTrackWrapper.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Lấy vị trí chạm đầu tiên
});

slideTrackWrapper.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX; // Lấy vị trí chạm hiện tại
});

slideTrackWrapper.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        // Nếu lướt sang trái
        moveSlide(1);
    } else if (startX < endX - 50) {
        // Nếu lướt sang phải
        moveSlide(-1);
    }
});

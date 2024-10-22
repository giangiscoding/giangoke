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


const typedText = "Hien Anh, or Annie";
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
const totalCards = cards.length;

function moveSlide(direction) {
    // Kiểm tra kích thước màn hình
    let cardsVisible = window.innerWidth < 767 ? 1 : 2; // Nếu màn hình nhỏ hơn 767px thì cardsVisible = 1

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

let items = document.querySelectorAll('.masonry-item');
let loadMoreBtn = document.getElementById('loadMore');
let itemsToShow = 5;
let totalItems = items.length;

function updateItems() {
  // Kiểm tra kích thước màn hình
  if (window.innerWidth <= 767) {
    // Chỉ áp dụng logic cho màn hình nhỏ
    items.forEach((item, index) => {
      if (index < itemsToShow) {
        item.style.display = 'block'; // Hiển thị các mục đã chọn
      } else {
        item.style.display = 'none'; // Ẩn các mục sau itemsToShow
      }
    });

    // Hiển thị nút "Hiển thị thêm" nếu còn mục để hiển thị
    if (itemsToShow >= totalItems) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }
}

// Gọi hàm khi trang tải
updateItems();

// Thêm sự kiện khi thay đổi kích thước màn hình
window.addEventListener('resize', updateItems);

loadMoreBtn.addEventListener('click', function() {
  itemsToShow += 5; // Hiển thị thêm 5 phần tử
  updateItems();
});
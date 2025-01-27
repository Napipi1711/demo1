/* Agents csgo */
document.addEventListener("DOMContentLoaded", function () {
    let terroristAgents = document.querySelectorAll('.team.terrorist .agent');
    let counterTerroristAgents = document.querySelectorAll('.team.counter-terrorist .agent');

    let counter = 0;
    let terroristTeam = document.querySelector('.team.terrorist');
    let counterTerroristTeam = document.querySelector('.team.counter-terrorist');

    // Hàm đổi hình ảnh với hiệu ứng mượt
    function switchAgents() {
        // Ẩn hình ảnh hiện tại
        if (counter > 0) {
            terroristAgents[counter - 1].classList.add('hidden');
            counterTerroristAgents[counter - 1].classList.add('hidden');
        }

        // Hiển thị hình ảnh tiếp theo
        if (counter < terroristAgents.length) {
            terroristAgents[counter].classList.remove('hidden');
            counterTerroristAgents[counter].classList.remove('hidden');
        }

        // Đổi màu nền nếu là hình cuối cùng
        if (counter === terroristAgents.length - 1) {
            terroristTeam.style.transition = "background-color 0.5s ease"; // Hiệu ứng mượt
            counterTerroristTeam.style.transition = "background-color 0.5s ease";
            terroristTeam.style.backgroundColor = "#ff0000";
            counterTerroristTeam.style.backgroundColor = "#ff0000";
        }

        // Dừng khi đến hình cuối cùng
        if (counter === terroristAgents.length - 1) {
            clearInterval(intervalId);
        }

        counter++;
    }

    // Hiển thị hình ảnh đầu tiên
    terroristAgents[0].classList.remove('hidden');
    counterTerroristAgents[0].classList.remove('hidden');

    // Gọi hàm mỗi 3 giây
    let intervalId = setInterval(switchAgents, 3000);
});

/*video_csgo_crowds */
function playVideo() {
    var video = document.getElementById("myVideo");
    video.play();
}
/*skin_csgo */
document.querySelectorAll('.skins img').forEach((img) => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.2)';
      img.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
/*show top 3 player of all times */
let index = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {index = 1}    
    slides[index - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Initial call to start the slideshow


function showPlayer(playerId) {
    // Ẩn tất cả các hình ảnh và thông tin
    const images = document.querySelectorAll('#player-display img');
    const infoTexts = document.querySelectorAll('.info-text');
    images.forEach(img => img.style.display = 'none');
    infoTexts.forEach(info => info.style.display = 'none');
    
    // Hiển thị hình ảnh và thông tin của người chơi đã chọn
    const playerImage = document.querySelector(`#player-display .player-info:nth-child(${playerId}) img`);
    const playerInfo = document.querySelector(`#player-display .player-info:nth-child(${playerId}) .info-text`);
    
    if (playerImage) {
        playerImage.style.display = 'block';
    }
    if (playerInfo) {
        playerInfo.style.display = 'block';
    }
}



const elements = document.querySelectorAll('.tournament-container, .career-community, .left-container, .right-container');

const options = {
  root: null, // Theo dõi phần tử khi nó vào viewport
  rootMargin: '0px',
  threshold: 0.1, // Phần tử phải xuất hiện ít nhất 10% trong viewport
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear'); // Khi phần tử xuất hiện, thêm class 'appear'
      observer.unobserve(entry.target); // Dừng theo dõi sau khi phần tử đã xuất hiện
    }
  });
}, options);

// Quan sát các phần tử
elements.forEach(element => {
  observer.observe(element);
});


/* Designer*/
designerCard.addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  const rect = designerCard.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  ripple.className = "ripple";
  designerCard.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => ripple.remove(), 600);
});


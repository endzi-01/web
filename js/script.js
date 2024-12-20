//Navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik ddi luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

gsap.registerPlugin(TextPlugin);
gsap.to("#username", {
  duration: 1,
  text: { value: "el", scrambleText: true },
  delay: 0.5,
});

// Animasi scramble teks untuk #underscore
gsap.to("#underscore", {
  duration: 1,
  text: { value: "ndha_", scrambleText: true },
  delay: 1.5,
});

var options = {
  strings: [
    '<span style="font-weight: bold;">Investor.</span>',
    '<span style="font-weight: bold;">Billionaire.</span>',
    '<span style="font-weight: bold;">Business man.</span>',
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 100,
  loop: true,
  showCursor: true,
  cursorChar: "|",
};

var typed = new Typed("#animated-text", options);
gsap.from("#navbargua", { duration: 1.5, y: "-100%", opacity: 0 });
const images = ["img/el.png", "img/el1.png"]; // Array berisi file gambar
let currentImageIndex = 0;

function flipImage() {
  const imgElement = document.querySelector(".rotate-img");
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop ke gambar berikutnya

  // Animasi rotasi flip ke belakang
  gsap.to(imgElement, {
    duration: 0.8,
    rotationY: 90,
    ease: "power2.in",
    onComplete: () => {
      imgElement.src = images[currentImageIndex]; // Ganti sumber gambar ketika flip selesai
      gsap.fromTo(
        imgElement,
        { rotationY: -90 }, // Mulai dari sisi belakang
        { duration: 0.8, rotationY: 0, ease: "power2.out" } // Flip kembali ke depan
      );
    },
  });
}

// Ganti gambar setiap 3 detik
setInterval(flipImage, 3000);

gsap.registerPlugin(ScrollTrigger);

// Animasi untuk gambar pertama
gsap.from("#web", {
  x: -200, // Memulai dari kiri
  opacity: 0, // Memulai dengan transparan
  duration: 0.5, // Durasi animasi
  ease: "power2.out", // Efek easing
  scrollTrigger: {
    trigger: "#webml", // Elemen yang memicu animasi
    start: "top 80%", // Mulai animasi saat bagian atas elemen berada di 80% viewport
    toggleActions: "play none none none", // Tindakan saat trigger muncul
  },
});

// Animasi untuk judul dan paragraf pertama
gsap.from("#web-title, #web-description", {
  y: 50, // Memulai dari bawah
  opacity: 0, // Memulai dengan transparan
  duration: 0.5, // Durasi animasi
  ease: "power2.out", // Efek easing
  stagger: 0.2, // Delay antar animasi (0.2 detik)
  scrollTrigger: {
    trigger: "#webml", // Elemen yang memicu animasi
    start: "top 80%", // Mulai animasi saat bagian atas elemen berada di 80% viewport
    toggleActions: "play none none none", // Tindakan saat trigger muncul
  },
});

// Animasi untuk gambar kedua
gsap.from("#akun", {
  x: 200, // Memulai dari kanan
  opacity: 0, // Memulai dengan transparan
  duration: 0.5, // Durasi animasi
  ease: "power2.out", // Efek easing
  scrollTrigger: {
    trigger: "#akunml", // Elemen yang memicu animasi
    start: "top 80%", // Mulai animasi saat bagian atas elemen berada di 80% viewport
    toggleActions: "play none none none", // Tindakan saat trigger muncul
  },
});

// Animasi untuk judul dan paragraf kedua
gsap.from("#akun-title, #akun-description", {
  y: 50, // Memulai dari bawah
  opacity: 0, // Memulai dengan transparan
  duration: 0.5, // Durasi animasi
  ease: "power2.out", // Efek easing
  stagger: 0.2, // Delay antar animasi (0.2 detik)
  scrollTrigger: {
    trigger: "#akunml", // Elemen yang memicu animasi
    start: "top 80%", // Mulai animasi saat bagian atas elemen berada di 80% viewport
    toggleActions: "play none none none", // Tindakan saat trigger muncul
  },
});

gsap.registerPlugin(ScrollTrigger);

// Animasi untuk gambar dan SVG saat di-scroll
gsap.from("#myImage, #mySvg", {
  x: 100, // Memulai dari 100px di luar jendela (kanan)
  opacity: 0, // Memulai dengan transparan
  duration: 1, // Durasi animasi
  ease: "power2.out", // Efek easing
  scrollTrigger: {
    trigger: "#home", // Elemen yang memicu animasi
    start: "top 80%", // Mulai animasi saat bagian atas elemen berada di 80% viewport
    toggleActions: "play none none none", // Tindakan saat trigger muncul
  },
});

// Fungsi untuk membuka popup dengan animasi menggunakan GSAP
function openPopup(imageSrc) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popup-image");

  // Set the image source
  popupImage.src = imageSrc;

  // Tampilkan pop-up
  popup.style.display = "flex";

  // Reset animasi sebelum mulai yang baru
  gsap.set(popupImage, { scale: 0, opacity: 0 });

  // Animasi dengan GSAP
  gsap.to(popupImage, {
    duration: 0.5,
    scale: 0.7,
    opacity: 1,
    ease: "power3.out",
  });
}

// Fungsi untuk menutup popup dengan animasi menggunakan GSAP
function closePopup() {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popup-image");

  // Animasi tutup dengan GSAP
  gsap.to(popupImage, {
    duration: 0.5,
    scale: 0,
    opacity: 0,
    ease: "power3.in",
    onComplete: () => {
      // Sembunyikan pop-up setelah animasi selesai
      popup.style.display = "none";
    },
  });
}

window.onload = function () {
  // Animasi untuk sertifikat MTCNA
  gsap.from("#sertifikat-mtcna", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sertifikat-mtcna", // Elemen yang memicu animasi
      start: "top 80%", // Mulai animasi ketika 80% elemen ada di viewport
      toggleActions: "play none none none",
    },
  });

  // Animasi untuk sertifikat Redhat
  gsap.from("#sertifikat-redhat", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sertifikat-redhat", // Elemen yang memicu animasi
      start: "top 80%", // Mulai animasi ketika 80% elemen ada di viewport
      toggleActions: "play none none none",
      delay: 0.3, // Animasi Redhat muncul setelah MTCNA
    },
  });
};

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// 1. Fitur: Peringatan Kontak (Menampilkan detail kontak saat tombol diklik)
document.getElementById("contactBtn").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah navigasi
  const nama = "Nama Anda";
  const email = "nama.email@contoh.com";
  const telepon = "+62812xxxxxx";

  alert(`Kontak ${nama}:\nEmail: ${email}\nTelepon: ${telepon}`);
});

// 2. Fitur: Visualisasi/Tooltip Sederhana pada Keahlian
const skillItems = document.querySelectorAll("#skillList li");

skillItems.forEach((item) => {
  // Saat kursor masuk (mouse over)
  item.addEventListener("mouseover", function () {
    const skillName = this.getAttribute("data-skill");
    this.style.backgroundColor = "#007bff";
    this.style.color = "white";
    this.title = `Saya memiliki pengalaman yang kuat di ${skillName}.`; // Tooltip
  });

  // Saat kursor keluar (mouse out)
  item.addEventListener("mouseout", function () {
    this.style.backgroundColor = "transparent";
    this.style.color = "#333";
    this.title = "";
  });
});

// 3. Fitur: Efek Fade-in saat elemen muncul di layar
const sections = document.querySelectorAll(".fade-in");

const options = {
  threshold: 0.1, // Mulai muncul saat 10% elemen terlihat
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target); // Berhenti mengamati setelah muncul
    }
  });
}, options);

sections.forEach((section) => {
  // Setel kondisi awal untuk efek fade-in
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 1s ease-out, transform 0.5s ease-out";
  observer.observe(section);
});

// 1. Salam otomatis sesuai jam
const kontak = document.getElementById("kontak");
const jam = new Date().getHours();
let salam = "GOOD NIGHTT";
if (jam < 11) salam = "pagiieee";
else if (jam < 15) salam = "met sianggg";
else if (jam < 18) salam = "sore";

const email = "nidafauziyahindiragesty@gmail.com"; // ganti dengan emailmu
kontak.textContent = `${salam}! EMAILKUUU`;

// 2. Salin email saat diklik
kontak.style.cursor = "pointer";
kontak.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    kontak.textContent = "Email tersalin ✓";
  } catch {
    kontak.textContent = email;
  }
  setTimeout(() => {
    kontak.textContent = `${salam}! EMAILKUUU`;
  }, 2000);
});

// 3. Efek mengetik pada profesi
const profesi = document.querySelector(".profesi");
const teks = profesi.textContent;
profesi.textContent = "";
let i = 0;
const ketik = setInterval(() => {
  profesi.textContent += teks[i];
  i++;
  if (i >= teks.length) clearInterval(ketik);
}, 80);

// 4. Dark mode + simpan pilihan
const tombolTema = document.getElementById("tema");

function terapkanTema(gelap) {
  document.body.classList.toggle("gelap", gelap);
  tombolTema.textContent = gelap ? "☀️" : "🌙";
}

terapkanTema(localStorage.getItem("tema") === "gelap");

tombolTema.addEventListener("click", () => {
  const gelap = !document.body.classList.contains("gelap");
  terapkanTema(gelap);
  localStorage.setItem("tema", gelap ? "gelap" : "terang");
});
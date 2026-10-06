// Replace this number with Lenjan Traders Limited's WhatsApp number.
// Use international format without + or spaces, e.g. 2547XXXXXXXX.
const WHATSAPP_NUMBER = "254700000000";

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Hello Lenjan Traders Limited, I would like to enquire/order: ${product}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  });
});

document.getElementById("whatsapp-link").addEventListener("click", (event) => {
  if (WHATSAPP_NUMBER === "254700000000") {
    event.preventDefault();
    alert("Please replace WHATSAPP_NUMBER in script.js with the company's real WhatsApp number.");
    return;
  }
  event.currentTarget.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Lenjan Traders Limited, I would like to make an enquiry.")}`;
});

"use strict";

// Select elements
const modal = document.querySelector(".modal");
const bestevenn = document.querySelector(".bestevenn");
const mer = document.querySelector(".mer");
const close = document.querySelector(".close");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Open modal
bestevenn.addEventListener('click', openModal);

// Close modal
window.onclick = function (event) { // Clicking outside modal
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
close.addEventListener('click', closeModal); // Click on the cross

document.addEventListener('keydown', function (e) { // Pressing "Escape"
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
})
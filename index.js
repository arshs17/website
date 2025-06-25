let animated = document.querySelectorAll('.animated');

function checkEntry(entry) {
    if (entry.isIntersecting) {
        entry.target.classList.add('showanimation');
    } else {
        entry.target.classList.remove('showanimation');
    }
}

function ifIntersection(entries) {
    entries.forEach(checkEntry);
}

const observer = new IntersectionObserver(ifIntersection);

function observerFunction(element) {
    observer.observe(element);
}

animated.forEach(observerFunction);

let links = document.getElementById("links");
function dispNav(){
    if (links.style.display === "flex"){
        links.style.display = "none";
    }
    else {
        links.style.display = "flex";
    }
}

// written by Arsh Sharma
window.onscroll = function() {
    const button = document.getElementById("backtotop"); if (document.documentElement.scrollTop > 200) { button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' });
}

// Leadership modal (already works)
document.getElementById("open").addEventListener("click", () => {
    document.getElementById("modal_container").classList.add("show");
});
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("modal_container").classList.remove("show");
});

// Other skill modals
document.getElementById("open-analytical").addEventListener("click", () => {
    document.getElementById("modal-analytical").classList.add("show");
});
document.getElementById("open-adaptability").addEventListener("click", () => {
    document.getElementById("modal-adaptability").classList.add("show");
});
document.getElementById("open-communication").addEventListener("click", () => {
    document.getElementById("modal-communication").classList.add("show");
});
document.getElementById("open-initiative").addEventListener("click", () => {
    document.getElementById("modal-initiative").classList.add("show");
});
document.getElementById("open-storytelling").addEventListener("click", () => {
    document.getElementById("modal-storytelling").classList.add("show");
});
document.getElementById("open-collab").addEventListener("click", () => {
    document.getElementById("modal-collab").classList.add("show");
});
document.getElementById("open-resilience").addEventListener("click", () => {
    document.getElementById("modal-resilience").classList.add("show");
});

// Close all other modals
document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".modal-container").classList.remove("show");
    });
});

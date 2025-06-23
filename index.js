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
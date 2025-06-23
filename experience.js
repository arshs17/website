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



const counters = [
    { id: "number", max: 93, duration: 2600 },
    { id: "number2", max: 90, duration: 2800 },
    { id: "number3", max: 85, duration: 3000 },
    { id: "number4", max: 88, duration: 2700 },
    { id: "number5", max: 87, duration: 2400 },
    { id: "number6", max: 89, duration: 2200 }
];

let numberStarted = new Set();

const duration = 2600;
const dasharray = 450;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            if (entry.target.classList.contains('skill-wrapper') && !numberStarted.has(entry.target)) {
                numberStarted.add(entry.target);

                let number = entry.target.querySelector('span');
                let max = counters.find(c => c.id === number.id)?.max || 65;
                let counter = 0;

                const intervalTime = duration / max;
                const interval = setInterval(() => {
                    if (counter === max) {
                        clearInterval(interval);
                    } else {
                        counter += 1;
                        number.innerHTML = `${counter}%`;
                    }
                }, intervalTime);

                // 🔵 Fix: Dynamic stroke-dashoffset based on % fill
                const circle = entry.target.querySelector('circle');
                const offset = dasharray - (dasharray * max / 100);
                circle.style.strokeDashoffset = offset;
                circle.style.transition = `stroke-dashoffset ${duration}ms linear`;
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .skill-wrapper');
hiddenElements.forEach((el) => observer.observe(el));



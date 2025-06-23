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
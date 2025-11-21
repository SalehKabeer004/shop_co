// document.querySelectorAll(".feature-products").forEach(section => {
//     section.addEventListener("wheel", function(e) {
//         e.preventDefault();
//         this.scrollLeft += e.deltaY;
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".feature-products").forEach(section => {
        section.addEventListener("wheel", function (e) {
            if (e.deltaY == 0) return; // ignore horizontal scroll wheels
            e.preventDefault();        // allow scroll override
            section.scrollLeft += e.deltaY;
        }, { passive: false });        // IMPORTANT
    });
});

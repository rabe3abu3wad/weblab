//page to navigate
function loadPage(page) {

    let ifrrameElement = document.getElementById("contentFrame");
    document.getElementById("contentFrame").src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}
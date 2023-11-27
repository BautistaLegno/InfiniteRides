document.addEventListener("DOMContentLoaded", function() {
    const openSidebarBtn = document.getElementById("openSidebarBtn");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    openSidebarBtn.addEventListener("click", function() {
        if (sidebar.style.width === "160px") {
            sidebar.style.width = "0";
            content.style.marginLeft = "0";
        } else {
            sidebar.style.width = "160px";
            content.style.marginLeft = "160px";
        }
    });
});

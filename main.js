const sidebar = document.querySelector(".sidebar-js");
const sidebarNav = document.querySelector(".sidebar__nav");
const sidebarBtnOpen = document.querySelector(".dashboard__sidebar--mob-open");

const handleSidebarClose = () => {
  sidebar.style.display = "none";
  sidebarBtnOpen.style.display = "block";
};

const handleSidebarOpen = () => {
  sidebar.style.display = "block";
  sidebarBtnOpen.style.display = "none";
};

sidebarNav.addEventListener("click", handleSidebarClose);
sidebarBtnOpen.addEventListener("click", handleSidebarOpen);

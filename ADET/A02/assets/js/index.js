var toggleBtn = document.getElementById('toggleBtn');
var sidebar = document.getElementById('sidebar');
var icon = document.getElementById('sidebarIcon');

function getSidebarState() {
  return localStorage.getItem('sidebarState') === 'expanded';
}

function setSidebarInitialState() {
  if (window.innerWidth < 800) {
    sidebar.classList.remove('expanded');
    sidebar.classList.add('collapsed');
    toggleBtn.style.display = 'none';
    localStorage.setItem('sidebarState', 'collapsed'); 
  } else {
    if (getSidebarState()) {
      sidebar.classList.add('expanded');
      sidebar.classList.remove('collapsed');
      icon.classList.add('bi-arrow-bar-left');
      icon.classList.remove('bi-arrow-bar-right');
      toggleBtn.setAttribute('title', 'Collapse Your Library');
    } else {
      sidebar.classList.remove('expanded');
      sidebar.classList.add('collapsed');
      icon.classList.remove('bi-arrow-bar-left');
      icon.classList.add('bi-arrow-bar-right');
      toggleBtn.setAttribute('title', 'Expand Your Library');
    }
    toggleBtn.style.display = '';
  }
}

setSidebarInitialState();

toggleBtn.addEventListener('click', function () {
  if (sidebar.classList.contains('expanded')) {
    sidebar.classList.remove('expanded');
    sidebar.classList.add('collapsed');
    icon.classList.remove('bi-arrow-bar-left');
    icon.classList.add('bi-arrow-bar-right');
    toggleBtn.setAttribute('title', 'Expand Your Library');
    localStorage.setItem('sidebarState', 'collapsed'); 
  } else {
    sidebar.classList.add('expanded');
    sidebar.classList.remove('collapsed');
    icon.classList.add('bi-arrow-bar-left');
    icon.classList.remove('bi-arrow-bar-right');
    toggleBtn.setAttribute('title', 'Collapse Your Library');
    localStorage.setItem('sidebarState', 'expanded');
  }
});

window.addEventListener('resize', function () {
  setSidebarInitialState();
});


document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  const COMPACT_BREAKPOINT = 1200;
  
  function updateSidebarMode() {
    if (window.innerWidth < COMPACT_BREAKPOINT && window.innerWidth >= 992) {
      sidebar.classList.add('compact-mode');
    } else {
      sidebar.classList.remove('compact-mode');
    }
    
    if (window.innerWidth < 992) {
      sidebar.classList.remove('compact-mode');
    }
  }
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
    
    content.addEventListener('click', function() {
      if (window.innerWidth < 992 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 992 && sidebar) {
      sidebar.classList.remove('active');
    }
    updateSidebarMode();
  });
  
  updateSidebarMode();
});
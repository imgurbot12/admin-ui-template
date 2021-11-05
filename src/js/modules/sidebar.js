/*
  Custom Sidebar javascript help-functions
*/

/* Functions */

// intialize hover events for sidebar dropdowns
function initSidebarDropdowns() {
  document.querySelectorAll('.dropend.hover .dropdown-toggle').forEach(e => {
    const menu     = e.parentNode.querySelector('.dropdown-menu');
    const dropdown = window.bootstrap.Dropdown.getOrCreateInstance(e);
    // dropdown button will toggle on hover of self
    const mouseout = () => {
      // close dropdown if menu is not being hovered over (after a wait)
      setTimeout(() => {
        if (!menu.matches(':hover')) {
          dropdown.hide();
        }
      }, 300);
    };
    e.addEventListener("mouseover", () => { dropdown.show() });
    e.addEventListener("mouseout",  mouseout);
    menu.addEventListener("mouseout", mouseout);
  });
}

// intialize sidebar toggle button (if it exists)
function initSidebarToggleButton() {
  const toggle = document.getElementById("sidebarToggle");
  if (toggle) {
    toggle.addEventListener('click', event => {
      event.preventDefault();
      // find sidebar object and toggle class/margin-settings
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.page-content');
      // toggle margin-left of content to match width of sidebar
      sidebar.classList.toggle('sidebar-hide');
      content.style.marginLeft = content.style.marginLeft == '' ? `0px` : '';
    });
  }
}

// initialize sidebar collapse button (if it exists)
function initSidebarCollapseButton() {
  const collapse = document.getElementById('sidebarCollapse');
  if (collapse) {
    collapse.addEventListener('click', event => {
      event.preventDefault();
      // find sidebar and toggle collapse class
      document.querySelector('.sidebar').classList.toggle('sidebar-collapse');
    });
  }
}


/* Init */

window.addEventListener('DOMContentLoaded', () => {
  initSidebarDropdowns();
  initSidebarToggleButton();
  initSidebarCollapseButton();
});

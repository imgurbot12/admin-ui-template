/*
  Custom Sidebar javascript help-functions
*/

/* Functions */

// intialize hover events for sidebar dropdowns
function initSidebarDropdowns() {
  // track list of all dropdowns modified
  const allDropdowns = [];
  // iterate all hover dropdowns to add event handlers for
  document.querySelectorAll('.dropend.hover .dropdown-toggle').forEach(e => {
    const menu     = e.parentNode.querySelector('.dropdown-menu');
    const dropdown = window.bootstrap.Dropdown.getOrCreateInstance(e);
    allDropdowns.push(dropdown);
    //func: close dropdown if menu is not being hovered over (after a wait)
    const mouseout = () => {
      setTimeout(() => {
        if (!e.matches(':hover') && !menu.matches(':hover')) {
          dropdown.hide();
        }
      }, 300);
    };
    //func: close all other hover dropdowns and open the one being hovered over
    const mouseover = () => {
      for (const d of allDropdowns) {
        if (d !== dropdown) {
          d.hide();
        }
      }
      dropdown.show();
    };
    // add events for each function assigned
    e.addEventListener("mouseover", mouseover);
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

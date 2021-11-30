/*
  Custom Sidebar javascript help-functions
*/

/* Variables */

const HIDE     = "sidebar-hide"
const COLLAPSE = "sidebar-collapse"

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
function initSidebarToggleButton(toggle) {
  if (toggle) {
    toggle.addEventListener('click', event => {
      event.preventDefault();
      // find sidebar object and toggle class/margin-settings
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.page-content');
      // toggle margin-left of content to match width of sidebar
      sidebar.classList.toggle(HIDE);
      content.style.marginLeft = content.style.marginLeft == '' ? `0px` : '';
      window.CookieJar.set(HIDE, sidebar.classList.contains(HIDE));
    });
  }
}

// initialize sidebar collapse button (if it exists)
function initSidebarCollapseButton(collapse) {
  if (collapse) {
    collapse.addEventListener('click', event => {
      event.preventDefault();
      // find sidebar and toggle collapse class
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle(COLLAPSE);
      window.CookieJar.set(COLLAPSE, sidebar.classList.contains(COLLAPSE));
    });
  }
}


/* Init */

window.addEventListener('DOMContentLoaded', () => {
  // retrieve toggle/collapse elemenets
  const toggle   = document.getElementById("sidebarToggle");
  const collapse = document.getElementById('sidebarCollapse');
  // add event handlers to either
  initSidebarDropdowns();
  initSidebarToggleButton(toggle);
  initSidebarCollapseButton(collapse);
  // add JS support for cookies
  if (window.CookieJar.get(HIDE) || window.CookieJar.get(COLLAPSE)) {
    // get sidebar/page-content objects to disable transitions
    const sidebar  = document.querySelector('.sidebar');
    const content  = document.querySelector('.page-content');
    sidebar.classList.add('notransition');
    content.classList.add('notransition');
    // handle relevant clicks if not already toggled
    if (window.CookieJar.bool(COLLAPSE) && !sidebar.classList.contains(COLLAPSE)) {
      collapse.click();
    }
    if (window.CookieJar.bool(HIDE) && !sidebar.classList.contains(HIDE)) {
      toggle.click();
    }
    setTimeout(() => {
      sidebar.classList.remove('notransition');
      content.classList.remove('notransition');
    }, 500);
  }
});

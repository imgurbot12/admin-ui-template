
/* Variables */

const HIDE     = "sidebar-hide"
const COLLAPSE = "sidebar-collapse"

/* Functions */

function initCollapseButton(collapse: object) {
  if (!collapse) { return }
  collapse.addEventListener('click', event => {
    event.preventDefault()
    // find sidebar and toggle collapse class
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle(COLLAPSE)
  });
}

/* Init */

window.addEventListener('DOMContentLoaded', () => {
  const collapse = document.getElementById('sidebarCollapse')
  initCollapseButton(collapse)
});

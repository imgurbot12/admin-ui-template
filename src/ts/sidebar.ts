
/* Variables */

const COLLAPSE = "sidebar-collapse"

/* Functions */

function initCollapseButton(collapse: HTMLElement | null) {
  if (!collapse) { return }
  collapse.addEventListener('click', event => {
    event.preventDefault()
    // find sidebar and toggle collapse class
    const sidebar = document.querySelector('.sidebar')
    if (sidebar) {
      sidebar.classList.toggle(COLLAPSE)
    }
  });
}

/* Init */

window.addEventListener('DOMContentLoaded', () => {
  const collapse = document.getElementById('sidebarCollapse')
  initCollapseButton(collapse)
});

export {}

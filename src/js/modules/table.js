/*
  Custom Table javascript help-functions
*/

/* Functions */

function initDataTables() {
  document.querySelectorAll('.table-responsive').forEach(e => {
    const dataTable = new window.DataTable(e, {
        paging:     e.hasAttribute('page'),
        searchable: e.hasAttribute('search'),
    });
  });
}

/* Init */

window.addEventListener('DOMContentLoaded', () => {
  initDataTables();
});

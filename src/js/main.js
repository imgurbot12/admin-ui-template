// Load External Libraries
import * as bootstrap from 'bootstrap';
import {DataTable} from "simple-datatables";

// Expose Libraries
window.bootstrap = bootstrap;
window.DataTable = DataTable;

// Load Styles
import '../scss/main.scss';

// Load Modules
import "./modules/sidebar";
import "./modules/table";

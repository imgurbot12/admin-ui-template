// Load External Libraries
import * as bootstrap from 'bootstrap';
import {DataTable} from "simple-datatables";

// Load Interal Libraries
import "./libraries/cookies";

// Expose Libraries
window.bootstrap = bootstrap;
window.DataTable = DataTable;

// Load Styles
import '../scss/main.scss';

// Load Modules
import "./modules/sidebar";
import "./modules/table";

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-booth-selection',
  templateUrl: './booth-selection.component.html',
  styleUrls: ['./booth-selection.component.css'],
})
export class BoothSelectionComponent {
  loading: boolean = false;
  boothCategories: any = [];
  booths: any = {};
  boothsSelected: any = [];
  boothRows: any = [
    // Row 1
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '830', status: 'Y' },
      { code: 'primec', boothNo: '731', status: 'Y' },
      { code: 'primec', boothNo: '730', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '642', status: 'Y' },
      { code: 'primec', boothNo: '641', status: 'Y' },
      { code: 'primec', boothNo: '640', status: 'Y' },
      { code: 'primec', boothNo: '532', status: 'Y' },
      { code: 'primec', boothNo: '531', status: 'Y' },
      { code: 'primec', boothNo: '530', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 2
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 3
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 4
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 5
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1026', status: 'Y' },
      { code: 'sponsorship', boothNo: '927', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '826', status: 'Y' },
      { code: 'primea', boothNo: '727', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '726', status: 'Y' },
      { code: 'primeb', boothNo: '627', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '626', status: 'Y' },
      { code: 'primeb', boothNo: '527', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '526', status: 'Y' },
      { code: 'primea', boothNo: '427', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '426', status: 'Y' },
      { code: 'primea', boothNo: '327', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '326', status: 'Y' },
      { code: 'primea', boothNo: '227', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 6
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1025', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1024', status: 'Y' },
      { code: 'sponsorship', boothNo: '925', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '924', status: 'Y' },
      { code: 'primea', boothNo: '825', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '824', status: 'Y' },
      { code: 'primec', boothNo: '725', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '724', status: 'Y' },
      { code: 'primec', boothNo: '625', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '624', status: 'Y' },
      { code: 'primec', boothNo: '525', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '524', status: 'Y' },
      { code: 'primec', boothNo: '425', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '424', status: 'Y' },
      { code: 'primeb', boothNo: '325', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '324', status: 'Y' },
      { code: 'primea', boothNo: '225', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '224', status: 'Y' },
      { code: 'primea', boothNo: '125', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'T', status: 'Y' },
    ],
    // Row 7
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1122', status: 'Y' },
      { code: 'sponsorship', boothNo: '1023', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1022', status: 'Y' },
      { code: 'sponsorship', boothNo: '923', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '922', status: 'Y' },
      { code: 'primeb', boothNo: '823', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '822', status: 'Y' },
      { code: 'primec', boothNo: '723', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '722', status: 'Y' },
      { code: 'primec', boothNo: '623', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '622', status: 'Y' },
      { code: 'primec', boothNo: '523', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '522', status: 'Y' },
      { code: 'primec', boothNo: '423', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '422', status: 'Y' },
      { code: 'primeb', boothNo: '323', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '322', status: 'Y' },
      { code: 'primea', boothNo: '223', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '222', status: 'Y' },
      { code: 'primea', boothNo: '123', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'R', status: 'Y' },
    ],
    // Row 8
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1120', status: 'Y' },
      { code: 'sponsorship', boothNo: '1021', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1020', status: 'Y' },
      { code: 'sponsorship', boothNo: '921', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '920', status: 'Y' },
      { code: 'primeb', boothNo: '821', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '820', status: 'Y' },
      { code: 'primec', boothNo: '721', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '720', status: 'Y' },
      { code: 'primec', boothNo: '621', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '620', status: 'Y' },
      { code: 'primec', boothNo: '521', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '520', status: 'Y' },
      { code: 'primec', boothNo: '421', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '420', status: 'Y' },
      { code: 'primeb', boothNo: '321', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '320', status: 'Y' },
      { code: 'primea', boothNo: '221', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '220', status: 'Y' },
      { code: 'primea', boothNo: '121', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'U', status: 'Y' },
    ],
    // Row 9
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1118', status: 'Y' },
      { code: 'sponsorship', boothNo: '1019', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1018', status: 'Y' },
      { code: 'sponsorship', boothNo: '919', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '918', status: 'Y' },
      { code: 'primeb', boothNo: '819', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '818', status: 'Y' },
      { code: 'primec', boothNo: '719', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '718', status: 'Y' },
      { code: 'primec', boothNo: '619', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '618', status: 'Y' },
      { code: 'primec', boothNo: '519', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '518', status: 'Y' },
      { code: 'primec', boothNo: '419', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '418', status: 'Y' },
      { code: 'primeb', boothNo: '319', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '318', status: 'Y' },
      { code: 'primea', boothNo: '219', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '218', status: 'Y' },
      { code: 'primea', boothNo: '119', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'O', status: 'Y' },
    ],
    // Row 10
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1116', status: 'Y' },
      { code: 'sponsorship', boothNo: '1017', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1016', status: 'Y' },
      { code: 'sponsorship', boothNo: '917', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '916', status: 'Y' },
      { code: 'primeb', boothNo: '817', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '816', status: 'Y' },
      { code: 'primec', boothNo: '717', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '716', status: 'Y' },
      { code: 'primec', boothNo: '617', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '616', status: 'Y' },
      { code: 'primeb', boothNo: '517', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '516', status: 'Y' },
      { code: 'primec', boothNo: '417', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '416', status: 'Y' },
      { code: 'primeb', boothNo: '317', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '316', status: 'Y' },
      { code: 'primea', boothNo: '217', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '216', status: 'Y' },
      { code: 'primea', boothNo: '117', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'C', status: 'Y' },
    ],
    // Row 11
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '914', status: 'Y' },
      { code: 'primeb', boothNo: '815', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '714', status: 'Y' },
      { code: 'primec', boothNo: '615', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '514', status: 'Y' },
      { code: 'primec', boothNo: '415', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '314', status: 'Y' },
      { code: 'primea', boothNo: '215', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 12
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1212', status: 'Y' },
      { code: 'sponsorship', boothNo: '1113', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1112', status: 'Y' },
      { code: 'sponsorship', boothNo: '1013', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1012', status: 'Y' },
      { code: 'sponsorship', boothNo: '913', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '912', status: 'Y' },
      { code: 'primeb', boothNo: '813', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '812', status: 'Y' },
      { code: 'primea', boothNo: '713', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '712', status: 'Y' },
      { code: 'primec', boothNo: '613', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '612', status: 'Y' },
      { code: 'primeb', boothNo: '513', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '512', status: 'Y' },
      { code: 'primec', boothNo: '413', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '412', status: 'Y' },
      { code: 'primeb', boothNo: '313', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '312', status: 'Y' },
      { code: 'primea', boothNo: '213', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '212', status: 'Y' },
      { code: 'primea', boothNo: '113', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'D', status: 'Y' },
    ],
    // Row 13
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1210', status: 'Y' },
      { code: 'sponsorship', boothNo: '1111', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1110', status: 'Y' },
      { code: 'sponsorship', boothNo: '1011', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1010', status: 'Y' },
      { code: 'sponsorship', boothNo: '911', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '910', status: 'Y' },
      { code: 'primeb', boothNo: '811', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '810', status: 'Y' },
      { code: 'primec', boothNo: '711', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '710', status: 'Y' },
      { code: 'primec', boothNo: '611', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '610', status: 'Y' },
      { code: 'primec', boothNo: '511', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '510', status: 'Y' },
      { code: 'primec', boothNo: '411', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '410', status: 'Y' },
      { code: 'primeb', boothNo: '311', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '310', status: 'Y' },
      { code: 'primea', boothNo: '211', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '210', status: 'Y' },
      { code: 'primea', boothNo: '111', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'O', status: 'Y' },
    ],
    // Row 14
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1208', status: 'Y' },
      { code: 'sponsorship', boothNo: '1109', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1108', status: 'Y' },
      { code: 'sponsorship', boothNo: '1009', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1008', status: 'Y' },
      { code: 'sponsorship', boothNo: '909', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '908', status: 'Y' },
      { code: 'primeb', boothNo: '809', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '808', status: 'Y' },
      { code: 'primec', boothNo: '709', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '708', status: 'Y' },
      { code: 'primec', boothNo: '609', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '608', status: 'Y' },
      { code: 'primec', boothNo: '509', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '508', status: 'Y' },
      { code: 'primec', boothNo: '409', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '408', status: 'Y' },
      { code: 'primeb', boothNo: '309', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '308', status: 'Y' },
      { code: 'primea', boothNo: '209', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '208', status: 'Y' },
      { code: 'primea', boothNo: '109', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'O', status: 'Y' },
    ],
    // Row 15
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1006', status: 'Y' },
      { code: 'sponsorship', boothNo: '907', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '906', status: 'Y' },
      { code: 'primeb', boothNo: '807', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '806', status: 'Y' },
      { code: 'primec', boothNo: '707', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '706', status: 'Y' },
      { code: 'primec', boothNo: '607', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '606', status: 'Y' },
      { code: 'primec', boothNo: '507', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '506', status: 'Y' },
      { code: 'primec', boothNo: '407', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primec', boothNo: '406', status: 'Y' },
      { code: 'primeb', boothNo: '307', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primeb', boothNo: '306', status: 'Y' },
      { code: 'primea', boothNo: '207', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '206', status: 'Y' },
      { code: 'primea', boothNo: '107', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'foodcourt', boothNo: 'F', status: 'Y' },
    ],
    // Row 16
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1204', status: 'Y' },
      { code: 'sponsorship', boothNo: '1105', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1104', status: 'Y' },
      { code: 'sponsorship', boothNo: '1005', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '1004', status: 'Y' },
      { code: 'sponsorship', boothNo: '905', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '904', status: 'Y' },
      { code: 'primea', boothNo: '805', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '804', status: 'Y' },
      { code: 'primea', boothNo: '705', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '704', status: 'Y' },
      { code: 'primea', boothNo: '605', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '604', status: 'Y' },
      { code: 'primea', boothNo: '505', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '504', status: 'Y' },
      { code: 'primea', boothNo: '405', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '404', status: 'Y' },
      { code: 'primea', boothNo: '305', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '304', status: 'Y' },
      { code: 'primea', boothNo: '205', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '204', status: 'Y' },
      { code: 'primea', boothNo: '105', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 17
    [
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'food justify-content-end', boothNo: 'FO', status: 'Y' },
      { code: 'food justify-content-start', boothNo: 'OD', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
    // Row 18
    [
      { code: 'sponsorship', boothNo: '1202', status: 'Y' },
      { code: 'sponsorship', boothNo: '1201', status: 'Y' },
      { code: 'sponsorship', boothNo: '1200', status: 'Y' },
      { code: 'sponsorship', boothNo: '1102', status: 'Y' },
      { code: 'sponsorship', boothNo: '1101', status: 'Y' },
      { code: 'sponsorship', boothNo: '1100', status: 'Y' },
      { code: 'sponsorship', boothNo: '1003', status: 'Y' },
      { code: 'sponsorship', boothNo: '1001', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'sponsorship', boothNo: '903', status: 'Y' },
      { code: 'sponsorship', boothNo: '902', status: 'Y' },
      { code: 'sponsorship', boothNo: '901', status: 'Y' },
      { code: 'sponsorship', boothNo: '900', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '801', status: 'Y' },
      { code: 'primeb', boothNo: '800', status: 'Y' },
      { code: 'primeb', boothNo: '701', status: 'Y' },
      { code: 'primea', boothNo: '700', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '600', status: 'Y' },
      { code: 'primeb', boothNo: '501', status: 'Y' },
      { code: 'primeb', boothNo: '500', status: 'Y' },
      { code: 'primea', boothNo: '401', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'primea', boothNo: '400', status: 'Y' },
      { code: 'primeb', boothNo: '301', status: 'Y' },
      { code: 'primea', boothNo: '300', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'management', boothNo: '', status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
      { code: 'blank', boothNo: null, status: 'Y' },
    ],
  ];
  boothFloatingRow: any = [
    [
      { code: 'primeb', boothNo: '1219', status: 'Y' },
      { code: 'primeb', boothNo: '1221', status: 'Y' },
      { code: 'primeb', boothNo: '1223', status: 'Y' },
      { code: 'primeb', boothNo: '1225', status: 'Y' },
      { code: 'primeb', boothNo: '1227', status: 'Y' },
      { code: 'primeb', boothNo: '1229', status: 'Y' },
      { code: 'primeb', boothNo: '1231', status: 'Y' },
      { code: 'primeb', boothNo: '1232', status: 'Y' },
      { code: 'primeb', boothNo: '1234', status: 'Y' },
    ],
  ];

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getBoothsCategories();
    this.getBooths();

    // setInterval(() => {
    // this.getBooths();
    // }, 10000);
  }

  getBoothsCategories() {
    const data = {
      path: 'booths/list/categories',
      payload: {},
    };
    this.apiService.postRequest(data).subscribe((response) => {
      this.boothCategories = response.data;
    });
  }

  getBooths() {
    const data = {
      path: 'booths/list',
      payload: {},
    };
    this.apiService.postRequest(data).subscribe((response) => {
      const data = response.data;
      for (const item of data) {
        if (this.booths[item.boothNo] == 'undefined') {
          this.booths[item.boothNo] = {};
        }

        this.booths[item.boothNo] = {
          boothId: item.id,
          boothNo: item.boothNo,
          boothStatus: item.isActive,
          boothCategoryId: item.boothCategoryId,
          boothCategory: item.boothCategory,
          bookingBooth: item.bookingBooth,
        };
      }

      this.setBoothData();
    });
  }

  setBoothData() {
    this.boothFloatingRow.forEach((row: any) => {
      row.forEach((booth: any) => {
        if (booth.boothNo) {
          const data = this.booths[booth.boothNo];

          booth.boothId = data.boothId;
          booth.boothStatus = data.boothStatus;
          booth.boothCategoryId = data.boothCategoryId;
          booth.boothCategory = data.boothCategory;
        }
      });
    });

    this.boothRows.forEach((row: any) => {
      row.forEach((booth: any) => {
        if (booth.boothNo) {
          const data = this.booths[booth.boothNo];

          if (data) {
            booth.boothId = data.boothId;
            booth.boothStatus = data.boothStatus;
            booth.boothCategoryId = data.boothCategoryId;
            booth.boothCategory = data.boothCategory;
          }
        }
      });
    });

    var selectedBooths: any = localStorage.getItem('selectedBooths');
    selectedBooths = JSON.parse(selectedBooths);
    if (selectedBooths) {
      this.boothsSelected = [];
      selectedBooths.forEach((selectedBooth: any) => {
        this.boothRows.forEach((row: any) => {
          row.forEach((booth: any) => {
            if (booth.boothNo == selectedBooth.boothNo && booth.status == 'Y') {
              booth.selected = true;
              this.boothsSelected.push(booth);
            }
          });
        });
      });
    }
    this.eventService.setBoothDetails(this.boothsSelected);
  }

  updateSelectedBooths(boothNo: any) {
    return this.boothsSelected.filter((item: any) => item.boothNo !== boothNo);
  }

  checkBoothStatus(booth: any) {
    if (booth.code != 'management' && !booth.code.includes('food')) {
      if (
        booth.boothNo &&
        booth.boothStatus != 'H' &&
        booth.boothStatus != 'S'
      ) {
        if (booth.selected) {
          booth.selected = false;
          this.boothsSelected = this.updateSelectedBooths(booth.boothNo);
          this.eventService.setBoothDetails(this.boothsSelected);
        } else {
          if (this.boothsSelected.length < 2) {
            this.toastr.info('Checking Booth Availbility ...', 'Info!');

            const data = {
              path: 'booths/status/check ',
              payload: {
                boothNo: booth.boothNo,
              },
            };
            this.apiService.postRequest(data).subscribe((response: any) => {
              if (response.status == 1) {
                booth.selected = true;
                this.boothsSelected.push(booth);
                this.eventService.setBoothDetails(this.boothsSelected);
                this.toastr.clear();
              } else {
                this.toastr.error(response.message, 'Alert!');
                this.getBooths();
              }
            });
          } else {
            this.toastr.error('You can book a maximum of Two booths', 'Alert!');
          }
        }
      } else {
        this.toastr.error('Kindly select the desired booth', 'Alert!');
      }
    }
  }

  checkPrice(value: any) {
    return (
      !isNaN(value) &&
      (function (x) {
        return (x | 0) === x;
      })(parseFloat(value))
    );
  }
}

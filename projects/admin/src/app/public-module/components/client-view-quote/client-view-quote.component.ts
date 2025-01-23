import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatStepper} from '@angular/material';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {convertURLParamToDecodeQuote} from '../../../../utility/common-functions';
import {AdminAPI} from '../../../../utility/constants/api';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {QuoteMaster} from '../../models/quote-master.model';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-client-view-quote',
  templateUrl: './client-view-quote.component.html',
  styleUrls: ['./client-view-quote.component.scss']
})

export class ClientViewQuoteComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  quoteMaster: QuoteMaster;
  quoteLeadStep: any;
  quoteLeadAllStep: any;
  emailTemplate: any;
  payrollService = [];
  ongoingBookkeeping = [];
  backlogBookkeeping = [];
  ongoingRateCard = [];
  payrollRateCard = [];
  backlogRateCard = [];
  serviceAgreed = [];
  taxation = [];
  agreeForm: FormGroup;
  disagreeForm: FormGroup;
  coreData: any;
  ongoingTotal = 0;
  backlogTotal = 0;
  payrollTotal = 0;
  payrollHour = 0;
  equalJSON = {};
  isTermAgree = 0;
  showNextSetp = 0;
  url = '';
  backlogTotalHours = 0;
  ongoingTotalHours = 0;

  constructor(private _fb: FormBuilder, public _router: Router, public route: ActivatedRoute, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.isTermAgree = 1;
    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecodeQuote(params);
        if (dataItem) {
          if (dataItem['key']) {
            this._commonCrudService.listData(AdminAPI.QUOTE_VIEWDETAIL, {}, {'compare': {'equal': {'zoho_lead_token': dataItem['key']}}}).subscribe(Response => {
              const id = Response;
              this.quotepreviewdetail(id[0]['id']);
              this.getLeadStep(id[0]['id'], id[0]['service_id']);
              this.quoteMaster = Response;
              if (dataItem['event'] && dataItem['event'] !== '') {
                this.quoteLeadStep = 2;
                this.docusignForm(id[0]['id'], dataItem['event']);
              }
            });
          }
        }
      });
    this.createForm();
    this.createDisagreeForm();
  }

  getLeadStep(id: number, serviceId: string) {
    this._commonCrudService.listData(AdminAPI.QUOTE_LEADSTEP + '/' + id, {}, {}).subscribe(Response => {
      this.quoteLeadStep = (Response.payload.data) ? Response.payload.data : 0;
      this.quoteLeadAllStep = (Response.payload.allStep) ? Response.payload.allStep : [];
      this.skip(this.quoteLeadStep, serviceId);
    });
  }

  quotepreviewdetail(id: number) {
    this._commonCrudService.getData(AdminAPI.QUOTE_PREVIEW, id, {'type': 3}, {}).subscribe(response => {
      this.coreData = response.payload.data.coreData;
      this.serviceAgreed = (this.coreData.quoteMaster['service_id']) ? this.coreData.quoteMaster['service_id'].split(',') : [];
      if (this.serviceAgreed.indexOf('1') !== -1) {
        this.ongoingBookkeeping = (response.payload.data.coreData['bookkeeping']['1']) ? response.payload.data.coreData['bookkeeping']['1'] : [];
        this.backlogBookkeeping = (response.payload.data.coreData['bookkeeping']['18']) ? response.payload.data.coreData['bookkeeping']['18'] : [];
      }
      if (this.serviceAgreed.indexOf('2') !== -1) {
        this.payrollService = (response.payload.data.coreData['payroll'][2]) ? response.payload.data.coreData['payroll'][2] : [];
      }
      if (this.serviceAgreed.indexOf('6') !== -1) {
        this.taxation = (response.payload.data.coreData['taxation']) ? response.payload.data.coreData['taxation'] : [];
      }
      const ongoingDatavalue = (this.ongoingBookkeeping['Cost']) ? Object.entries(this.ongoingBookkeeping['Cost']) : [];
      const backlogDatavalue = (this.backlogBookkeeping['Cost']) ? Object.entries(this.backlogBookkeeping['Cost']) : [];
      const payrollDatavalue = (this.payrollService['Cost']) ? Object.entries(this.payrollService['Cost']) : [];

      ongoingDatavalue.forEach(dataValue => {
        if (dataValue[1]['amount'] !== '0.00' && dataValue[1]['master_id'] !== '2') {
          this.ongoingRateCard.push(dataValue[1]);
          this.ongoingTotal += parseInt(dataValue[1]['amount'], 10);
          this.ongoingTotalHours += parseInt(dataValue[1]['hour'], 10);
        }
      });

      payrollDatavalue.forEach(dataValue => {
        // console.log(dataValue['amount']);
        if (dataValue['amount'] !== '0.00' && dataValue['amount'] !== 0) {
          this.payrollRateCard.push(dataValue);
          this.payrollTotal += Number(dataValue['amount']);
        }
        if (dataValue && dataValue[0] === 'hour') {
          this.payrollHour += Number(dataValue[1]);
        }
      });

      backlogDatavalue.forEach(dataValue => {
        if (dataValue[1]['amount'] !== '0.00' && dataValue[1]['master_id'] !== '2') {
          this.backlogRateCard.push(dataValue[1]);
          this.backlogTotal += parseInt(dataValue[1]['amount'], 10);
          this.backlogTotalHours += parseInt(dataValue[1]['hour'], 10);
        }
      });
    });
  }

  createForm() {
    this.agreeForm = this._fb.group({
      terms: new FormControl(null, <any> Validators.required)
    });
  }

  createDisagreeForm() {
    this.disagreeForm = this._fb.group({
      decline_reason: new FormControl(null, <any> Validators.required)
    });
  }

  chooseTerm(event) {
    this.isTermAgree = 0;
    if (event === true) {
      this.isTermAgree = 1;
    }
  }

  submitForm(form: FormGroup, action: number) {
    form.value['quote_master_id'] = this.coreData.quoteMaster.id;
    form.value['step'] = 1;
    form.value['action'] = action;
    form.value['is_termcondition_agree'] = (this.isTermAgree) ? 1 : 0;
    this._commonCrudService.addData(AdminAPI.QUOTE_AGREEDISAGREE, form.value).subscribe((response) => {
      if (action === 1) {
        this.showNextSetp = response.payload.data.nextStep;
        console.log(this.showNextSetp);
        if (this.showNextSetp === 0) {
          this._router.navigate(['/' + AdminRoutes.QUOTE_THANKYOU]);
        } else {
          this._router.navigate([]).then(result => {
            this.url = response.payload.data.other.url;
            window.open(response.payload.data.other.url, '_blank');
          });
        }
      } else {
        this._router.navigate(['/' + AdminRoutes.QUOTE_THANKYOU]);
      }
    });
  }

  docusignForm(id: number, status: string) {
    if (this.quoteLeadStep === 2) {
      const param = {};
      param['envelope_status'] = status;
      param['_method'] = 'put';
      this._commonCrudService.updateDataWithPut(AdminAPI.QUOTE_DOCUSIGN, id, param).subscribe((response) => {
        this._router.navigate(['/' + AdminRoutes.QUOTE_THANKYOU]);
      });
    }
  }

  skip(value: number, serviceId: string) {
    const step = value - 1;
    if (value !== 0 && serviceId === '6') {
      this.stepper.selectedIndex = step;
    }

    if (this.quoteLeadStep === 0 || value === 0) {
      this._router.navigate(['/' + AdminRoutes.QUOTE_THANKYOU]);
    }
  }

  disagree(value: number) {
    this.showNextSetp = value;
  }
}

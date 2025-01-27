import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {SharedService} from '../utility/shared-service/shared.service';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {CommonCrudService} from '../utility/shared-service/common-crud.service';
import {AdminAPI} from '../utility/constants/api';
import {GLOBALDATAKEYS, ToastType} from '../utility/constants/base-constants';
import {AdminRoutes} from '../utility/constants/admin-route';
import {CommonFunctions} from "../utility/common-functions";
import {ConfirmationDialogComponent} from "../utility/components/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material";
import {AdminUser} from "../utility/shared-model/admin-user.model";
import * as moment from "moment";

declare var $;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  //  Subscribers
  toastSubscriber: any;
  loginRequiredSubscriber: any;
  isLoggedIn = false;
  loading;
  userInfo: AdminUser;
  private checkFood = null;

  constructor(private toastrService: ToastrService, private _sharedService: SharedService, private router: Router, private _commonCrudService: CommonCrudService, public dialog: MatDialog) {
    this.loginRequiredSubscriber = this._sharedService.getLoginRequired().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    //this.subscribeIsLoggedIn();
    this.isLoggedIn = this._sharedService.isLoggedIn();
    this.loading = true;
  }

  ngOnInit() {
    this._sharedService.getCheckFood().subscribe(Res => {
      this.checkFood = Res;
      if (this.checkFood === null) {
        this.checkFood = 0;
        this._sharedService.setCheckFood(0);
      }
    });
    this.userInfo = this._sharedService.getUser();
    this.configureToastManager();
    this.ngLoad();
    setTimeout(() => {
      this.userInfo = this._sharedService.getUser();
      this._sharedService.getCheckFood().subscribe(Res => {
        this.checkFood = Res;
      });
      
    }, 1000);

  }

  ngLoad() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }

  async subscribeIsLoggedIn() {
    const dataString = window.location.href;
    if (!dataString.includes(AdminRoutes.QUOTE_AGREEDISAGREE_ROUTE)) {
      return await this._commonCrudService.getData(AdminAPI.CHECKIP_ADDRESS, 0, {}).subscribe(Response => {
        // console.log(Response);
        const status = Number(Response.payload.success);
        const ipAddress = (Response.payload.data) ? Response.payload.data : 0;
        if (status !== 1) {
          this._sharedService.setClientData(GLOBALDATAKEYS.LOGGEDIN_IP, ipAddress);
          this.router.navigate(['/' + AdminRoutes.UNAUTHORIZED]);
        }
      });
    }
  }

  configureToastManager() {
    this.toastSubscriber = this._sharedService.getToastMessage().subscribe(msgBody => {
      if (msgBody) {
        switch (msgBody.type) {
          case ToastType.SUCCESS:
            this.toastrService.success(msgBody.message);
            break;

          case ToastType.INFO:
            this.toastrService.info(msgBody.message);
            break;

          case ToastType.WARNING:
            this.toastrService.warning(msgBody.message);
            break;

          case ToastType.ERROR:
            this.toastrService.error(msgBody.message);
            break;
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.toastSubscriber) {
      this.toastSubscriber.unsubscribe();
    }
    if (this.loginRequiredSubscriber) {
      this.loginRequiredSubscriber.unsubscribe();
    }
  }

  onActivate() {
    $('html,body').animate({scrollTop: 0});
    return false;
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }


  // onCheckFoodStatus() {
  //   const dateItem = moment(this.userInfo.food_next_date).format("DD-MM-YYYY");
  //   const dateItemDay = moment(this.userInfo.food_next_date).format("dddd");

  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     data: {
  //       content: 'Do you want to book your lunch for ' + dateItem + '(' + dateItemDay + ')? Kindly select the appropriate option and proceed.',
  //     },
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log(1);
  //       this.onBookYourLunch();
  //     } else {
  //       this.onNoOpenOtherConfirm();
  //     }
  //   });
  // }

  onNoOpenOtherConfirm() {
    const dateItem = moment(this.userInfo.food_next_date).format("DD-MM-YYYY");
    const dateItemDay = moment(this.userInfo.food_next_date).format("dddd");

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you do not want to book the food for ' + dateItem + '(' + dateItemDay + ')?'
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
     
        const param = {};
        param['method'] = '_put';
        this._commonCrudService.updateData(AdminAPI.BOOK_FOOD_USER_INFO, this.userInfo.id, param).subscribe(Response => {
          this.userInfo.food_next_date = "";
          this._sharedService.setUser(this.userInfo);
          this.router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
        });      
    });
  }
}

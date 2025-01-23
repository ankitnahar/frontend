import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {SharedService} from '../utility/shared-service/shared.service';
import {ToastType} from '../utility/constants/base-constants';
declare var $;

@Component({
  selector: 'app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.scss']
})

export class AppAdminComponent implements OnInit, OnDestroy {

  //  Subscribers
  toastSubscriber: any;

  constructor(private toastrService: ToastrService, private _sharedService: SharedService) {}

  ngOnInit() {
    this.configureToastManager();
  }

  configureToastManager() {
    this.toastSubscriber = this._sharedService.getToastMessage()
      .subscribe(msgBody => {
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
  }

  onActivate() {
    $('html,body').animate({scrollTop: 0});
    return false;
  }
}

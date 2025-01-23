import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {HttpStatus, ToastType} from '../constants/base-constants';
import {Observable} from 'rxjs/Observable';
import {SharedService} from '../shared-service/shared.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtReq = request.clone();
    return next.handle(jwtReq).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const accessToken = event.headers.get('Authorization');
          if (accessToken) {
            this.sharedService.setToken(accessToken);
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          let message = 'Could not process the request. Please try again.';
          if (err.error && err.error['message']) {
            message = err.error['message'];
          }
          this.sharedService.setToastMessage(message, ToastType.ERROR);
        }
        if (err.status === HttpStatus.UNAUTHORIZED) {
          this.sharedService.logout();
        }
      }
    );
  }
}

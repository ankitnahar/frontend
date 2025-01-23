import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

import {HttpStatus} from '../constants/base-constants';
import {Observable} from 'rxjs';
import {SharedService} from '../shared-service/shared.service';
import {Router} from '@angular/router';
import {AdminRoutes} from '../constants/admin-route';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtReq = request.clone();
    return next.handle(jwtReq).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const accessToken = event.headers.get('Authorization');
          if (accessToken) {
            this.sharedService.setToken(accessToken);
          }
        }
      }, (err: any) => {
        // We have taken error handle at API Manager level so remove code from here
        /*if (err instanceof HttpErrorResponse) {
          let message = 'Could not process the request. Please try again.';
          if (err.error && err.error['message']) {
            message = err.error.payload['error'];
          }
          this.sharedService.setToastMessage(message, ToastType.ERROR);
        }*/
        if (err.status === HttpStatus.UNAUTHORIZED) {
          this.sharedService.logout();
          // this.router.navigate([AdminRoutes.UNAUTHORIZED])
        }
      }
    ));
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SharedService} from '../../utility/shared-service/shared.service';
import {AdminRoutes} from '../../utility/constants/admin-route';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private _sharedService: SharedService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let activateRoute = true;
    const readURL = state.url.split('?')[0];
    const readLogoutURL = state.url.split('?');
    // console.log(readLogoutURL);
    if (readLogoutURL && readLogoutURL[0] === "/" + AdminRoutes.LOGOUT) {
      const queryParamsURL = readLogoutURL[1].split('redirect_uri=');
      if (queryParamsURL && queryParamsURL.length && queryParamsURL[1]) {
        const url = queryParamsURL[1].replace(new RegExp("%2F", "g"), "/");
        this._sharedService.logout();
        window.location.href = url;
      }
    }
    if (this._sharedService.isLoggedIn()) {
      // || state.url !== '/' + AdminRoutes.QUOTE_AGREEDISAGREE_ROUTE
      // By Alok Shukla on 16/04/2020
      if (readURL !== '/' + AdminRoutes.LOGIN) {
        activateRoute = true;
      } else {
        activateRoute = false;
        this.router.navigate(['/' + AdminRoutes.DASHBOARD]);
      }
    } else if (state.url !== '/' + AdminRoutes.LOGIN) {
      // console.log(state.url);
      // Code By : Atri Acharya For Single Sing On From Mini Orange
      // Date : 09/06/2021
      const readURLSSO = state.url;
      const queryParams = readURLSSO.split('?');
      if (queryParams && queryParams.length && queryParams[1]) {
        const queryParamsToken = queryParams[1].split('id_token=');
        if (queryParamsToken && queryParamsToken.length && queryParamsToken[1]) {
          this._sharedService.setToken(null);
          this._sharedService.setToken(queryParamsToken[1]);
        }
      }
      // Code End
      this.router.navigate(['/' + AdminRoutes.LOGIN]);
      this._sharedService.setLoginRequired(false);
      activateRoute = false;
    }
    return activateRoute;
  }
}

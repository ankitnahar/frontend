import {Injectable} from '@angular/core';
import {GoogleDriveSettings} from "../../../../utility/constants/base-constants";

declare const gapi: any;
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {

  constructor() {
  }

  private developerKey = GoogleDriveSettings.API_KEY;
  private clientId = GoogleDriveSettings.CLIENT_SECRET;
  private scope = [
    GoogleDriveSettings.SCOPE_PROFILE,
    GoogleDriveSettings.SCOPE_EMAIL,
    GoogleDriveSettings.SCOPE_URL
  ].join(' ');

  private oauthAccessToken = null;
  private pickerApiLoaded = false;
  private pickerCallback = null;

  public open(callback): void {
    this.pickerCallback = null;
    this.pickerCallback = callback;
    gapi.load('auth', {'callback': this.onAuthApiLoad.bind(this)});
    gapi.load('picker', {'callback': this.onPickerApiLoad.bind(this)});
  }

  public getAuthToken(): void {
    return this.oauthAccessToken;
  }

  private onAuthApiLoad(): void {
    gapi.auth.authorize({
      'client_id': this.clientId,
      'scope': this.scope,
      'immediate': false,
    }, this.handleAuthResult.bind(this));
  }

  private onPickerApiLoad(): void {
    this.pickerApiLoaded = true;
  }

  private handleAuthResult(authResult): void {
    if (authResult && !authResult.error) {
      this.oauthAccessToken = authResult.access_token;
      this.createPicker();
    }
  }

  private createPicker(): void {
    if (this.pickerApiLoaded && this.oauthAccessToken) {
      const view = new google.picker.View(google.picker.ViewId.DOCS);
      const picker = new google.picker.PickerBuilder()
        .enableFeature(google.picker.Feature.NAV_HIDDEN)
        .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        .setOAuthToken(this.oauthAccessToken)
        .addView(view)
        .addView(new google.picker.DocsUploadView())
        .setCallback(this.pickerCallback)
        .build();
      picker.setVisible(true);
    }
  }
}

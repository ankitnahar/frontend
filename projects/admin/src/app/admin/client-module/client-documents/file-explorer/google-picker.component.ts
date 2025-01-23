import {Component, NgZone, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {GoogleDriveSettings} from "../../../../../utility/constants/base-constants";

declare var gapi: any;
declare var google: any;

@Component({
  selector: 'app-google-picker',
  templateUrl: './google-picker.component.html',
  styleUrls: ['./google-picker.component.scss']
})
export class GooglePickerComponent implements OnInit {

  constructor(private _ngZone: NgZone) {
  }

  dialogRef: MatDialogRef<GooglePickerComponent>;
  private developerKey = GoogleDriveSettings.API_KEY;
  private clientId = GoogleDriveSettings.CLIENT_SECRET;
  private scope = [
    GoogleDriveSettings.SCOPE_PROFILE,
    GoogleDriveSettings.SCOPE_EMAIL,
    GoogleDriveSettings.SCOPE_URL
  ].join(' ');
  pickerApiLoaded = false;
  oauthToken?: any;

  ngOnInit() {
    this.loadGoogleDrive();
  }

  loadGoogleDrive() {
    gapi.load('auth', {'callback': this.onAuthApiLoad.bind(this)});
    gapi.load('picker', {'callback': this.onPickerApiLoad.bind(this)});
  }

  onAuthApiLoad() {
    gapi.auth.authorize(
      {
        'client_id': this.clientId,
        'scope': this.scope,
        'immediate': false
      },
      this.handleAuthResult);
  }

  onPickerApiLoad() {
    // console.log(1);
    this.pickerApiLoaded = true;
  }

  handleAuthResult(authResult) {
    let src;
    if (authResult && !authResult.error) {
      if (authResult.access_token) {
        const view = new google.picker.View(google.picker.ViewId.DOCS);
        // view.setMimeTypes("image/png,image/jpeg,image/jpg,video/mp4");
        const pickerBuilder = new google.picker.PickerBuilder();
        const picker = pickerBuilder.enableFeature(google.picker.Feature.NAV_HIDDEN)
          .setOAuthToken(authResult.access_token)
          .addView(view)
          .addView(new google.picker.DocsUploadView())
          .build();
        picker.setVisible(true);
        picker.setCallback(function (e) {
          if (e[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
            const doc = e[google.picker.Response.DOCUMENTS][0];
            src = doc[google.picker.Document.URL];
            // console.log("Document selected is", doc, "and URL is ", src);
            // console.log(this);
          }
        });
      }
    }
  }

  onClose(value) {
    this.dialogRef.close(value);
  }
}

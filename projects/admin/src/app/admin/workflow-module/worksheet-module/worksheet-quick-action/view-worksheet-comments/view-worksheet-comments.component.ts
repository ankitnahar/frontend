import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";

@Component({
  selector: 'app-view-worksheet-comments',
  templateUrl: './view-worksheet-comments.component.html',
  styleUrls: ['./view-worksheet-comments.component.scss']
})
export class ViewWorksheetCommentsComponent implements OnInit {
  user: any;
  replyInput: any;
  @ViewChildren('replyInput')
  replyInputField;

  @ViewChild('replyForm')
  replyForm: NgForm;

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  /**
   * After view init
   */
  // ngAfterViewInit(): void {
  //   this.replyInput = this.replyInputField.first.nativeElement;
  //   this.readyToReply();
  // }

  /**
   * Ready to reply
   */
  readyToReply(): void {
    setTimeout(() => {
      this.focusReplyInput();
    });
  }

  /**
   * Focus to the reply input
   */
  focusReplyInput(): void {
    setTimeout(() => {
      this.replyInput.focus();
    });
  }


  /**
   * Reply
   */
  reply(event): void {
    event.preventDefault();

    if (!this.replyForm.form.value.message) {
      return;
    }

    // Message
    const message = {
      who: this.user.id,
      message: this.replyForm.form.value.message,
      time: new Date().toISOString()
    };

    // Add the message to the chat
    // this.dialog.push(message);

    // Reset the reply form
    this.replyForm.reset();

    // Update the server
    /* this._chatService.updateDialog(this.selectedChat.chatId, this.dialog).then(response => {
       this.readyToReply();
     });*/
  }

  onDownload() {

  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * redirection worksheet dashboard
   */
  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }
}

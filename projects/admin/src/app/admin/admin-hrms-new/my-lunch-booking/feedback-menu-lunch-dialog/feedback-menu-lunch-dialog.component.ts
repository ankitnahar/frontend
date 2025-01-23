import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FoodBookingList} from "../../../../../utility/shared-model/food.model";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import * as moment from "moment";
import {FormControl, Validators} from "@angular/forms";
import {DecimalPipe} from "@angular/common";
import {NoCommaPipe} from "../../../../../utility/pipe/noComma.pipe";

@Component({
  selector: 'app-feedback-menu-lunch-dialog',
  templateUrl: './feedback-menu-lunch-dialog.component.html',
  providers: [DecimalPipe, NoCommaPipe]
})
export class FeedbackMenuLunchDialogComponent implements OnInit {

  foodMaster: FoodBookingList;
  typeOfView: any = 0;
  rating = 0;
  starCount = 5;
  color = 'accent';
  ratingUpdated = new EventEmitter();

  snackBarDuration = 2000;
  ratingArr = [];
  itemArray = [];
  comment = new FormControl(null, Validators.required);
  totalRating = 0;

  constructor(public dialogRef: MatDialogRef<FeedbackMenuLunchDialogComponent>, private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe,
              @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.foodMaster = (this.data.foodMaster) ? this.data.foodMaster : [];
    this.typeOfView = (this.data.typeOfView) ? this.data.typeOfView : 0;
    this.getFoodInfo();
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  /**
   * Get Food Info
   */
  getFoodInfo() {
    if (this.foodMaster.is_feedback !== 1) {
      this._commonCrudService.getData(AdminAPI.BOOK_FOOD_USER_SHOW, this.foodMaster.id, {}).subscribe(Response => {
        this.itemArray = Response.payload['mainDish'];
        this.itemArray.map(item => {
          item['rating'] = 0;
        });
      });
    } else {
      this._commonCrudService.getData(AdminAPI.BOOK_FOOD_USER_FEEDBACK, this.foodMaster.id, {}).subscribe(Response => {
        if (Response.payload.data && Response.payload.data.food_rating) {
          this.itemArray = JSON.parse(Response.payload.data.food_rating);
        }
        if (Response.payload.data.feedback) {
          this.foodMaster.feedback = Response.payload.data.feedback;
        }
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }


  onClick(rating: number, index: number) {
    this.itemArray[index]['rating'] = rating;
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    this.totalRating = this.itemArray.reduce(function (pv, cv) {
      return pv + Number(cv.rating);
    }, 0);
    return false;
  }

  showIcon(star: number, index: number) {
    if (this.itemArray && this.itemArray[index]['rating'] >= star + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onSubmit() {
    // this.itemArray.reduce(i => i)
    const value = {};
    value['date'] = moment(this.foodMaster.date).format("YYYY-MM-DD");
    value['user_id'] = this.foodMaster.user_id;
    value['food_menu_id'] = this.foodMaster.food_menu_id;
    value['food_rating'] = JSON.stringify(this.itemArray);
    value['feedback'] = this.comment.value;
    value['total_feedback'] = this._noCommaPipe.transform(this._decimalPipe.transform((this.totalRating / this.itemArray.length), '1.2-2'));
    this._commonCrudService.addData(AdminAPI.BOOK_FOOD_USER_FEEDBACK, value).subscribe((response) => {
      this.onClose();
    });
  }
}

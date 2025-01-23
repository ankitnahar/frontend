import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BASE} from '../../constants/base-constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})

export class PaginationComponent {

  @Input() page: number;
  @Input() totalRecords: number;
  @Input() paginateItem: number;
  @Input() paginatorId = 'paginatorId';

  paginationArray: number[] = BASE.PAGINATION_ARRAY;
  minRecords = this.paginationArray[0];

  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();

  onPageSizeChange(value) {
    this.paginateItem = +value;
    this.pageSizeChange.emit(+value);
    this.onPageChange(1);
  }

  onPageChange(value) {
    this.page = +value;
    this.pageChange.emit(+value);
  }
}

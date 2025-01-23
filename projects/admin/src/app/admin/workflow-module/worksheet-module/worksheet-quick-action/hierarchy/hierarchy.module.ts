import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {HierarchyComponent} from './hierarchy.component';
import {TaskListComponent} from './task-list/task-list.component';
import {AddTaskListDialog} from './task-list/add-task-list/add-task-list-dialog';
import {SubActivityComponent} from './sub-activity/sub-activity.component';
import {AddSubActivityDialog} from './sub-activity/add-sub-activity/add-sub-activity-dialog';
import {MasterActivityComponent} from './master-activity/master-activity.component';
import {AddMasterActivityDialog} from './master-activity/add-master-activity/add-master-activity-dialog';

const routes = [
  {
    path: '',
    component: HierarchyComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AddMasterActivityDialog, HierarchyComponent, TaskListComponent, AddTaskListDialog, SubActivityComponent, AddSubActivityDialog, MasterActivityComponent],
  entryComponents: [AddTaskListDialog, AddSubActivityDialog, AddMasterActivityDialog]

})
export class HierarchyModule {
}

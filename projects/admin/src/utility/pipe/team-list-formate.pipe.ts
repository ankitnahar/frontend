import {Pipe, PipeTransform} from '@angular/core';
import {BASE} from '../constants/base-constants';


@Pipe({
  name: 'teamListFormate'
})
export class TeamListFormate implements PipeTransform {

  transform(value: any, args?: any): any {
    let data = value.split(',');
    let finalArray = [];

    data.map(res => {
      let subData = res.split('-');

      for (let i = 0; i < BASE.DesignationShortName.length; i++) {
        if (BASE.DesignationShortName[i].key === subData[0]) {
          return finalArray.push({key: BASE.DesignationShortName[i].value, value: subData[1]});
        }
      }
    });

    return finalArray;
  }
}

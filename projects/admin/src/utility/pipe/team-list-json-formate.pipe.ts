import {Pipe, PipeTransform} from '@angular/core';
import {BASE} from '../constants/base-constants';


@Pipe({
  name: 'teamListJsonFormate'
})
export class TeamListJsonFormate implements PipeTransform {

  designationList = BASE.DesignationShortName;

  transform(value: any, args?: any): any {

    const finalArray = [];

    if (value) {
      const dataItemValue = Object.values(JSON.parse(value));
      const dataItemKeys = Object.keys(JSON.parse(value));

      if (dataItemValue.length) {
        let k = 0;
        dataItemValue.forEach(item => {
          finalArray.push({key: this.getDesignationShorterName(dataItemKeys[k]), value: dataItemValue[k]});
          k++;
        });
      }
    }
    return finalArray;
  }

  /**
   * Get Designation Shorter Name
   * @param key
   */
  getDesignationShorterName(key: string): string {
    const val = this.designationList.filter(elem => elem.key === key);
    return (val.length) ? val[0].value : '';
  }
}

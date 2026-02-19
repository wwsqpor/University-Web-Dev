import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
})
export class SortDataPipe implements PipeTransform {

  transform(arr: number[]): number {
    let largestNum = -1;
    arr.forEach(item => {
      if (item > largestNum)
        largestNum = item;
    });
    return largestNum;
  }

}

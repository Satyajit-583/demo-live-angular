import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase()=="male")
    return "mr."+value;
    else
    return "Miss."+value;
  }

}

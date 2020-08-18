import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integerDefault',
})
export class IntegerDefaultPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value) return '0.0';

    return value.toFixed(2);
  }
}

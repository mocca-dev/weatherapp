import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private show: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  public getShow(): Subject<boolean> {
    return this.show;
  }

  public setShow(value: boolean): void {
    this.show.next(value);
  }
}

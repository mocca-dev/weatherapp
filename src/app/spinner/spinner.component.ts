import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  public showSpinner = false;
  private sub: Subscription;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.sub = this.spinnerService
      .getShow()
      .subscribe((show) => (this.showSpinner = show));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

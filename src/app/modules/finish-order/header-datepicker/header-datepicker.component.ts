import { ChangeDetectorRef, Component, OnInit, Inject } from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';

@Component({
  selector: 'app-header-calender',
  templateUrl: './header-datepicker.component.html',
  styleUrls: ['./header-datepicker.component.scss']
})
export class HeaderDatepickerComponent<D> implements OnInit {

 monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  constructor(
    private _calendar: MatCalendar<D>,private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats, cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  get YearTop() {
    return this._dateAdapter
        .getYear(this._calendar.activeDate)
  }

  get Month() {
    return `${this._dateAdapter.getDate(this._calendar.activeDate)} de ${this.monthNames[this._dateAdapter.getMonth(this._calendar.activeDate)]}`

  }

  get periodLabel() {
    return this._dateAdapter
        .format(this._calendar.activeDate, this._dateFormats.display.monthYearA11yLabel)
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate = mode === 'month' ?
        this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
        this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate = mode === 'month' ?
        this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
        this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }

}

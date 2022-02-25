import { Component, OnInit, SimpleChanges, EventEmitter, Output, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() data: any; 

  @Output() newPageSelectedEvent = new EventEmitter<number>();

  numberOfPages!: number;

  currentPage!: number;

  pageList!: number[];

  TRES_PONTOS = 0;

  constructor() { }

  ngOnInit(): void {}

  selectNewPage(page: number) {

    this.currentPage = page;
    this.updateViewPageSelection(this.numberOfPages);
    this.newPageSelectedEvent.emit(page);
  }

  updateNumberPages(numberPages: number) {
    this.updateViewPageSelection(numberPages);

  }

  updateViewPageSelection(numberPages: number) {

      let l = Array.from(Array(numberPages+1).keys());
      this.pageList =  l.slice(1, l.length);

  }

  ngOnChanges(changes: SimpleChanges) {

    let data: SimpleChange = changes['data'];

    let currentPage = data.currentValue.currentPage;
    let numberOfPages = data.currentValue.numberOfPages;

    this.currentPage = currentPage;
    this.numberOfPages = numberOfPages;

    this.updateNumberPages(numberOfPages);
  }

}

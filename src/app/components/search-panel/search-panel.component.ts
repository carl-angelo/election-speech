import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  searchInput: string;
  @Output() searchSpeech: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(): void {
    this.searchSpeech.emit(this.searchInput);
  }

}

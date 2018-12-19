import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  @Output() viewSpeechButton: EventEmitter<void> = new EventEmitter();
  @Output() submitNewSpeechButton: EventEmitter<void> = new EventEmitter();
  @Output() searchAllSpeechButton: EventEmitter<void> = new EventEmitter();

  constructor() { }

  handleViewSpeechButton(): void {
    this.viewSpeechButton.emit();
  }

  handleSubmitNewSpeechButton(): void {
    this.submitNewSpeechButton.emit();
  }

  handleSearchAllSpeechButton(): void {
    this.searchAllSpeechButton.emit();
  }

}

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SpeechForm } from '../../model/speech.interface';
import { FormState } from '../../enums/form-state.enum';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnChanges {

  @Input() speechList: SpeechForm[];
  @Input() formState: FormState;
  @Input() searchKeyword: string;
  @Output() selectedSpeechId: EventEmitter<number> = new EventEmitter();

  activeSpeechId: number;
  speechContainer: SpeechForm[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.speechList && this.speechList) {
      this.speechContainer = Object.assign([], this.speechList);
    }

    if (changes.searchKeyword) {
      if (this.searchKeyword !== '' && this.searchKeyword !== undefined) {
        this.speechContainer = this.speechList.filter(item =>
          Object.keys(item).some(k => item[k].toString().includes(this.searchKeyword.toLowerCase()))
        );
      } else {
         this.speechContainer = this.speechList;
      }
    }
  }

  selectedSpeech(id: number): void {
    this.activeSpeechId = id;
    this.selectedSpeechId.emit(id);
  }

}

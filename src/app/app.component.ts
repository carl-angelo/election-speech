import { Component, OnInit } from '@angular/core';
import { SpeechForm } from './model/speech.interface';
import { FormState } from './enums/form-state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  speechList: SpeechForm[] = [
    {
      id: 1,
      speech: 'This is a Sample Speech 1',
      subject: 'Speech Subject 1',
      author: 'Javale McGee',
      date: {
        day: 10,
        month: 12,
        year: 2018
      }
    },
    {
      id: 2,
      speech: 'This is a Sample Speech 2',
      subject: 'Speech Subject 2',
      author: 'Dr. Marcus Lawson',
      date: {
        day: 12,
        month: 12,
        year: 2018
      }
    }
  ];
  selectedSpeechId: number;
  formState: FormState;
  showSearchPanel = false;
  searchKeyword: string;

  constructor() {}

  ngOnInit() {
    this.handleSpeechButton();
  }

  /*******************
   * Output Handlers *
  ********************/
  handleSpeechButton(): void {
    this.handleSelectedSpeechId(1);
    this.formState = FormState.View;
  }

  handleSubmitButton(): void {
    this.formState = FormState.New;
    this.selectedSpeechId = null;
  }

  toggleSearchButton(): void {
    this.formState = FormState.Search;
    this.showSearchPanel = !this.showSearchPanel;
  }

  handleSelectedSpeechId(event: number): void {
    this.selectedSpeechId = event;
  }

  handleSavedForm(event: SpeechForm): void {
    if (this.selectedSpeechId !== null) {
      this.speechList.filter(f => f.id === this.selectedSpeechId)
        .map(data => {
          data.speech = event.speech;
          data.author = event.author;
          data.date = event.date;
          data.subject = event.subject;
        });
    } else {
      event.id = this.speechList.length + 1;
      const speech = Object.assign([], this.speechList);
      speech.push(event);
      this.speechList = Object.assign([], speech);
    }
  }

  handleDeleteRecord(): void {
    if (this.selectedSpeechId) {
      this.speechList.map((d, i) => {
        if (d.id === this.selectedSpeechId) {
          this.speechList.splice(i, 1);
        }
      });
      this.selectedSpeechId = null;
      const speech = Object.assign([], this.speechList);
      this.speechList = Object.assign([], speech);
    }
  }

  handleSearchSpeech(event: string): void {
    this.searchKeyword = event;
  }
}

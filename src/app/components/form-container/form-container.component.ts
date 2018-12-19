import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpeechForm } from 'src/app/model/speech.interface';
import { FormState } from '../../enums/form-state.enum';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnChanges {

  @Input() selectedSpeechId: number;
  @Input() speechList: SpeechForm[];
  @Input() formState: FormState;
  @Output() savedRecord: EventEmitter<SpeechForm> = new EventEmitter();
  @Output() deleteRecord: EventEmitter<void> = new EventEmitter();
  speechForm: SpeechForm;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.speechForm && this.selectedSpeechId !== null) {
      const selected = Object(this.speechList).filter((f, i) => f.id === this.selectedSpeechId)[0] as SpeechForm;
      this.speechForm.speech = selected.speech;
      this.speechForm.author = selected.author;
      this.speechForm.subject = selected.subject;
      this.speechForm.date = selected.date;
    } else if (this.selectedSpeechId === null) {
      this.initializeForm();
    }
  }

  saveRecord(): void {
    this.savedRecord.emit(this.speechForm);
  }

  deleteButton(): void {
    this.deleteRecord.emit();
  }

  private initializeForm(): void {
    this.speechForm = {
      speech: '',
      author: '',
      subject: '',
      date: '',
      id: null
    };
  }

}

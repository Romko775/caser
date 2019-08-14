import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CaseService} from './case.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  componentForm: FormGroup;
  transliteratedText: string;
  originSub: Subscription;

  constructor(private fb: FormBuilder, private service: CaseService) {
  }

  ngOnInit(): void {
    this.componentForm = this.fb.group({
      originalText: []
    });

    this.originSub = this.componentForm.get('originalText').valueChanges
      .subscribe((value: string) => {
        this.transliteratedText = this.service.getTransliteration(value);
      });

  }

  ngOnDestroy(): void {
    if (this.originSub) {
      this.originSub.unsubscribe();
    }
  }

}

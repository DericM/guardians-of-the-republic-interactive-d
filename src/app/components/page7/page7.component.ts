import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss']
})
export class Page7Component implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      rank: '',
      species: '',
      gender: '',
    });
    this.form.valueChanges.subscribe(val => {
      console.table(val);
      // rankService.set(val.rank);
      // speciesService.set(val.species);
      // genderService.set(val.gender);
    });
  }

  ngOnInit(): void {
  }

}

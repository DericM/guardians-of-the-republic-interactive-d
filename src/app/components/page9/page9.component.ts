import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.scss']
})
export class Page9Component implements OnInit {

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

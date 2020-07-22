import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  receiptNumber: string;
  password: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  schedule() {
    console.log(this.receiptNumber);
    console.log(this.password);
  }



}

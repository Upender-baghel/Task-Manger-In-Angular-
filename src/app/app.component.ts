import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule ,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'manger-task';
  index: number | null = null;
  upd:boolean = false 
  table:boolean =false
  sub:boolean = true
  taskmanager: FormGroup
  // checkboxValues: boolean[] = [];
  checkedItems: any[] = [];





  ngOnInit(): void {

  }

  data:any[]=[];
  constructor(private fb: FormBuilder) {
    this.taskmanager = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.taskmanager.value);

    if (this.taskmanager.valid) {
      this.data.push(this.taskmanager.value);
      this.taskmanager.reset();
      this.table =true ;

    }
  }

  delete(index: any) {
    this.data.splice(index, 1)

  }

  Edit(index: any) {
    this.taskmanager.patchValue({ title: this.data[index].title,
       description: this.data[index].description});
        this.index =index 
        this.upd = true
        this.sub = false

  }
  update() {
    if (this.index !== null && this.index !== undefined) {
    this.data[this.index] = this.taskmanager.value;
        this.taskmanager.reset();
    this.upd =false
    this.sub = true
    }
  }

 
  check(index: any) {
    var isChecked = [this.data[index]];

    console.log(isChecked);
  }
  complete(){
    this.data = this.taskmanager.value 

  }

  


}

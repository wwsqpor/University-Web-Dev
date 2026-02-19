import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LowerCasePipe, UpperCasePipe, TitleCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { CutTextPipe } from './pipes/cut-text-pipe';
import { SortDataPipe } from './pipes/sort-data-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LowerCasePipe, UpperCasePipe, TitleCasePipe, 
            JsonPipe, DatePipe, CutTextPipe, SortDataPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularApp');

  color = "green";

  changeColor(color : string) {
    this.color = color;
  }

  user = {
    name: "Dima",
    age: 10
  }

  usersAge : number[] = [20, 30, 40];

  date = new Date();
}

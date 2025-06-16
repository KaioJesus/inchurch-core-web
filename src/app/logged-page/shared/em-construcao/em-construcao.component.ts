import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-em-construcao',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './em-construcao.component.html',
})
export class EmConstrucaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';


export interface PlanList {
  title: string;
  readings: number;
  publishedTo: string;
  totalReaders: number | null;
  icon: string;
  iconColor: string;
}

@Component({
  selector: 'app-events',
  imports:[FooterComponent],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // handleSearch(searchTerm: string) {
  //   if (!searchTerm) {
  //     this.filteredPlans = [...this.allPlans];
  //     return;
  //   }
    
  //   this.filteredPlans = this.allPlans.filter(plan => 
  //     plan.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }

}

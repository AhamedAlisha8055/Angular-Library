import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core-lib',
  template: `
    <p class= "bg-red">
      core-lib works!
    </p>
  `,
  styles: [
  ]
})
export class CoreLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

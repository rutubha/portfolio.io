import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
}

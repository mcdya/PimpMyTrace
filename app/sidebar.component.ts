import { Component } from '@angular/core';
import {SidebarService} from 'sidebar.service';

@Component({
  selector: 'sidebar',
  template: `<div id="sidebar-wrapper">
              <ul class="sidebar-nav">
                  <li class="sidebar-brand">
                      <a href="#">
                          PimpMyTrace
                      </a>
                  </li>
                  <li *ngFor="#shortcut of shortcuts">
                      <a href="#">{{Dashboard}}</a>
                  </li>
              </ul>
          </div>`,
  providers: [SidebarService]
})

export class SidebarComponent {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    shortcuts=this.sidebarService.GetMenuTitles();
  }
}

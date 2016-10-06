import { Component } from '@angular/core';

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
          </div>`
})
export class SidebarComponent {
  shortcuts=[Dashboard,Shortcuts,Services]
}

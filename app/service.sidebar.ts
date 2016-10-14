import {Services} from '@angular/core';

@Injectable()
export class SidebarService {

  constructor() {}
  string GetMenuTitles(){
      return [Dashboard,Shortcuts,Services];
  }

}
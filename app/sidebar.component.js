"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sidebar_service_1 = require('sidebar.service');
var SidebarComponent = (function () {
    function SidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        shortcuts = this.sidebarService.GetMenuTitles();
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "<div id=\"sidebar-wrapper\">\n              <ul class=\"sidebar-nav\">\n                  <li class=\"sidebar-brand\">\n                      <a href=\"#\">\n                          PimpMyTrace\n                      </a>\n                  </li>\n                  <li *ngFor=\"#shortcut of shortcuts\">\n                      <a href=\"#\">{{Dashboard}}</a>\n                  </li>\n              </ul>\n          </div>",
            providers: [sidebar_service_1.SidebarService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof sidebar_service_1.SidebarService !== 'undefined' && sidebar_service_1.SidebarService) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map
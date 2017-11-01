"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
exports.routes = [
    {
        path: "",
        component: login_component_1.LoginComponent
    },
    {
        path: "list",
        component: list_component_1.ListComponent
    }
];
exports.navigatableComponent = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCw4REFBNEQ7QUFFL0MsUUFBQSxNQUFNLEdBQUc7SUFDbEI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxnQ0FBYztLQUM1QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7S0FDM0I7Q0FDSixDQUFDO0FBRVcsUUFBQSxvQkFBb0IsR0FBRztJQUNoQyxnQ0FBYztJQUNkLDhCQUFhO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJsaXN0XCIsXG4gICAgICAgIGNvbXBvbmVudDogTGlzdENvbXBvbmVudFxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudCA9IFtcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50XG5dOyJdfQ==
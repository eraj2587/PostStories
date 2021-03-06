"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var index_5 = require("./story/index");
var index_6 = require("./contact/index");
var index_7 = require("./about/index");
var index_8 = require("./forgotpassword/index");
var index_9 = require("./resetpassword/index");
var index_10 = require("./confirmemail/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'about', component: index_7.AboutComponent },
    { path: 'contact', component: index_6.ContactComponent },
    { path: 'forgotpassword', component: index_8.ForgotPasswordComponent },
    { path: 'resetpassword', component: index_9.ResetPasswordComponent },
    { path: 'confirmemail', component: index_10.ConfirmEmailComponent },
    { path: 'story', component: index_5.StoryComponent, canActivate: [index_4.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
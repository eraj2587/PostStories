import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ContactUsService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { StoryComponent } from "./story/index";
import { AboutComponent } from "./about/index";
import { ContactUsComponent } from "./contact/index";
import { ForgotPasswordComponent } from "./forgotpassword/index";
import { StoryService } from "./_services/story.service";
import { PagerService } from './_services/pager.service';
import { ResetPasswordComponent } from './resetpassword/index';
import { ConfirmEmailComponent } from './confirmemail/index';
import { FlashComponent } from './flash/flash.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        StoryComponent,
        AboutComponent,
        ContactUsComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        ConfirmEmailComponent,
        FlashComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        StoryService,
        PagerService,
        ContactUsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
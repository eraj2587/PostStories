import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { StoryComponent } from "./story/index";
import { ContactUsComponent } from "./contact/index";
import { AboutComponent } from "./about/index";
import { ForgotPasswordComponent } from './forgotpassword/index';
import { ResetPasswordComponent } from './resetpassword/index';
import { ConfirmEmailComponent } from './confirmemail/index';
import { FlashComponent } from './flash/index';

const appRoutes: Routes = [
    { path: 'listing', component: HomeComponent,data: { title: 'Listing' }  },
    { path: 'login', component: LoginComponent,data: { title: 'Login' } },
    { path: 'register', component: RegisterComponent,data: { title: 'Register' } },
    { path: 'about', component: AboutComponent,data: { title: 'About' } },
    { path: 'contact', component: ContactUsComponent,data: { title: 'Contact' } },
    { path: 'forgotpassword', component: ForgotPasswordComponent,data: { title: 'Forgot Password' } },
    { path: 'resetpassword', component: ResetPasswordComponent,data: { title: 'Reset Password' } },
    { path: 'confirmemail', component: ConfirmEmailComponent,data: { title: 'Conform Email' } },
    { path: 'story', component: StoryComponent,canActivate: [AuthGuard],data: { title: 'Story' } },
    { path: 'home', component: FlashComponent,data: { title: 'Home' } },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home',data: { title: 'Home' } }
];

export const routing = RouterModule.forRoot(appRoutes);
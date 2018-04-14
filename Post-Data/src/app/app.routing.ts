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
    { path: 'listing', component: HomeComponent,data: { title: 'listing' }  },
    { path: 'login', component: LoginComponent,data: { title: 'login' } },
    { path: 'register', component: RegisterComponent,data: { title: 'register' } },
    { path: 'about', component: AboutComponent,data: { title: 'about' } },
    { path: 'contact', component: ContactUsComponent,data: { title: 'contact' } },
    { path: 'forgotpassword', component: ForgotPasswordComponent,data: { title: 'forgot password' } },
    { path: 'resetpassword', component: ResetPasswordComponent,data: { title: 'reset password' } },
    { path: 'confirmemail', component: ConfirmEmailComponent,data: { title: 'conform email' } },
    { path: 'story', component: StoryComponent,canActivate: [AuthGuard],data: { title: 'story' } },
    { path: 'home', component: FlashComponent,data: { title: 'home' } },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home',data: { title: 'homr' } }
];

export const routing = RouterModule.forRoot(appRoutes);
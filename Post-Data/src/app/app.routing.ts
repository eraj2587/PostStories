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
    { path: 'listing', component: HomeComponent,  },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'forgotpassword', component: ForgotPasswordComponent },
    { path: 'resetpassword', component: ResetPasswordComponent },
    { path: 'confirmemail', component: ConfirmEmailComponent },
    { path: 'story', component: StoryComponent,canActivate: [AuthGuard] },
    { path: 'home', component: FlashComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
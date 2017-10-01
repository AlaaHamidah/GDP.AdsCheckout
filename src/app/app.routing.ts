import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { AdsListComponent } from './components/adsList.component';
import { AuthGuard } from './services/authGuard';

export const appRoutes: Routes = [
    { path: '', component: AdsListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: 'HOME', redirectTo: '' }
];

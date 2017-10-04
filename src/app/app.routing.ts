import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/shared/login.component';
import { AdsListComponent } from './components/adsList.component';
import { AuthGuard } from './services/authGuard';
import { SuccessComponent } from './components/success.component';

export const appRoutes: Routes = [
    { path: '', component: AdsListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'success', component: SuccessComponent },

    // otherwise redirect to home
    { path: 'HOME', redirectTo: '' }
];

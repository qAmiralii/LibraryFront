import { Routes } from '@angular/router';
import { PublicNavComponent } from './+navigations/public-nav/ui/public-nav.component';
import { PrivateNavComponent } from './+navigations/private-nav/ui/private-nav.component';
import { LoginComponent } from './pages/public/login/ui/login.component';
import { PublicHomeComponent } from './pages/public/public-home/ui/public-home.component';
import { AboutComponent } from './pages/public/about/ui/about.component';
import { BooksComponent } from './pages/public/books/ui/books.component';
// import { DashboardComponent } from './pages/private/dashboard/ui/dashboard.component';
import { MembersComponent } from './pages/private/members/ui/members.component';
import { CartComponent } from './pages/public/cart/cart.component';
import { BookManagementComponent } from './pages/private/book-management/ui/book-management.component';

export const routes: Routes = [
    {
        path: 'public', component: PublicNavComponent, children: [
            { path: 'home', component: PublicHomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'books', component: BooksComponent },
            { path: 'cart', component: CartComponent },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' }
        ]
    },
    {
        path: 'admin', component: PrivateNavComponent, children: [
            { path: 'members', component: MembersComponent, pathMatch: "prefix" },
            { path: 'books', component: BookManagementComponent, pathMatch: "prefix" }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'public', pathMatch: 'full' },

];

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {"path":'home',component:HomeComponent},
    {"path":'header',component:HeaderComponent},
    {"path":'footer',component:FooterComponent},
    {"path":'contact',component:ContactComponent},
    {"path":'service',component:ServiceComponent},
    {"path":'about',component:AboutComponent},
];

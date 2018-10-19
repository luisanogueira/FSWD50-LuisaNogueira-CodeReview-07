import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { ContactsPageComponent} from './contacts-page/contacts-page.component';
import { ImportantContactsComponent } from './important-contacts/important-contacts.component';

const routes: Routes = [
	{
	   path: '', component: HomePageComponent
	},
	{
	   path: 'contacts', component: ContactsPageComponent
	},
	{
	   path: 'important', component: ImportantContactsComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

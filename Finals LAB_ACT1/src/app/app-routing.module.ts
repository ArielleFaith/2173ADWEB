import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ButtonTypesComponent } from './components/button-types/button-types.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { GridTypeComponent } from './components/grid-type/grid-type.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'button-types', component: ButtonTypesComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'card-list', component: CardListComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'grid-type', component: GridTypeComponent },
  
  { path: 'edit-book/:id', component: BookDetailComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
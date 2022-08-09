import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
{path:"",component:AppComponent},

{path:"list",component:ProductListComponent},

{path:"edit",component:ProductEditComponent},

{path:"add",component:ProductAddComponent},

{path:"**",component:NotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

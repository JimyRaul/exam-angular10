import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactPageComponent, ContactContainerComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }

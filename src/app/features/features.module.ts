import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LocalizationComponent } from './localization/localization.component';
import { CofeeMainComponent } from './cofee-main/cofee-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    LocalizationComponent,
    CofeeMainComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, FontAwesomeModule],
  exports: [CofeeMainComponent],
})
export class FeaturesModule {}

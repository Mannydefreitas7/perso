import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ]
})
export class MaterialModule { }

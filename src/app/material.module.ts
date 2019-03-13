import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,    
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ]
})

export class MaterialModule {}
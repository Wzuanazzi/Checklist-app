import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [MatSidenavModule, MatListModule, MatCheckboxModule,
              MatIconModule, MatToolbarModule, MatButtonModule, FormsModule],
    exports: [MatSidenavModule, MatListModule, MatCheckboxModule,
             MatIconModule, MatToolbarModule,  MatButtonModule, FormsModule]
})

export class MaterialModule {
  
 }

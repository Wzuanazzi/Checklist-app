import { Component, NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatListModule, MatIconModule, MatToolbarModule, MatSidenavModule,],
    exports: [MatToolbarModule, MatListModule, MatIconModule, MatSidenavModule,]
})

export class MaterialModule {
  
 }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from "./test/test.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


 @Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, 
      MatIconModule, MatToolbarModule,
      FormsModule, ReactiveFormsModule,
      HeaderComponent,FooterComponent,CommonModule,
      MaterialModule, MatSidenavModule, TestComponent
    ]
})
export class AppComponent {
  title = 'checklist-app';

  public events: string[] = [];
  public opened: boolean = false;

}

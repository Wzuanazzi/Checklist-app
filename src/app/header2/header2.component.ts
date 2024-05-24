import { Component, Input, ChangeDetectorRef} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MaterialModule } from '../material.module';
import { GlobalService } from '../_service/global.service';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})

export class Header2Component {

  @Input() sidenav!: MatSidenav
  public openSideNav() {
    this.sidenav.toggle();    
  } 

  constructor(private globalService: GlobalService,
              private cdr: ChangeDetectorRef
              ) {  }
  
  get loginRead() {
    return this.globalService.getLoginRead();
  }

  checkLoginRead() {
    this.loginRead
  }
  
  ngOnInit() {
      }
    
}

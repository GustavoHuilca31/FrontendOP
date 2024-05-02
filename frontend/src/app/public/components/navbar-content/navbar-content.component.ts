import {ChangeDetectorRef, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MediaMatcher} from "@angular/cdk/layout";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {User} from "../../../shared/model/user.entity";
import {UsersService} from "../../../shared/service/users.service";
import {TheUserLoginEmailComponent} from "../../../user/components/the-user-login-email/the-user-login-email.component";
import {TheUserLoginComponent} from "../../../user/components/the-user-login/the-user-login.component";

@Component({
  selector: 'navbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    RouterLink,
    TheUserLoginEmailComponent,
    NgIf,
    TheUserLoginComponent,
    RouterOutlet
  ],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css'
})
export class NavbarContentComponent {
  mobileQuery: MediaQueryList;

  loggedInUser: User|null = null;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private usersService: UsersService, private router: Router) {
    this.usersService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
    });
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  isLoggedIn() {
    return this.loggedInUser !== null;

  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  showLogin = false;
  showEmailLogin = false;

  openLogin() {
    this.showLogin = true;
  }

  handleCloseLogin() {
    this.showLogin = false;
  }



  handleCloseEmailLogin() {
    this.showEmailLogin = false;
  }

  publish(){
    this.router.navigateByUrl('/my-stories');
  }

}

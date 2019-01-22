import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(readonly afAuth: AngularFireAuth) {
  }

  login() {
    void this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    void this.afAuth.auth.signOut();
  }
}

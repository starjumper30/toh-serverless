import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from "rxjs";

import { HelloWorldService } from "./hello-world.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  greeting: Observable<string>;

  constructor(readonly afAuth: AngularFireAuth, private helloSvc: HelloWorldService) {
    this.greeting = this.helloSvc.callHelloWorldFunction();
  }

  login() {
    void this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    void this.afAuth.auth.signOut();
  }
}

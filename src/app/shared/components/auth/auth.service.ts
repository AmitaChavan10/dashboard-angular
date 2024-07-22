import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth/angular-fire-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   constructor(private afAuth: AngularFireAuth) {}

//   // Sign in with email/password
//   async signIn(email: string, password: string): Promise<void> {
//     await this.afAuth.signInWithEmailAndPassword(email, password);
//   }

//   // Sign out
//   async signOut(): Promise<void> {
//     await this.afAuth.signOut();
//   }

//   // Get the current user
//   getCurrentUser() {
//     return this.afAuth.authState;
//   }

  // Check if user is authenticated
  isAuthenticated() {
    // return this.afAuth.authState !== null;
  }
}

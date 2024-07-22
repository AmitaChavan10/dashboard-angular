// // auth.guard.ts
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthModule } from '@angular/fire/auth';
// import { map, take, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private afAuth: AuthModule, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.afAuth.authState.pipe(
//       take(1),
//       map(user => !!user),
//       tap(authenticated => {
//         if (!authenticated) {
//           this.router.navigate(['/login']);
//         }
//       })
//     );
//   }
// }

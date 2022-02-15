import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../services/localStorage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private localStorage: LocalStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.localStorage.get("token")
        const roles = this.localStorage.get("roles")

        if (roles && token) {
        

            if (route.data["roles"]) {

                let change = true;

                roles.forEach((element: string) => {
                    
                    if (route.data["roles"].indexOf(element) === -1){

                        change = false;

                    } else {
                        
                        change = true;
                        return;
                    }
                 
                });

                return change;
            }

            return true;
        }

        this.router.navigate(['home'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
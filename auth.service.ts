import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


ngInit(){

 
}

  redirectUrl!: string;
  private isAuthenticated = false;
  private token?: string;
  private tokenTimer: any;
  private userId!: string;

  constructor(private http: HttpClient, private router: Router) { }


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: { email: string; password: string; }) {

  
    console.log(user);

    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/authenticate", user).toPromise()
      .then(r => {
        if (r !== null) {
          console.log(r);
          this.loggedIn.next(true);
        
        }
        else
          this.loggedIn.next(false);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  createUser(user: { firstname: string; lastname: string; email: string; password: string; isAuthor: number; }) {
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/register", user).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  logout() {
    this.loggedIn.next(false);
    sessionStorage.clear();
    this.router.navigate(['/userLogin']);
    
  }



  EditProfile(user: { id: number; email: string; password: string; firstname: string; lastname: string; }) {
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/edituser", user).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


}
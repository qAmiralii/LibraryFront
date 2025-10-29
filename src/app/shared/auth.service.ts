import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mockUsers: User[] = [
    { username: 'admin', password: 'admin', fullname: 'مدیر', enaabled: true },
  ];
  check(username: string, password: string) {
    let success=true;
    let res = this.mockUsers.filter(x => x.username == username
      && x.password == password)
    if (res.length==0) {
      success = false;
    }
    return of(success);
  }
}
interface User {
  username: string;
  password: string;
  fullname: string;
  enaabled: boolean;
}
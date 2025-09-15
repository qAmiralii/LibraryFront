import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  http = inject(HttpClient);
  async list() {
    return await this.http.get('http://localhost:5093/v1/members/list').toPromise();
  }
  async add_member(member: Member) {
    return await this.http.post('http://localhost:5093/v1/member/create', member).toPromise()
  }
  async edit(id: string, member: Member) {
    return await this.http.put('http://localhost:5093/v1/member/update' + id, member).toPromise()
  }
  async remove(id: string) {
    return await this.http.delete('http://localhost:5093/v1/member/remove' + id).toPromise()
  }
}

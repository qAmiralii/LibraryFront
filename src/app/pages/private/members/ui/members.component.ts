import { Component, inject, OnInit } from '@angular/core';
import { MemberAddComponent } from './member-add/member-add.component';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-members',
  imports: [MemberAddComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {
  ngOnInit(): void {
    this.refresh();
  }
  action = "home";
  selected: Member | undefined;
  selectedId: string = "";
  memberServic = inject(MemberService);

  dataSource: any;

  async ok_add(member: Member) {

    if (this.action == "add") {
      await this.memberServic.add_member(member);
    }
    else if (this.action == "edit") {
      await this.memberServic.edit(this.selectedId, member);

    }
    else if (this.action == "remove") {
      await this.memberServic.remove(this.selectedId);
    }
    await this.refresh();
    this.action = "home";
  }
  close() {
    this.action = "home";
  }
  adding() {
    this.selected = undefined;
    this.action = "add"
  }
  edit(member: Member) {
    this.selected = { ...member };
    this.selectedId = member.id;
    this.action = "edit"
  }
  async refresh() {
    this.dataSource = await this.memberServic.list();
    console.log('Received data:', this.dataSource); // این خط را اضافه کنید

  }
  test = this.memberServic.list();
  remove(member: Member) {
    this.selected = { ...member };
    this.selectedId = member.id;
    this.action = "remove";
  }
}

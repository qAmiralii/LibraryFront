import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Member } from '../../models/member.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-add',
  imports: [FormsModule],
  templateUrl: './member-add.component.html',
  styleUrl: './member-add.component.scss'
})
export class MemberAddComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.current) {
      this.data = this.current;
    }
  }

  ok() {
    this.onOk.emit(this.data);
  }
  back() {
    this.onCancel.emit();
  }
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter<Member>();
  @Input() current: Member | undefined;
  @Input() actionName = "";
  data: Member = { id: "", FirstName: "", LastName: "", Gender: 1 }

}

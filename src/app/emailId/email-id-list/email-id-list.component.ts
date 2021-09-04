import { Component, OnInit } from '@angular/core';
import { EmailIdService } from '../email-id.service';

@Component({
  selector: 'app-email-id-list',
  templateUrl: './email-id-list.component.html',
  styleUrls: ['./email-id-list.component.css'],
})
export class EmailIdListComponent implements OnInit {
  emailIds: any[] = [];
  constructor(private ES: EmailIdService) {}

  ngOnInit(): void {
    this.getAllEmailids();
  }
  getAllEmailids() {
    this.ES.getAllEmailIds().subscribe((res) => (this.emailIds = res));
  }
}

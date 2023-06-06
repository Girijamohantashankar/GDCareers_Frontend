import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  accountsettings: boolean = false;
  usersetting() {
    this.accountsettings = !this.accountsettings;
  }
  list: any[] = [];
  
  // @ViewChild('task', {static: false}) abc: ElementRef;
  item: string = '';
  addtask(item: string) {
    console.warn(item);
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
    this.item=''
    // this.elementz.nativeElement.value = '';
  }
  removetask(id: number) {
    // console.warn(id);
    this.list = this.list.filter((item) => item.id !== id);
  }
  CompatibilityModal: boolean = false;
  checkCompatibility() {
    this.CompatibilityModal = true;
  }
  modalclose() {
    this.CompatibilityModal = false;
  }
  Congratulations_popup: boolean = false;
  Congratulations() {
    this.Congratulations_popup = true;
    this.CompatibilityModal = false;

  }
  Congratulations_modal() {
    this.Congratulations_popup = false;
  }
}

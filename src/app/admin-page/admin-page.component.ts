import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  accountsettings: boolean = false;
  usersetting() {
    this.accountsettings = !this.accountsettings;
  }
  list: any[] = [];
  item: string = '';
  addtask(item: string) {
    // console.warn(item);
    this.list.push({ id: this.list.length, name: item });
    // console.warn(this.list);
  }
  removetask(id: number) {
    // console.warn(id);
    this.list = this.list.filter((item) => item.id !== id);
  }
  addjobdetails: boolean = false;
  createjob() {
    this.addjobdetails = true;
  }
  canclejob() {
    this.addjobdetails = false;
  }
  Job_added: boolean = false;
  jobAdd() {
    this.Job_added = true;
    this.addjobdetails = false;
  }
  close_Modal() {
    this.Job_added = false;
  }

  addjobForm = new FormGroup({
    JobTitle: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    Experience: new FormControl(''),
    CompanyName: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    CTC: new FormControl(''),
    WorkLocation: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    LastDate: new FormControl(''),
    JobDescription: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    EligibilityCriteria: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    Responsibilities: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    RequiredSkills: new FormControl(''),
    
  });

  onAddjob(data: any) {
    console.log(this.addjobForm.value);
  }




}

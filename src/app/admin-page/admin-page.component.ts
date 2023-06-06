import { Component } from '@angular/core';

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
  item:string=""
  addtask(item: string) {
    // console.warn(item);
    this.list.push({ id: this.list.length,name:item });
    // console.warn(this.list);
  }
  removetask(id:number){
    // console.warn(id);
    this.list=this.list.filter(item=>item.id!==id)
  }
  addjobdetails:boolean=false;
  createjob(){
    this.addjobdetails=true;
  }
  canclejob(){
    this.addjobdetails=false;

  }
}

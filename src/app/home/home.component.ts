import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  select:any=[];
  filterz:any=[
    {
      id:0,
      title:"Information Technology",
      select:true
    },
    {
      id:1,
      title:"Healthcare",
      select:false
    },
    {
      id:2,
      title:"Education & Technology",
      select:false
    },
    {
      id:3,
      title:"Finance",
      select:false
    },
  ];
  accountsettings:boolean=false;
  usersetting(){
   this.accountsettings=!this.accountsettings
  }

  onChange(i:any){
      this.filterz[i].select=!this.filterz[i].select;
      if(this.filterz[i].select==true)
      {
        this.filterz[i].push(i);
      }
      else{
        this.select=this.select.filter((item:any)=>{
            return item.id!=i;
        })
      }
  }



}

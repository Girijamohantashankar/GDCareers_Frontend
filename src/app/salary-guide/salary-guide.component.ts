import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-guide',
  templateUrl: './salary-guide.component.html',
  styleUrls: ['./salary-guide.component.css']
})
export class SalaryGuideComponent {
  array: any = [
    {
      id: 0,
      name: 'Software Developer',
    },
    {
      id: 1,
      name: 'Frontend Developer',
    },
    {
      id: 3,
      name: 'Full Stack Developer',
    },
    {
      id: 4,
      name: 'UI/UX Designer',
    },
  ];
  contentdropdown: boolean = false;
  dropdownOpen() {
  
    this.contentdropdown = !this.contentdropdown;
  }
  Selectvariable: string = 'Industry';
  colorvariable: number =  0;
  Changeselect(arr: any) {
    this.Selectvariable = arr.name;
    this.colorvariable = arr.id;
    this.contentdropdown=false;
    console.log(arr.name);
  }
  designationdropdownOption: boolean = false;

  dropdownOpenOption() {
    this.designationdropdownOption = !this.designationdropdownOption;
  }

// ------------------------------1------------------------------
array1: any = [
  {
    id: 0,
    name: 'Software Developer',
  },
  {
    id: 1,
    name: 'Frontend Developer',
  },
  {
    id: 3,
    name: 'Full Stack Developer',
  },
  {
    id: 4,
    name: 'UI/UX Designer',
  },
];
contentdropdown1: boolean = false;
dropdownOpen1() {

  this.contentdropdown1 = !this.contentdropdown1;
}
Selectvariable1: string = 'Experience';
colorvariable1: number =  0;
Changeselect1(arr1: any) {
  this.Selectvariable1 = arr1.name;
  this.colorvariable1 = arr1.id;
  this.contentdropdown1=false;
  console.log(arr1.name);
}
designationdropdownOption1: boolean = false;

dropdownOpenOption1() {
  this.designationdropdownOption1 = !this.designationdropdownOption1;
}
// ----------------------------------------2-----------------------------
array2: any = [
  {
    id: 0,
    name: 'Software Developer',
  },
  {
    id: 1,
    name: 'Frontend Developer',
  },
  {
    id: 3,
    name: 'Full Stack Developer',
  },
  {
    id: 4,
    name: 'UI/UX Designer',
  },
];
contentdropdown2: boolean = false;
dropdownOpen2() {

  this.contentdropdown2 = !this.contentdropdown2;
}
Selectvariable2: string = 'Skills';
colorvariable2: number =  0;
Changeselect2(arr2: any) {
  this.Selectvariable2 = arr2.name;
  this.colorvariable2 = arr2.id;
  this.contentdropdown2=false;
  console.log(arr2.name);
}
designationdropdownOption2: boolean = false;

dropdownOpenOption2() {
  this.designationdropdownOption2 = !this.designationdropdownOption2;
}



}

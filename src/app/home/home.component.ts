import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  select: any = [];
  filterz: any = [
    {
      id: 0,
      title: 'Information Technology',
      select: true,
    },
    {
      id: 1,
      title: 'Healthcare',
      select: false,
    },
    {
      id: 2,
      title: 'Education & Technology',
      select: false,
    },
    {
      id: 3,
      title: 'Finance',
      select: false,
    },
    {
      id: 4,
      title: "Full Time",
      select: false
    },
    {
      id: 5,
      title: "Part Time",
      select: false
    },
    {
      id: 6,
      title: "Freelancing",
      select: false
    },
    {
      id: 7,
      title: "Remote Work",
      select: false
    },
    {
      id: 8,
      title: "Hybrid",
      select: false
    },
    {
      id: 9,
      title: "Fresher",
      select: false
    },
    {
      id: 10,
      title: "0-1 years",
      select: false
    },
    {
      id: 11,
      title: "1-3 year",
      select: false
    },
    {
      id: 12,
      title: "4-9 year",
      select: false
    },
    {
      id: 13,
      title: '7-9 yrs',
      select: false
    },
    {
      id: 14,
      title: "9 year or more",
      select: false
    },
    {
      id: 15,
      title: "less than 2 lakhs",
      select: false
    },
    {
      id: 16,
      title: "2-4 lakhs",
      select: false
    },
    {
      id: 17,
      title: "4-9 lakh",
      select: false
    },
    {
      id: 18,
      title: '9-12 lakhs'
    },
    {
      id: 19,
      title: "13-16 lakhs",
      select: false
    },
    {
      id: 20,
      title: "17 lakhs or more",
      select: false
    },
    {
      id: 21,
      title: "Full Stack Developer",
      select: false
    },
    {
      id: 22,
      title: "UI/UX Designer",
      select: false
    },
    {
      id: 23,
      title: "Front-end Development",
      select: false
    },
    {
      id: 24,
      title: "Back-end Development",
      select: false
    },
    {
      id: 25,
      title: "Software Develoer",
      select: false
    },
    {
      id: 26,
      title: "Graphic Designing",
      select: false
    },
    {
      id: 27,
      title: "Photographer",
      select: false
    },
    {
      id: 28,
      title: "Marketing manager",
      select: false
    },
    {
      id: 29,
      title: "Graphics Designer",
      select: false
    },
    {
      id: 30,
      title: "Dietitian",
      select: false
    },
    {
      id: 31,
      title: "Project Manager",
      select: false
    },
    {
      id: 32,
      title: "Pharmacist",
      select: false
    },
    {
      id: 33,
      title: "Accounting",
      select: false
    },
    {
      id: 34,
      title: 'Banking',
      select: false
    },
    {
      id: 35,
      title: "IBM",
      select: false
    },
    {
      id: 36,
      title: "Wipro",
      select: false
    },
    {
      id: 37,
      title: "AOL",
      select: false
    },
    {
      id: 38,
      title: "Dell",
      select: false
    },
    {
      id: 39,
      title: "SAP",
      select: false
    },
    {
      id: 40,
      title: "Saga Solutions",
      select: false
    },
    {
      id: 41,
      title: "TCS",
      select: false
    },
    {
      id: 42,
      title: "Infosys",
      select: false
    },
    {
      id: 43,
      title: "Tech Mahindra",
      select: false
    },
    {
      id: 44,
      title: "MindTree",
      select: false
    },
    {
      id: 45,
      title: "HDFC Bank",
      select: false
    },
    {
      id: 46,
      title: "Mphasis Ltd",
      select: false
    },
    {
      id: 47,
      title: "Cognizant",
      select: false
    },
    {
      id: 48,
      title: "Coforge",
      select: false
    },
    {
      id: 49,
      title: "capgemini",
      select: false
    },
    {
      id: 50,
      title: "Flipkart",
      select: false
    },
    {
      id: 51,
      title: "AWS",
      select: false
    },
    {
      id: 52,
      title: "JIO",
      select: false
    },
    {
      id: 53,
      title: "American Express",
      select: false
    },

  ];
  @ViewChildren('exp') radioButtons: QueryList<ElementRef>;

  accountsettings: boolean = false;
  usersetting() {
    this.accountsettings = !this.accountsettings
  }

  onChange(i: any) {
    this.filterz[i].select = !this.filterz[i].select;
    if (this.filterz[i].select == true) {

      this.select.push(i);
    }
    else {
      this.select = this.select.filter((item: any) => {
        return item != i;
      })
      console.log(this.select);
    }
  }

  radio(id: any, type: any) {
    // Accessing the radio buttons
    const radioButtons = this.radioButtons.toArray().map(radioButton => radioButton.nativeElement);
    console.log(radioButtons);
    // Example: Checking the value of each radio button
    if (type== 'exp') {
      this.select = this.select.filter((res: any) => {
        return (res < 9 || res > 14)
      })
    }
    if (type== '') {
      this.select = this.select.filter((res: any) => {
        return (res < 15  || res > 20)
      })
    }
    this.select.push(id);
  }

  remove(id:any){
    this.select = this.select.filter((res: any) =>{
      return res!=id
    })
  }


}

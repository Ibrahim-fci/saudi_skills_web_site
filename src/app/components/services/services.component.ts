import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  activeFlag = true;
  taps = ['HSSI', 'THSI', 'CHI'];

  itemsList = [
    {
      data: {
        title: 'Saudi Skills Institute in Riyadh and Jeddah',
        desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum',
      },
      images: [
        {
          img: '../../../assets/img/destination-5.jpg',
          title: 'Interior Design Diploma',
          desc: `Accreditation Number: 12441912 – 12442525 – 12449170 Program Description: Interior Design course gives you the opportunity to develop your skills of drawing, coloring and assembling…`,
          icon: 'fas fa-paint-roller fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-5.jpg',
          title: 'Marketing Diploma',
          desc: `A Marketing Diploma provides foundational knowledge and practical skills in advertising, market research,
           and strategic planning to prepare individuals for entry-level roles

          `,
          icon: 'fa fa-bullhorn fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-5.jpg',
          title: 'Accounting Diploma',
          desc: `The program is designed to match national job market requirements; expressed by the national professional standards set for assistant accountants. Training for the program involves general…`,
          icon: 'fa-solid fa-calculator fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-5.jpg',
          title: 'Graphic Design Diploma',
          desc: `
          The duration of the diploma is two years and a half. Training in the Graphic Design Diploma includes building a good educational background, creativity, choosing colors and images,...`,
          icon: 'fas fa-paint-brush fa-4x text-primary',
        },
      ],
    },
    {
      data: {
        title: 'The Institute of Tourism  And Hospitality',
        desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum',
      },

      images: [
        {
          img: '../../../assets/img/destination-7.jpg',
          title: 'Travel Guide 2',
          desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          icon: 'fa-solid fa-calculator fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-7.jpg',
          title: 'Travel Guide 2',
          desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          icon: 'fa-solid fa-calculator fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-7.jpg',
          title: 'Travel Guide',
          desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          icon: 'fa-solid fa-calculator fa-4x text-primary',
        },
      ],
    },
    {
      data: {
        title: 'The Institute of Cultural And Heritage Studies',
        desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum',
      },

      images: [
        {
          img: '../../../assets/img/destination-1.jpg',
          title: 'Travel Guide 1',
          desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          icon: 'fa-solid fa-calculator fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-1.jpg',
          title: 'Travel Guide',
          desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
          img: '../../../assets/img/destination-1.jpg',
          title: 'Travel Guide',
          desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
      ],
    },

  ];

  constructor() { }

  ngOnInit(): void { }


  changegeActive(index: any) {

    this.activeFlag = false;


  }
}

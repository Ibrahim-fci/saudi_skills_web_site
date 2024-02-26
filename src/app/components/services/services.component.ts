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
          title: 'Human Resources',
          desc: `Professional Skills for a Human Resources Manager A program that provides a set of basic professional skills, knowledge and concepts in the field of human resources…`,
          icon: 'fa-solid fa-user-tie fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-7.jpg',
          title: 'Financial Reports',
          desc: `The budget is the means used to express the basic needs of resources, such as materials, capital, and people, all of which contribute to achieving a set of goals based on time stages…`,
          icon: 'fa-solid fa-chart-line fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-7.jpg',
          title: 'FIRS',
          desc: `Explaining the work of the International Accounting Standards Board (IASB), and how to approve amendments to standards issued by the Board, Helping to understand how…`,
          icon: 'fa-solid fa-file-invoice-dollar fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-7.jpg',
          title: 'Photoshop Program',
          desc: `Photoshop is a program for designing and editing images of all kinds, through which you can merge images, design posters and advertisements, including advertisements for social networking sites…`,
          icon: 'fa-brands fa-magic fa-4x text-primary',
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
          title: 'English Language Courses',
          desc: `Higher Saudi Skills Institute is pleased to announce its English language courses, consisting of five integrated levels, catering to beginners up to upper intermediate learners…`,
          icon: 'fa-solid fa-language fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-1.jpg',
          title: '3D MAX Program',
          desc: `Accreditation Number: 12443873 – 12446674 Program Description: 3D Max program is one of the most realistic and realistic (three-dimensional) engineering demonstration programs…`,
          icon: 'fa-solid fa-maximize fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-1.jpg',
          title: 'AutoCAD Program',
          desc: `AutoCAD program gives you the opportunity to develop your skills and learn engineering drawings by computer, which allow you to turn a two dimensional drawing into a…`,
          icon: 'fa-solid fa-screwdriver-wrench fa-4x text-primary',
        },
        {
          img: '../../../assets/img/destination-1.jpg',
          title: 'Illustrator Program',
          desc: `Illustrator Program helps the learner to acquire the most important skills required in the labor market, such as designing logos, commercial visual identities…`,
          icon: 'fa-solid fa-pen-to-square fa-4x text-primary',
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

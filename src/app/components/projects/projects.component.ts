import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      cardNo: 'card-1',
      title: 'Modern Restaurant Website',
      desc: 'A Fully Responsive Restaurant Website with Modern UI and UX in ReactJS',
      front: 'ReactJS',
      tech: '',
      href:'https://github.com/shebannavar/modern-restaurant-website',
      demohref: 'https://modern-restaurant-website.vercel.app/'
    },
    {
      cardNo: 'card-2',
      title: 'My Messenger',
      desc: 'A real-time messaging web application using Socket.IO, a JavaScript library that enables real-time bi-directional communication between clients and servers',
      front: 'HTML, CSS',
      back: 'Node.js, Socket.IO',
      tech: '',
      href: 'https://github.com/anubhavc9/my-messenger'
    },
    {
      cardNo: 'card-3',
      title: 'Meetups Manager',
      desc: 'A full-stack Next.js application for managing meetups. Uses File-Based Routing, Server-Side Rendering & Incremental Static Generation for better perfomance & SEO',
      front: '',
      back: '',
      tech: 'Next.js, MongoDB',
      href: 'https://meetups-manager.vercel.app/'
    },
    {
      cardNo: 'card-4',
      title: 'Typing Speed Test App',
      desc: 'A GUI application that displays a sample text & measures the users relevant statistics such as typing speed, accuracy etc.',
      front: '',
      back: '',
      tech: 'Python, Tkinter',
      href: 'https://github.com/anubhavc9/typing-speed-test'
    },
    {
      cardNo: 'card-5',
      title: 'My Todo List App',
      desc: 'A simple todo list Angular app that uses REST APIs to communicate with a Node.js/Express.js backend',
      front: 'AngularJS',
      back: 'Node.js/Express & PostgreSQL',
      tech: '',
      href: 'https://github.com/anubhavc9/my-todo-list'
    },
    {
      cardNo: 'card-1',
      title: 'My Todo List App - Backend',
      desc: 'The Node.js/Express.js & PostgreSQL based backend for the my-todo-list Angular app',
      front: 'AngularJS',
      back: 'Node.js/Express & PostgreSQL',
      tech: '',
      href: 'https://github.com/anubhavc9/my-todo-list-backend'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo = [
    { key: 'Phone', value: '+91 9620123399', link: 'tel:+919620123399' },
    { key: 'WhatsApp', value: '+91 9620123399', link: 'https://wa.me/+919620123399' },
    { key: 'Email', value: 'santosh.shebannavar@gmail.com', link: 'mailto:santosh.shebannavar@gmail.com' },
    { key: 'GitHub', value: 'github.com/anubhavc9', link: 'https://www.github.com/anubhavc9' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

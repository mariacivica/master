import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product, ScoreSkills } from '../dashboard/dashboard-components/score-skills/score-skills-data';

interface Message {
  id: number;
  subject: string;
  sender: string;
  date: Date;
  content: string;
  category: string;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messages: Message[] = [];
  filteredMessages: Message[] = [];
  activeTab = 1;
  selectedMessage?: Message;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadMessages();
    this.filterMessages();
  }

  loadMessages(): void {
    this.messages = ScoreSkills.map((skill: Product, index: number) => ({
      id: index + 1,
      subject: `Has superado la tecnología ${skill.productName}`,
      sender: 'admin@ejemplo.com',
      date: new Date(skill.testDate),
      content: `Se ha superado la tecnología ${skill.productName} con una puntuación de ${skill.testScore}`,
      category: 'General'
    }));

    // Ordenar los mensajes por fecha de manera descendente (más reciente primero)
    this.messages.sort((a, b) => b.date.getTime() - a.date.getTime());

    this.filterMessages();
  }

  filterMessages(): void {
    switch (this.activeTab) {
      case 1:
        this.filteredMessages = this.messages.filter(msg => msg.category === 'General');
        break;
      default:
        this.filteredMessages = this.messages;
    }
  }

  openMessage(content: any, message: Message): void {
    this.selectedMessage = message;
    this.modalService.open(content, { centered: true });
  }
}

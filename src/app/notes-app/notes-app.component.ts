import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.scss']
})
export class NotesAppComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;

  @ViewChild('truncator', { static: true })

  truncator!: ElementRef<HTMLElement>;

  @ViewChild('bodyText', { static: true }) bodyText!: ElementRef<HTMLElement>;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {

    let style = window.getComputedStyle(this.bodyText.nativeElement, null);

    let viewableHeight = parseInt(style.getPropertyValue('height'), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.render.setStyle(this.truncator.nativeElement, 'display', 'block');
      // this.truncator.nativeElement.classList.add('active');

    }else {
      this.render.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

}

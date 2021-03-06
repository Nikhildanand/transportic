import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() outline: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() rounded: boolean = false;

  constructor() { }

  ngOnInit(): void { }
  
  /* All conditions moved to template using ngClass which is better */
}

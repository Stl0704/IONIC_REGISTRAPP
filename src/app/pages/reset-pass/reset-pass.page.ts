import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})


export class ResetPassPage implements OnInit {

  isAlertOpen = false;
  public alertButtons = ['OK']; 
  mensaje: string = '';

  constructor() { }

  ngOnInit() {

  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}

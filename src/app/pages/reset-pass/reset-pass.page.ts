import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})



mesaje: string = '';
isAlertOpen = false;
public alertButtons = ['OK'];
export class ResetPassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

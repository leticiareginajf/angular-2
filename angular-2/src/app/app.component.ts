import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onButtonClicked(){
    console.log('onCardButtonClicked')
    // chamada HTTP
  }

}

/*

  buttonClicked(){
    console.log('Button Clicked');
  }
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  luke = {name:'luke', isJedi: true, tample: 'Coruscant'}
  leia = {name:'leia', isJedi: false}
  alciomar = {name:'alciomar', isJedi: false}
  
}

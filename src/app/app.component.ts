import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  //extraCreature!: string;
  // @ViewChild(SharkDirective)
  // set appShark(directive:SharkDirective){

  //   this.extraCreature = directive.creature;
  // }
  //extraCreature!: string;
  // @ViewChild(SharkDirective)
  // set appShark(directive:SharkDirective){
  //   this.extraCreature = directive.creature;
  // }

  @ViewChild('someInput')
  someInput!: ElementRef;

  @ViewChild(ChildComponent)
  child!: ChildComponent;

  ngAfterViewInit(): void {
    //console.log(this.extraCreature);
    this.someInput.nativeElement.value = 'Whale';
    console.log(this.child.whoAmI());
  }
}

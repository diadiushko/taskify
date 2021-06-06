import {Component} from '@angular/core';

export interface NavButton {
  imgUrl: string
  name: string
  addition?: {
    color: string
    done: boolean
  }
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent {

  constructor() {
  }

  navButtons: NavButton[] = [
    {
      imgUrl: 'assets/images/todo.svg',
      name: 'Todos',
      addition: {
        color: '#A63737',
        done: false
      }
    },
    {
      imgUrl: 'assets/images/checked.svg',
      name: 'Done',
      addition: {
        color: '#5073A8',
        done: true
      }
    },
    {
      imgUrl: 'assets/images/plus.svg',
      name: 'Create'
    },
    {
      imgUrl: 'assets/images/github.svg',
      name: 'Git'
    }
  ]

}

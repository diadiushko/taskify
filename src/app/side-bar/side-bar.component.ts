import {Component} from '@angular/core';

export interface NavButton {
  imgUrl: string
  name: string
  isOpen?: boolean
  addition?: {
    color: string
    done: boolean
  }
  onClick: Function
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
      isOpen: false,
      onClick() {
        this.isOpen = !this.isOpen;
      },
      addition: {
        color: '#A63737',
        done: false
      }
    },
    {
      imgUrl: 'assets/images/checked.svg',
      name: 'Done',
      isOpen: false,
      onClick() {
        this.isOpen = !this.isOpen;
      },
      addition: {
        color: '#5073A8',
        done: true
      }
    },
    {
      imgUrl: 'assets/images/plus.svg',
      name: 'Create',
      onClick(cb: Function) {
        cb();
      },
    },
    {
      imgUrl: 'assets/images/github.svg',
      name: 'Git',
      onClick() {
        window.open('https://github.com/dyadyushko/taskify', "_blank");
        return;
      },
    }
  ]

}

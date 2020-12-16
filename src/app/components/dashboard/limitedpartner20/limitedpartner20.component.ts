import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner20',
    templateUrl: './limitedpartner20.component.html',
    styleUrls: ['./limitedpartner20.component.scss']
})
export class Limitedpartner20Component  {

  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }


}
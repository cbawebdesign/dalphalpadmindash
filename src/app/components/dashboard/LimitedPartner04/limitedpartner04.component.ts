import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner04',
    templateUrl: './limitedpartner04.component.html',
    styleUrls: ['./limitedpartner04.component.scss']
})
export class Limitedpartner04Component  {

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
import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner16',
    templateUrl: './limitedpartner16.component.html',
    styleUrls: ['./limitedpartner16.component.scss']
})
export class Limitedpartner16Component  {

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
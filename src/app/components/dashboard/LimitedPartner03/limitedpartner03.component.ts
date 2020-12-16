import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner03',
    templateUrl: './limitedpartner03.component.html',
    styleUrls: ['./limitedpartner03.component.scss']
})
export class Limitedpartner03Component  {

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
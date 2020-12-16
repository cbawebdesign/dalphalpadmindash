import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner09',
    templateUrl: './limitedpartner09.component.html',
    styleUrls: ['./limitedpartner09.component.scss']
})
export class Limitedpartner09Component  {

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
import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner08',
    templateUrl: './limitedpartner08.component.html',
    styleUrls: ['./limitedpartner08.component.scss']
})
export class Limitedpartner08Component  {

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
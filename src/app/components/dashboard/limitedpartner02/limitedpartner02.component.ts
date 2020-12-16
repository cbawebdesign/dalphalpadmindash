import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner02',
    templateUrl: './limitedpartner02.component.html',
    styleUrls: ['./limitedpartner02.component.scss']
})
export class Limitedpartner02Component  {

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
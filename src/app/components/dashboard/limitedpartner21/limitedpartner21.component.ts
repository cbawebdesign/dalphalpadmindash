import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner21',
    templateUrl: './limitedpartner21.component.html',
    styleUrls: ['./limitedpartner21.component.scss']
})
export class Limitedpartner21Component  {

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
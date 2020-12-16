import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner22',
    templateUrl: './limitedpartner22.component.html',
    styleUrls: ['./limitedpartner22.component.scss']
})
export class Limitedpartner22Component  {

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
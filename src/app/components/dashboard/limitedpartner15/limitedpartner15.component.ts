import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner15',
    templateUrl: './limitedpartner15.component.html',
    styleUrls: ['./limitedpartner15.component.scss']
})
export class Limitedpartner15Component  {

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
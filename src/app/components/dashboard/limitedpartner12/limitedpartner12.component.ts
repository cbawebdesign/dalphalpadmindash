import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner12',
    templateUrl: './limitedpartner12.component.html',
    styleUrls: ['./limitedpartner12.component.scss']
})
export class Limitedpartner12Component  {

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
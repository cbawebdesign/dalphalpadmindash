import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner18',
    templateUrl: './limitedpartner18.component.html',
    styleUrls: ['./limitedpartner18.component.scss']
})
export class Limitedpartner18Component  {

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
import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner11',
    templateUrl: './limitedpartner11.component.html',
    styleUrls: ['./limitedpartner11.component.scss']
})
export class Limitedpartner11Component  {

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
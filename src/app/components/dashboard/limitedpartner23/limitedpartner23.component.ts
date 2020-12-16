import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner23',
    templateUrl: './limitedpartner23.component.html',
    styleUrls: ['./limitedpartner23.component.scss']
})
export class Limitedpartner23Component  {

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
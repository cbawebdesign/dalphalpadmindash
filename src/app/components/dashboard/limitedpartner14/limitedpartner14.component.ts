import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner14',
    templateUrl: './limitedpartner14.component.html',
    styleUrls: ['./limitedpartner14.component.scss']
})
export class Limitedpartner14Component  {

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
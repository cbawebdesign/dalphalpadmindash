import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner17',
    templateUrl: './limitedpartner17.component.html',
    styleUrls: ['./limitedpartner17.component.scss']
})
export class Limitedpartner17Component  {

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
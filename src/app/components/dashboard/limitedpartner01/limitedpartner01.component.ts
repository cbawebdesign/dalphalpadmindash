import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner01',
    templateUrl: './limitedpartner01.component.html',
    styleUrls: ['./limitedpartner01.component.scss']
})
export class Limitedpartner01Component  {

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
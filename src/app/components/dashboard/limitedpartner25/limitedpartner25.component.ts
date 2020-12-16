import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner25',
    templateUrl: './limitedpartner25.component.html',
    styleUrls: ['./limitedpartner25.component.scss']
})
export class Limitedpartner25Component  {

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
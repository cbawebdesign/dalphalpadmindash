import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner13',
    templateUrl: './limitedpartner13.component.html',
    styleUrls: ['./limitedpartner13.component.scss']
})
export class Limitedpartner13Component  {

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
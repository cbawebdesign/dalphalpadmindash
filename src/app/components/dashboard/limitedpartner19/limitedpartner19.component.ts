import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner19',
    templateUrl: './limitedpartner19.component.html',
    styleUrls: ['./limitedpartner19.component.scss']
})
export class Limitedpartner19Component  {

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
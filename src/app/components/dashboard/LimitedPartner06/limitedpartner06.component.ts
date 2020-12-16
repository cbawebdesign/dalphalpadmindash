import { Component } from '@angular/core';

@Component({
    selector: 'app-limitedpartner06',
    templateUrl: './limitedpartner06.component.html',
    styleUrls: ['./limitedpartner06.component.scss']
})
export class Limitedpartner06Component  {

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
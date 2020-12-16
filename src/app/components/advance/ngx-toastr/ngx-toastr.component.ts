import { Component } from '@angular/core';

@Component({
    selector: 'app-ngx-toastr',
    templateUrl: './ngx-toastr.component.html',
    styleUrls: ['./ngx-toastr.component.scss']
})
export class NgxToastrComponent  {

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
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild()


  uploadUrl: string;

  // restore file that be uploaded
  uploadedFiles: any[] = [];

  // icon pdf and word
  iconList = ["far fa-file-pdf", "far fa-file-word"]

  getIcon(filename: any): string {
    const exten = filename.name.split(".").pop();
    if (exten == "pdf") {
      return this.iconList[0];
    }
    else {
      return this.iconList[1];
    }
  }

  getSize(filesize: number): string {
    const Kb: number = 1000;
    const Mb: number = 1000 * Kb;

    if (filesize < Kb) {
      return filesize + " Bytes"
    }
    else if (filesize >= Kb && filesize < Mb) {
      return (filesize / Kb).toFixed(3) + " KB"
    }
    else {
      return (filesize / Mb).toFixed(3) + " MB"
    }
  }


  onUpload(event: any): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }


  // event of p-fileUpload
  onSelect(event: any) : void {
    for(const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onRemove(event: any, uploader : FileUpload): void {
    this.uploadedFiles.splice(event.file.index, 1);
  }


  onClear(event: any): void{
    this.uploadedFiles = []
  }
  onBeforeSend(event: any): void {
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + abp.auth.getToken());
  }


  present() {
    return alert(this.uploadedFiles.length);
  }
}

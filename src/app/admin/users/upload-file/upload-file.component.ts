import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uploadUrl: string;
  uploadedFiles: any[] = [];
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

  onUpload(event: any): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onSelect(event: any) : void {
    for(const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onRemove(event: any): void {
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

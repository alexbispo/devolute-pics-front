import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PictureService } from '../picture/picture.service';
import { UserService } from '../user/user.service';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './picture-form.component.html'
})
export class PictureFormComponent implements OnInit  {

  pictureForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBulder: FormBuilder,
    private pictureService: PictureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pictureForm = this.formBulder.group({
      file: ['', Validators.required],
    });
  }

  upload() {
    this.pictureService.upload(this.file)
      .pipe(finalize(() => {
        this.router.navigate(['home']);
      }))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert('Upload complete');
        }
      },
      err => {
        console.error(err);
        alert('Upload error!');
      });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodemailerDemo';
  public subscription: Subscription;
  constructor(private sendmailservice: DataService,
              private fb: FormBuilder) { }

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }


  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}

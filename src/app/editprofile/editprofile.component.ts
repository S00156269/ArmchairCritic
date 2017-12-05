import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditprofileComponent implements OnInit {
  currentReviewer: Reviewer;
  constructor(public authService: AuthService, public afa: AngularFireAuth) { 
    this.GetUID();
  }

  GetUID() {
    this.afa.authState.subscribe((resp) => {
      if (resp != null) {
        if (resp.uid) {
          this.currentReviewer.UID = resp.uid;
        }
      }
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Profile, profile } from './profile-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor() {
    this.profile = profile;
  }

  ngOnInit(): void {}
}

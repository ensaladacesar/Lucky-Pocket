import { Component, OnInit } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  FB_APP_ID: number = 382437569196107;

  constructor(
    private nativeStorage: NativeStorage,
    private fb: Facebook,
    private router: Router)
    {

  }

  ngOnInit() {
    this.nativeStorage.getItem('facebook_user')
    .then(
      data => console.log(data),
      error => console.log(error)
    );

    this.fb.getLoginStatus()
    .then(
      data => console.log(data),
      error => console.log(error)
    );
  }

  doFbLogout(){
		this.fb.logout()
		.then(res =>{
			//user logged out so we will remove him from the NativeStorage
			this.nativeStorage.remove('facebook_user');
			this.router.navigate(["/login"]);
		}, error =>{
			console.log(error);
		});
	}
}

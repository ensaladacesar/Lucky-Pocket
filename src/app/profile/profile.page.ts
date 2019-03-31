import { Component, OnInit } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(
    private nativeStorage: NativeStorage,
    private fb: Facebook,
    private router: Router)
    {
  }

  userName: any;
  userEmail: any;
  userPicture: any;
   
  ngOnInit() {
    this.nativeStorage.getItem('facebook_user')
    .then(
      data=> {
        this.userName = data.name;
        this.userEmail = data.email;
        this.userPicture = data.picture;

        console.log(this.userName +
          this.userEmail +
          this.userPicture)
      },
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

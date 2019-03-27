import { Component, OnInit } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  FB_APP_ID: number = 382437569196107;

  constructor(
		private fb: Facebook,
		private nativeStorage: NativeStorage,
		public loadingController: LoadingController,
		private router: Router
  ) { }

  ngOnInit() {
  }

  async doFbLogin(){
		const loading = await this.loadingController.create({
			message: 'Please wait...'
		});
		this.presentLoading(loading);
		let permissions = new Array<string>();

		//the permissions your facebook app needs from the user
    permissions = ["public_profile", "email"];

		this.fb.login(permissions)
		.then(response =>{
			let userId = response.authResponse.userID;

			//Getting name and gender properties
			this.fb.api("/me?fields=name,email", permissions)
			.then(user =>{
				user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
				//now we have the users info, let's save it in the NativeStorage
				this.nativeStorage.setItem('facebook_user',
				{
					name: user.name,
					email: user.email,
					picture: user.picture
				})
				.then(() =>{
					//this.router.navigate(["/tabs/profile"]);
					this.router.navigateByUrl('/tabs');

					loading.dismiss();
				}, error =>{
					console.log(error);
					loading.dismiss();
				})
			})
		}, error =>{
			console.log(error);
			loading.dismiss();
		});
	}

  async presentLoading(loading) {
		return await loading.present();
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

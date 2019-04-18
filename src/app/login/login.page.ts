import { Component, OnInit } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


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
	private router: Router,
	private user: UserService,
	private http: HttpClient
) { }

ngOnInit() {
}

createUser(name: any, email: any, birthday: any){
	this.user.createUser(name, email, birthday)
	.subscribe(res =>{
		console.log(res);
		this.createUserPoints(res);
		this.createUserCredit(res);
	})
}

createUserPoints(user_id: any){
	this.user.createUserPoints(user_id)
	.subscribe(res =>{
		console.log(res);
	})
}

createUserCredit(user_id: any){
	this.user.createUserCredit(user_id)
	.subscribe(res =>{
		console.log(res);
	})
}

async doFbLogin(){
	const loading = await this.loadingController.create({
		message: 'Please wait...'
	});
	this.presentLoading(loading);
	let permissions = new Array<string>();

	//the permissions your facebook app needs from the user
	permissions = ["public_profile", "email", "user_birthday"];

	this.fb.login(permissions)
	.then(response =>{
		let userId = response.authResponse.userID;
		console.log(response);
		//Getting name and gender properties
		this.fb.api("/me?fields=name,email,birthday", permissions)
		.then(user =>{
			user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
			this.user.userExist(user.email)
			.subscribe(res => {
				if(res == false){
					this.createUser(user.name, user.email, user.birthday)
				}
			})
			//now we have the users info, let's save it in the NativeStorage
			this.nativeStorage.setItem('facebook_user',
			{
				name: user.name,
				email: user.email,
				picture: user.picture,
				birthday: user.birthday
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

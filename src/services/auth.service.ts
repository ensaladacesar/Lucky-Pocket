import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
import AuthProvider = firebase.auth.AuthProvider;
import {auth} from 'firebase';
import { Facebook } from '@ionic-native/facebook'
import {Platform} from 'ionic-angular';


@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth, public facebook: Facebook, private platform: Platform) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

	signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	loginWithFacebook() {
		return Observable.create(observer => {
		  if (this.platform.is('cordova')) {
			this.facebook.login(['email', 'public_profile']).then(res => {
			  const facebookCredential = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
			  this.afAuth.auth.signInWithCredential(facebookCredential).then(user => {
				observer.next(user);
			  }).catch(error => {
				observer.error(error);
			  });
			}).catch((error) => {
			  observer.error(error);
			});
		  } else {
			this.afAuth.auth
			  .signInWithPopup(new auth.FacebookAuthProvider())
			  .then((res) => {
				observer.next(res);
			  }).catch(error => {
			  observer.error(error);
			});
		  }
		});
	  }

	private oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider);
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential.accessToken;
					// The signed-in user info.
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
	}

}

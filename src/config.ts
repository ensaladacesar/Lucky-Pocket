import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyC51AUIqt7cAbVk3tlnAFT_slgB6Wn7K5g",
		authDomain: "lucky-pocket-a84ac.firebaseapp.com",
		databaseURL: "https://lucky-pocket-a84ac.firebaseio.com",
		projectId: "lucky-pocket-a84ac",
		storageBucket: "lucky-pocket-a84ac.appspot.com",
		messagingSenderId: "681150529909"
	}
};
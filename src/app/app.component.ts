import { Component } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    
  ) {
    OneSignal.setAppId("82aaa187-a3a6-4e3c-8165-bde1fe16cb31");
  OneSignal.setNotificationOpenedHandler(function(jsonData) {
      alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
    alert("User accepted notifications: " + accepted);
  });
  }
}
/* '82aaa187-a3a6-4e3c-8165-bde1fe16cb31',
      '55436866117' */




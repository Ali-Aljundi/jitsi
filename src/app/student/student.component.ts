import { Component, OnInit } from '@angular/core';
import { IframeService } from '../iframe.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
iframe
  constructor(private iframeService:IframeService) { }

  ngOnInit(): void {
    let student_name = 'ali'
 
       let setting = `config.prejoinPageEnabled=false&config.hiddenPremeetingButtons=%5B%22microphone%22%2C%22camera%22%2C%22select-background%22%2C%22invite%22%2C%22settings%22%5D&config.notifications=%5B%22connection.CONNFAIL%22%2C%22notify.chatMessages%22%2C%22lobby.joinRejectedMessage%22%2C%22notify.raisedHand%22%5D&config.toolbarButtons=%5B%22fullscreen%22%2C%22chat%22%2C%22raisehand%22%2C%22hangup%22%5D&config.remoteVideoMenu=%7B%22disabled%22%3Atrue%7D&config.disableInviteFunctions=true&interfaceConfig.DISABLE_JOIN_LEAVE_NOTIFICATIONS=true&interfaceConfig.HIDE_INVITE_MORE_HEADER=true&userInfo.displayName=%22${student_name}%22&appData.localStorageContent=null`
   var ifrm = document.createElement("iframe");
   ifrm.setAttribute("src", "https://meet.jit.si/firstclass-cs123-ali#jitsi_meet_external_api_id=0&"+setting);
      ifrm.style.width = "640px";
   ifrm.style.height = "480px";
   ifrm.allow="microphone; clipboard-write"
   setTimeout(function(){
    document.body.appendChild(ifrm);
  }, 3000); 
    // var element = document.getElementById("new");
    // element.appendChild(this.iframe);
  }

}

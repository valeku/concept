import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})



export class CommonfuncsService {

  sreenWidth: 0;

  constructor(private toastController: ToastController,
              public loadingController: LoadingController,
              platform: Platform) { 

                console.log('CommonfuncsService constructor');
                platform.ready().then(() => {
                  this.sreenWidth = platform.width();
                  console.log('Width: ' + platform.width());
                  console.log('Height: ' + platform.height());
                });

              }              

  async presentToast( message: string,
                      duration: number, 
                      position: "bottom" | "middle" | "top",
                      color: string,
                      isButton: boolean) {

    let buttons = [];
    if (isButton)
      buttons.push({side: 'end', text: 'OK'});   
//colors: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark"
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
      color:    color,
      //cssClass:"my-custom-class",
      buttons: buttons
    });
    toast.present();
  }


  goToLink(url: string){
    window.open(url, "_blank");
  } 



}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  title: string;
  form: FormGroup;
  contact: any;

  constructor(public  navCtrl: NavController,
              public  navParams: NavParams,
              private formBuilder: FormBuilder,
              private provider: ContactProvider,
              private toast: ToastController) {
                
                this.contact = this.navParams.data.contact || {};
                this.createForm();

                
                this.setupPageTitle();
  }

  private setupPageTitle(){
    this.title = this.navParams.data.contact ? 'Alterando contato': 'Adicionar Contato';
  }
  createForm(){
    this.form = this.formBuilder.group({
      key: [this.contact.key],
     name: [this.contact.name, Validators.required],
      tel:  [this.contact.tel, Validators.required],
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.provider.save(this.form.value)
      .then(() =>{
        this.toast.create({
          message: 'Adiconado com sucesso!', duration: 3000}).present();
          this.navCtrl.pop();
      }).catch(() =>{
        this.toast.create({
          message: 'Errro ao adicionar!', duration: 3000}).present();
         // console.error(e);
      })
    }
  }
}

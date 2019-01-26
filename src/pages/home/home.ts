import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { RProvider } from '../../providers/r/r';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public segmentB: string ='test1';
  public submitAttempt1 = false;
  public submitAttempt2 = false;
  form1: FormGroup;
  form2: FormGroup;
  public res1 = '';
  public res2 = '';
  public normal: any;
  public normaln: any;
  public case;
  public slides = [{id: "test1"}, {id: "test2"}];
  
  constructor(public navCtrl: NavController,
    public rProvvider: RProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl : LoadingController,
    public alertController: AlertController) {
    this.case = "simpson"
 

  this.form1 = formBuilder.group({
  case: ['simpson'],
  caset: [1],
  valora: ['',[ Validators.required]],
  valorb: ['',[ Validators.required]],
  valorn: [20,[ Validators.required]],
  });

  this.form2 = formBuilder.group({
    case: ['simpson'],
    caset: [1],
    valorx: ['',[
      Validators.required
  
    ]],
    valorn: [20,[ Validators.required]],
    });
  }
  onSegmentChanged(segmentButton) {


  } 

  calcularAB(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Cargando..'
    });
    this.submitAttempt1 = true;
    console.log(this.form1.value);
    if(!this.form1.valid){
    
    }else{

      if (this.form1.value['case'] == 'simpson' 
      && this.form1.value['caset'] == 1
      && ((this.form1.value['valorn'] %2) !=0)){
        let alert =  this.alertController.create(
          {
          message: 'La n debe ser par.',
          buttons: ['OK']
        });
    
         alert.present();
      }else{
        let caso = this.form1.value['case'];
        let casot = this.form1.value['caset'];
        let a = this.form1.value['valora'];
        let b = this.form1.value['valorb'];
        let n = this.form1.value['valorn'];
         if (caso =='simpson'){
         loading.present();
         if (casot == "1"){
          this.rProvvider.getProbSimpson(b,a,n).subscribe((res : any) =>{
            console.log(res);
            this.res1 = res.response;
            loading.dismiss()
          })
         }else{
          this.rProvvider.getProbSimpsonpy(b,a,n).subscribe((res : any) =>{
            console.log(res);
            this.res1 = res.response;
            loading.dismiss()
          })
         }
      
         }else{
         loading.present();
         this.rProvvider.getProbTrapecio(b,a,n).subscribe((res : any) =>{
         console.log(res);
         this.res1 = res.response;
         loading.dismiss()
         })
         }
      }
   
    }
  }
  calcularAcumulada(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Cargando..'
    });
    this.submitAttempt2 = true;
    console.log(this.form2.value);
    if(!this.form2.valid){
      //console.log(this.form2.controls.valora.valid)
    }else{
      if (this.form2.value['case'] == 'simpson' 
      && this.form2.value['caset'] == 1
      && ((this.form2.value['valorn'] %2) !=0)){
        let alert =  this.alertController.create(
          {
          message: 'La n debe ser par.',
          buttons: ['OK']
        });
    
         alert.present();
      }else{
     let caso = this.form2.value['case'];
     let b = this.form2.value['valorx'];
     let casot = this.form2.value['caset'];
     let n = this.form2.value['valorn'];


      if (caso =='simpson'){
        //

        loading.present();
        if (casot == "1"){
         this.rProvvider.getProbSimpson(b,-20,n).subscribe((res : any) =>{
           console.log(res);
           this.res2 = res.response;
           loading.dismiss()
         })
        }else{
         this.rProvvider.getProbSimpsonpy(b,-20,n).subscribe((res : any) =>{
           console.log(res);
           this.res2 = res.response;
           loading.dismiss()
         })
        }
      }else{
        loading.present();
        this.rProvvider.getProbTrapecio(b,-20,n).subscribe((res : any) =>{
          console.log(res);
          this.res2 = res.response;
          loading.dismiss()
        })
      }
    }
  }
  }
  normalTable(){
 
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Cargando..'
    });
    loading.present();
  
    this.rProvvider.getnormalTable().subscribe((r: any) =>{
      console.log(r);
      this.normal = r.response;
  
      this.rProvvider.getnormalTablen().subscribe((r: any) =>{
        console.log(r);
        this.normaln = r.response;

        loading.dismiss();
  
      })
    })

  }


}

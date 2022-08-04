import { Component } from "@angular/core"

@Component({
    selector:'app-form',
    templateUrl:'./form.component.html',
    styleUrls:['./form.component.css']
})

export class FormComponent{
    formData:any = {
        fullName:'',
        companyName:'',
        phone:'',
        email:'',
        message:''
    }
    getInfo(){
        console.log(this.formData);
    }
}
//     fullName:string = '';
//     companyName:string = '';
//     telephoneNumber:string = '';
//     emailAdress:string = '';
//     messages:string = '';

//     onInputFullName(event:any){
//         this.fullName = event.target.value
//     }

//     onInputCompanyName(event:any){
//         this.companyName = event.target.value
//     }

//     onInputTelephoneNumber(event:any){
//         this.telephoneNumber = event.target.value
//     }

//     onInputEmail(event:any){
//         this.emailAdress = event.target.value
//     }

//     onInputMessage(event:any){
//         this.messages = event.target.value
//     }
//     // here must be a check for inputs data
//     getInfo(){
//         console.log('Full name: ',this.fullName);
//         console.log("Company name: ",this.companyName);
//         console.log('Telephone: ',this.telephoneNumber);
//         console.log("e-mail: ",this.emailAdress);
//         console.log("MESSAGE: ",this.messages);
//     }

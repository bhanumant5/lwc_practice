import { api, LightningElement ,track} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getRecord } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';




export default class Day_3 extends LightningElement {
@track name;
@track pho;
@track rat;
@track ind;
@api recordid;
Accname(event){
    this.name=event.target.value;
}
Accphone(event){
    this.pho=event.target.value;
}
Accrat(event){
    this.rat=event.target.value;
}
Accin(event){
    this.ind=event.target.value;
}
callme(){
   const fields = {'Name':this.name, 'Phone':this.pho, 'Rating':this.rat, 'Industry':this.ind}
  const recordData={apiName:'Account', fields}


    createRecord(recordData).then(res=>{
        alert('Your Record is Succesfully Create :'+response.id)
    }).catch(error=>{
        alert('Your Record Creation Failed :'+error.body.message)
    })
}


}
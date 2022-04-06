import { LightningElement,wire,track } from 'lwc';
import getproperties from '@salesforce/apex/PropertyList.getproperties';
import getContacts from '@salesforce/apex/ContactController.findContactByAccountId';
import createCon from '@salesforce/apex/ContactController.createContact';
export default class Propertyrecords extends LightningElement
 {

    @wire(getproperties) properties;
    isshow = false;
    @track store;
    isshow2=false;
    @track s;

    contactGet(event)
    {
       this.s=event.currentTarget.dataset.id;
        this.isshow=true;   
        //console.log(event.currentTarget.dataset.id);
        getContacts({pId : event.currentTarget.dataset.id })
        .then(result=>
            {
            this.store=result;
            //console.log(result);
            });

    }

    contactCreate()
     {
     this.isshow2=true;
     
    }
    closeModal() 
    {
        this.isshow2 = false;
    }
    @track isshow2=false;
    name='';
    photo='';
    handleChange(event)
     {
         if(event.target.label=='Name')
         {
             this.name=event.target.value;
         }
         if(event.target.label=='Photo')
         {
             this.photo=event.target.value;
         }
         
     }
    submitDetails()
    {
      
        this.isshow2=false;
        createCon({name :this.name, url: this.photo, prId: this.s})
        .then(result=>
            {
            console.log(result);
            }) 
    }
}

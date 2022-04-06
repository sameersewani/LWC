import { LightningElement,track } from 'lwc';
import property__obj from '@salesforce/schema/Property__c';
import property_name from '@salesforce/schema/Property__c.Name'
import property_pic from '@salesforce/schema/Property__c.Photo__c'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
export default class Propertycreate extends LightningElement
 {
     @track isModalOpen=false;
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
     
    submitDetails(event)
    {
        this.isModalOpen=false;
        const fields = {};
        fields[property_name.fieldApiName] = this.name;
        fields[property_pic.fieldApiName] = this.photo;
        const recordInput = { apiName:property__obj.objectApiName, fields };
        createRecord(recordInput)
         this.dispatchEvent(
         new ShowToastEvent(
             {
                 title: 'Success',
                message: 'Property created',
                variant: 'success',
            }),
        );

        
    }

    openModal()
    {
        this.isModalOpen=true;
    }
    closeModal() 
    {
        this.isModalOpen = false;
    }
 }
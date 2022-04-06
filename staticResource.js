import { LightningElement, wire,track,api } from 'lwc';
import one from '@salesforce/resourceUrl/Clock'
import two from '@salesforce/resourceUrl/TT'
import three from '@salesforce/resourceUrl/Train'
import four from '@salesforce/resourceUrl/Track'
import five from '@salesforce/resourceUrl/Obstical'
import { NavigationMixin } from 'lightning/navigation';z
import getStations from '@salesforce/apex/Station.getStations';

export default class StaticResource extends NavigationMixin(LightningElement)
{
    @api record;  // to get data
    @track data; // to get data
    c_time;
    track1=true;
    track2=true;
    track3=true;
    track4=false;
    track5=false;

    @track mytime=0;

    @wire(getStations) 
    Stationrecord({error,data})  //it returns promise
    {

        if(data)
        {
            this.record=data;
            console.log(this.record); 
           
        }
        else if(error)

        {
            this.record=undefined;
        }
    }



     timechange(event)
     {
        this.mytime=event.target.value;
        console.log(this.mytime);
        

        for(var i=0;i<this.record.length; i++)
        {
             const ms = this.record[i].ArrivalTime__c;
              this.c_time=(new Date(ms).toISOString().slice(11, 23));
             console.log(this.c_time);

             if(this.c_time == this.mytime) 
             {
                 this.track3=false;
                 this.track4=true;
                 this.track1=false;
                 this.track5=true;
               
                
             }
             
        }
    }
    navigateToObjectHome()
     {
        // Navigate to the Station new page
        this[NavigationMixin.Navigate](
            {
                type: 'standard__objectPage',
                attributes:
                 {
                    objectApiName: 'Station__c',
                     actionName: 'new',
                 },
            });
     }
    clock=one;
    tt=two;
    train=three;
    track=four;
    obstical=five;

    isshow=false;

    handleClick(event)
    {
        this.isshow=true;

    }
    off(event)
    {
        this.isshow=false;
    }



        
    
}
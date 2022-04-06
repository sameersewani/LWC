public with sharing class Station {
    // public Station() 
    // {

    // }
    @AuraEnabled(cacheable=true)
    public static List<Station__c> getStations()
    {
        return[select  ArrivalTime__c,Select_Platform__c from Station__c WITH SECURITY_ENFORCED];
    }
}

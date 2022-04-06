public with sharing class ContactController
 {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContactByAccountId(string pId)
     {      
        return [SELECT FirstName,LastName,Photo__c FROM Contact where Property_Name__c = :pId];
    }
    @AuraEnabled
    public static Contact createContact(string name,string url,string prId)
    {
        Contact con = new Contact(lastname = name , Property_Name__c = prId , Photo__c = url);
        insert con;
        return con;
       
    }
}


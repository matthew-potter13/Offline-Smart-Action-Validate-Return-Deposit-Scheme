function runAction(t){t.data.message="";let r=0;return t.data.related.OrderItem.forEach(e=>{t.data.related.aforza__Relationship_Rule__c.forEach(a=>{e.Product2Id===a.aforza__Source_Product__c&&(r+=e.Quantity*a.aforza__Quantity__c)})}),t.data.related.OrderItem.forEach(e=>{t.data.related.Product2.forEach(a=>{e.Product2Id==="01t5r000004ljq6AAA"&&e.Product2Id===a.Id&&(e.Quantity=r,t.data.message=json.stringify(a))})}),t.data.message+="Your Deposit Return Scheme has been validated",t.data.message===""&&(t.data.error="An Error has occured",t.data.message=null),t.data.updateDeviceData=!0,t.data.updateDeviceData.Order=!0,t.data.updateDeviceData.OrderIem=!0,t.data.reprice=!0,t}
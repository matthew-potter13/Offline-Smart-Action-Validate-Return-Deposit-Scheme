function runAction(e){e.data.message="";let r=new Map,a=new Map;return e.data.related.OrderItem.forEach(t=>{r.set(t.Product2Id,t.Quantity)}),e.data.related.aforza__Relationship_Rule__c.forEach(t=>{t.aforza__Type__c==="Addition"&&a.set(t.aforza__Target_Product__c,t)}),e.data.related.OrderItem.forEach(t=>{a.has(t.Product2Id)&&(e.data.message+="productIdToRelationshipRule",r.has(a.get(t.Product2Id).aforza__Source_Product__c)?t.Quantity=r.get(a.get(t.Product2Id).aforza__Source_Product__c)*a.get(t.Product2Id).aforza__Quantity__c:t.Quantity=null)}),e.data.message+="Your Deposit Return Scheme has been validated",e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderIem=!0,e.data.reprice=!0,e}

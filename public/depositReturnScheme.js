function runAction(e){e.data.message="";let u=new Map,a=new Map;return e.data.related.OrderItem.forEach(t=>{u.set(t.Product2Id,t.Quantity)}),e.data.related.aforza__Relationship_Rule__c.forEach(t=>{if(t.aforza__Type__c==="Addition"){let r=new Map;r.sourceProduct=t.aforza__Source_Product__c,r.quantity=t.aforza__Quantity__c,a.set(t.aforza__Target_Product__c,r)}}),e.data.related.OrderItem.forEach(t=>{a.has(t.Product2Id)&&(t.Quantity=u.get(a.get(t.Product2Id).get("sourceProduct"))*a.get(t.Product2Id).get("quantity"))}),e.data.message+="Your Deposit Return Scheme has been validated",e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderIem=!0,e.data.reprice=!0,e}

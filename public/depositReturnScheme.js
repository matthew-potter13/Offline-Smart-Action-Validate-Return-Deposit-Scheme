function runAction(t){t.data.message="";let r=new Map,a=new Map;return t.data.related.OrderItem.forEach(e=>{r.set(e.Product2Id,e.Quantity)}),t.data.related.aforza__Relationship_Rule__c.forEach(e=>{a.set(e.aforza__Target_Product__c,e)}),t.data.related.OrderItem.forEach(e=>{a.has(e.Product2Id)&&(e.Quantity=r[a[e]]*a[e].aforza__Quantity__c)}),t.data.message+="Your Deposit Return Scheme has been validated",t.data.updateDeviceData=!0,t.data.updateDeviceData.Order=!0,t.data.updateDeviceData.OrderIem=!0,t.data.reprice=!0,t}

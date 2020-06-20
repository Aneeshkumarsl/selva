function getSelectRule(element, index, array) { 
   return (element.value === paymentmthd.value); 
} 
          
var ruleRoute = fields[0].rule.filter(getSelectRule); 
console.log("ruleRoute  : " + ruleRoute );

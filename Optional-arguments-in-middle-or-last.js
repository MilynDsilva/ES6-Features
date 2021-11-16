function totalBill(cost, tax =10, surcharge=11,) {
    cost = cost || 0;
  
    console.log("Total Bill - ", cost + tax + surcharge);
  }
  
  totalBill(100);
  totalBill(100, 0.06);
  totalBill(100, 0.06, 0.03);
  
  //The optional parameters should always come at the end on the parameter list.
  //-----------------------------------------------------//

  function totalBill1(cost1, options) {
    var cost1 = cost1 || 0;
    var tax1 = options.tax1 || 0.05 * cost1;
    var surcharge1 = options.surcharge1 || 0.02 * cost1;
  
    console.log("Total Bill - ", cost1 + tax1 + surcharge1);
  }
  
  totalBill1(100, {});
  totalBill1(100, { tax1: 0.1 });
  totalBill1(100, { tax1: 0.1, surcharge1: 0.05 });


//-----------------------------------------------------//

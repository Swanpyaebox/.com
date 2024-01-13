function calculate(){
    const el=document.getElementById("answermm");
    const lengthmm=document.getElementById("lengthmm").value;
    
    const widthMm=document.getElementById("widthMm").value;
    
    const heightMn=document.getElementById("heightMm").value;
    
    const sheetlength=((lengthmm-+-widthMm)*2)+35;
    
    let sheetwidth=widthMm-+-heightMn;
    let sheetQuantity=1;
    if (sheetwidth>=900) {
        sheetQuantity=1; 
    }
    else if (sheetwidth>=450) {
        sheetQuantity=2;
        
    }else if (sheetwidth>=300) {
        sheetQuantity=3;
        
    }else if (sheetwidth>=225) {
        sheetQuantity=4;
    }else{
        sheetQuantity=5;
    }
    
    if (sheetwidth>=900) {
        sheetwidth=widthMm-+-heightMn; 
    }
    else if (sheetwidth>=450) {
        sheetwidth=(widthMm-+-heightMn)*2;
        
    }else if (sheetwidth>=300) {
        sheetwidth=(widthMm-+-heightMn)*3;;
        
    }else if (sheetwidth>=225) {
        sheetwidth=(widthMm-+-heightMn)*4;
    }else{
        sheetwidth=(widthMm-+-heightMn)*5;
    }
    
    if (sheetwidth>=1800) {
        sheetwidth=sheetwidth+70;
    }else{
        sheetwidth=sheetwidth+35;
    }
    const sheetprice=document.getElementById("sheetprice").value;
    
    const oneSmoothSheetPrice=(((sheetlength/1000)*(sheetwidth/1000))*sheetprice)+100;
    
    
    const boxPrice=oneSmoothSheetPrice/sheetQuantity;
    
    const profit=document.getElementById("profit").value;
    
    
   const adjustBoxPrice=boxPrice-+-profit-20;
   el.innerHTML="<em>Sheet Width</em> = "+"<strong>"+sheetwidth+ " mm</strong><br>"+
   "<em>Sheet Length</em> = "+"<strong>"+sheetlength+" mm</strong><br>"+
   "<em>Sheet Quantity</em> = "+"<strong>"+sheetQuantity+" Sheet</strong><br>"+
   "<br><strong>BoxPrice</em> = "+"</strong>"+adjustBoxPrice.toFixed(0)+" Kyats</strong><br>"+
   "<br><u><strong>Remark</strong></u><br>      <blod>   Box Price calculate base on calculate real sheet with and length.Thus, price will be different <strong>+</strong> or <strong>-</strong> 10 kyat your details calculation. </blod>";
   
   
    

   
}

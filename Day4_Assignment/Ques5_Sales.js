function mycommission(){
    var amt=Number(document.getElementById("amount").value);
    var sum=0;

    switch (true) {
        case (amt>20000):{
            let val=Math.round((10/100)*amt);
            console.log(sum);
            sum=sum+val;
        
        }
        case (amt>10001 || amt<20000):{
            let val=Math.round((7/100)*20000);
            console.log(sum);
            sum=sum+val;
            
        }
        case (amt>5001 || amt<10000 ):{
            let val=Math.round((5/100)*10000);
            console.log(sum);
            sum=sum+val;
            
        }
        case (amt>0||amt<5000):{
            let val=Math.round((2/100)*5000);
            console.log(sum);
            sum=sum+val;
            console.log(val,sum);
            
        }
        default:
            document.getElementById('printamt').innerHTML="Your Commission is "+sum+".";
            break;
    }
}
//this code executes all the cases irrespective of the condition

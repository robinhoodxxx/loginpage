  


  function mergesort(){
     mergeso();
  }

 function mergeso(){
     if(sizevalue==1){
         return arr;
     }
     var mid=Math.floor(sizevalue/2);
     div_update(divs[mid],arr[mid],yellow);
     var left=mergesort(arr.slice(0,mid));
     //div_update(divs[mid],arr[mid],"green");
     var right =mergesort(arr.slice(mid));
     //div_update(divs[mid],arr[mid],"green");
     return merge(left,right);
 }
 function merge(left,rigth){
     var i=j=k=0;
     var result=[];
     while(i<left.length&&j<rigth.length){
         if(left[i]>rigth[j]){
             result[k]=rigth[j++]
             div_update(divs[k],arr[k],"green");
             k++;
             
         }else{
            
                result[k]=left[i++]
                div_update(divs[k],arr[k],"green");k++;
         }
     }
     while(i<left.length){
         result[k]=left[i];
         div_update(divs[k],arr[k],"green");
     }
     while(j<rigth.length){
         result[k]=rigth[j];
         div_update(divs[k],arr[k],"green");
         j++;k++;
     }

     return result;
 }

  
  
  
   
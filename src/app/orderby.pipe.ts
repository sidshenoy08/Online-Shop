import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(arr:any[],column:string,order:boolean){
     if(column==undefined){
         return arr;
     }

      let result:any[]; 
     if(order){
       result =this.ascending(arr,column);
       }else{
         result =this.descending(arr,column);
          }
       return result;
 }

 /**
  * 
  * @param arr  array which needs to be sorted
  * @param column column name which is used for sorting
  */
 ascending(arr:any[],column:string){
     arr.sort((a:any,b:any)=>{
         console.log(a[column]+""+b[column]+""+column);
         if(a[column]>b[column]){
             return 1;
         }
         return -1;});
     return arr;}
/**
  * 
  * @param arr  array which needs to be sorted
  * @param column column name which is used for sorting
    */
 descending(arr:any[],column:string){
     arr.sort((a:any,b:any)=>{
         console.log(a[column]+""+b[column]+""+column);
         if(a[column]>b[column]){
             return -1;
         }
         return 1;
     });
     return arr;
 }
}

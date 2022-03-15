const prompt=require("prompt-sync")();
let i,j,temp,l,n;
let arr=[100];
n=prompt("Enter how many input need: ");
for(l=0;l<n;l++){
    arr[l]=prompt("Enter elements: ");
}
for(i=1;i<=n-1;i++){
    j=i;
    while(j>0&&arr[j-1]>arr[j]){
        temp=arr[j];
        arr[j]=arr[j-1];
        arr[j-1]=temp;
        j--;
    }
}
console.log("Elements sorted: ");
for(i=0;i<=n-1;i++){
    console.log(arr[i]);
}
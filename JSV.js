function sort(arr){
for (var i= arr.length; i>0; i--){
for (var j =0; j < i-1; j++){
	if (arr[j]>arr[j+1]){
var temp= arr[j];
arr[j]= arr[j+1];
arr[j+1]=temp;
	}
}
}
console.log(arr);
}
sort([1, 8, 9, 4, 7]);
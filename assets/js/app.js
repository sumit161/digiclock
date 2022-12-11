cl=console.log;
request=document.getElementById("digitalclock");
function digiclock(){
	let date=new Date();
	let hr=date.getHours();
	let min=date.getMinutes();
	let sec=date.getSeconds();
	let session="AM";
	
	if(hr>=12){
	  session="PM"
	};
    if(hr>=13){
		hr=hr-12
	};

	if(hr<10){
		hr="0"+hr
	};
	
	if(min<10){
		min="0"+min
	};
	
	if(sec<10){
		 sec="0"+sec
	 };
	result=`${hr}:${min}:${sec} ${session}`;
   setTimeout(digiclock,1000);
   	request.innerHTML=result;
}
digiclock()



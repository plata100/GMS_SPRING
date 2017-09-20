var series=
{
	arithmetic :(s,e)=>{
		var sum=0;
		var start=s*1;
		var end=e*1;
		for(var i=start;i<=end;i++){
			sum=sum+i;
		}
		return sum;
	},
	switchSeries : ()=>{
		// 1 - 2 + 3 - 4 + ... + 100
		var sum=0;
		var i=0;
		var sw=0;
		do{
			i=i+1;
			if(sw==0) {
				sum=sum+i;
				sw=1;
			} else {
				sum=sum-i;
				sw=0;
			}
		} while(i<100);
		return sum;
	},
	differenceSeries : x=>{
		var i=0;
		var j=1;
		var sum=1;
		var limit=x*1;
		do {
			i++;
			j=j+i;
			sum=sum+j;
		} while (i<limit);
		return sum;
	},
	factorialSeries : x=> {
		var i=1, j=1, sum=1;
		var limit=x*1;
		do {
			i=i+1;
			j=j*i;
			sum=sum+j;
		} while(i<limit);
		return sum;
	},
	fibonacciSeries : x=> {
		var hap, cnt, c;
		var a=1, b=1;
		var limit=x*1;
		hap=2;
		cnt=2;
		while(true) {
			c=a+b;
			hap+=c;
			cnt++;
			if(cnt<limit) {
				a=b;
				b=c;
			} else {
				return hap;
				break;
			}
		}			
	}
};

var sort={
	//selection
	selection : x=>{
		console.log('start : '+x);
		var i=0, j=0, k=0;
		for(i=0; i<x.length; i++){
			for(j=i; j<x.length; j++) {
				if(x[i]*1>x[j+1]*1) {
					k=x[i];
					x[i]=x[j+1];
					x[j+1]=k;
				}
			}
		}
		console.log('end : '+x);
		return x;
	},
	//bubble
	bubble : x=>{
		console.log('start : '+x);
		var i=0, j=0, k=0;
		for(var i=0; i<x.length; i++){
			for(var j=0; j<x.length; j++) {
				if(x[j]*1>x[j+1]*1) {
					k=x[j];
					x[j]=x[j+1];
					x[j+1]=k;
				}
			}
		}
		console.log('end : '+x);
		return x;
	}
	//insertion
	//ranking
};
var mtx={}
var math={}
var appl={}
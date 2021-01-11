function isPrimerNumber( num ){
	for( var i = 2 ; i < num ; i++ ){
		if( num%i == 0 ){ //有因子 说明不是素数
			return false;
		}
	}
	
	return true;//如果上面的条件没有满足  说明没有因子  一定是素数
}
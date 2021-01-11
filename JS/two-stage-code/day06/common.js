function isPrimerNumber(num){
    for( var i = 2; i < num; i++ ){
        if( num % i == 0 ){//不是素数
            return false;
        }
    }
    return true;  //是素数
}
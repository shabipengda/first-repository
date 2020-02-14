function p(base, exponent)
{
    if(base==0&&exponent==0){return false;}
    var re=1;
    for(var i=1;i<=exponent;i++){
        re=re*base
    }
    return re;

}
console.log(p(5,0.5));
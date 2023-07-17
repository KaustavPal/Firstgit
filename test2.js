/*var a = 2;

var c = 2;



function b(){

var x = 2;

var c = 4

console.log(c)

}



console.log(a);

console.log(this.a);

console.log(this.c)

console.log(this.x)

console.log(window.a)

console.log(window.x)

console.log(b());*/


/*function abc() {

    console.log(a);
    
    }
    
    
    
    var a = 7;
    
    abc();*/


  /*  function abc() {

        console.log(a);
        
        }
        
        
        
        abc();
        
        var a = 7;*/



      /*  function outerfunction() {

            console.log(a);
            
            var c = 10;
            
            
            
            innerfunction();
            
            
            
            function innerfunction() {
            
            console.log(b);
            
            console.log(c);
            
            }
            
            }
            
            
            
            var a = 7;
            
            var b =3
            
            
            
            outerfunction();*/



            function outerfunction() {

                console.log(a);
                
                var a = 10;
                
                
                
                innerfunction();
                
                
                
                function innerfunction() {
                
                console.log(a);
                
                console.log(window.a);
                
                console.log(this.a)
                
                }
                
                }
                
                
                
                var a = 7;
                
                var b =3
                
                
                
                outerfunction();
function addValue(){

    var a = document.getElementById("input_a").value;
    var b = document.getElementById("input_b").value;

    a=parseInt(a,10);
    b=parseInt(b,10);

    let c= (a+b);

    const Text=a+" + "+b+   " = "+c;

    document.getElementById("output").value=Text
    }

    function mulValue(){

        var a = document.getElementById("input_a").value;
        var b = document.getElementById("input_b").value;
    
        a=parseInt(a,10);
        b=parseInt(b,10);
    
        let c= (a*b);
    
        const Text=a+" x "+b+   " = "+c;
    
        document.getElementById("output").value=Text
        }


        
    function divValue(){

        var a = document.getElementById("input_a").value;
        var b = document.getElementById("input_b").value;
    
        a=parseInt(a,10);
        b=parseInt(b,10);
    
        let c= (a/b);
    
        const Text=a+" / "+b+   " = "+c;
    
        document.getElementById("output").value=Text
        }



var findFirstRepeatedWordinString=(val)=>{
    //Input: “Ravi had been saying that he had been there”
    //Output: had
    let repeated="";
    for(element of val.split(" ")){
        let checkDuplicate=val.split(" ").filter((a)=>a==element);
        //console.log(element,checkDuplicate,checkDuplicate.length)
        if(checkDuplicate.length>1){
            repeated=element;
            break;
        }
        };
    
        if(repeated!=""){
          console.log("First Repeated Word in String is :"+element)
        }
        else console.log("No repeated word found")
    
    }

    findFirstRepeatedWordinString("Ravi abc abc had been saying that he had been there");
findFirstRepeatedWordinString("hello");


var findAllRepeatedWordinString=(val)=>{
    //Input: “Ravi had been saying that he had been there”
    //Output: had
    let repeated="";
    for(element of val.split(" ")){
        let checkDuplicate=val.split(" ").filter((a)=>a==element);
        //console.log(element,checkDuplicate,checkDuplicate.length)
        if(checkDuplicate.length>1){
            console.log("Repeated Word in String is :"+element)
        }
        };
    }

    findAllRepeatedWordinString("Ravi abc abc had been saying that he had been there");
    findAllRepeatedWordinString("hello");



    var findFirstRepeatedWordinStringUsingSet=(val)=>{
        //Input: “Ravi had been saying that he had been there”
        //Output: had
        let repeated="";
        let sets=new Set()
        for(element of val.split(" ")){
            if(sets.has(element)){
                repeated=element;
                break;
            }else{
                sets.add(element)
            }
            };
        
            if(repeated!=""){
              console.log("First Repeated Word in String is :"+element)
            }
            else console.log("No repeated word found")
        
        }


        findFirstRepeatedWordinStringUsingSet("Ravi abc abc had been saying that he had been there");
        findFirstRepeatedWordinStringUsingSet("hello");
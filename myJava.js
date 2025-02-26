



function watamin()
{
    setTimeout( ()=>{

        console.log("time's up!!!");

    }, 3000 );
}

function promTest(){

        let xxx = new Promise( (response,reject)=>{

            setTimeout( ()=>console.log("timed out"), 3000 );

            if (1)
            {console.log("hi from promise  " + response.id);  }
            else
            { console.log("Failed from prominde  " + response.id); }
        });

        console.log("EOF!!!");
        return xxx;
    }



function myProm(){      
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(  response=>{  
        
        if (response.status === 'ok')
            {return response.json();

              }  
    } 
    )
    .then(  data=>console.log(data.name + " " + data.id)  )
    .catch( error=>console.error(error));
}
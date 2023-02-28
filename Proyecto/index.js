async function datoRandomUser(){
    let resultado = await fetch("https://randomuser.me/api/?seed='b86cc1707002cc20'")
                           .then(response => response.json())
                           .then(data => data);
     console.log(resultado)

     document.getElementById("nombre").innerHTML = 
     `${resultado.results[0].name.first}`;

     document.getElementById("apellido").innerHTML = 
     `${resultado.results[0].name.last}`;

     document.getElementById("edad").innerHTML = 
     `Edad : ${resultado.results[0].dob.age}`;

     document.getElementById("genero").innerHTML = 
     `Genero : ${resultado.results[0].gender}`;

}

datoRandomUser()

function mynegrita() {
    document.getElementById("parrafo").style.fontWeight = "bold";
  }

mynegrita ()
  




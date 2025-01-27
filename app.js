//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
  const amigo = document.getElementById("amigo");
  const amigoTrimmed =  amigo.value.trim()

  // Adicional: verifica que no se pueda presionar agregar si no hay texto
    if (amigoTrimmed === "") {
      alert("El texto no puede estar vacío");
      return;
    }
  // Adicional: verifica que no se puedan repetir nombres en la lista
    if (amigos.includes(amigoTrimmed)) {
      alert("No es posible repetir nombres");
      return;
    } else {
      // si cumple con los requisitos los agrega a la lista de amigos
      amigos.push(amigoTrimmed);
  
      // se limpia el input y se actualiza la lista
      amigo.value = ""
      actualizarListaAmigos();
    }
};

function actualizarListaAmigos(){
  // Limpiar la lista para que no se repitan accidentalmente.
  const lista =  document.getElementById("listaAmigos");
  lista.innerHTML = "";

  // Por cada amigo en la lista crea un elemento de lista con el nombre del amigo
  amigos.forEach(amigo => {
    const li = document.createElement("li")
    li.textContent = amigo;
    lista.appendChild(li)
  });
}

function sortearAmigo(){
  // verifica que la lista de amigos no esté vacía
  if(amigos.length == 0) return;

  // se obtiene un indece random apartir del numero de elementos en la lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // obtiene al amigo que se encuentra ocupando ese indice en la lista
  const resultado = amigos[indiceAleatorio];

  // muestra al usuario a ese amigo obtenido desde el sorteo
  const resultadoBox = document.getElementById("resultado")
  resultadoBox.innerHTML = resultado;
 
}






window.onload = () => {

  // 1.1 Basandote en el array siguiente, crea una lista ul > li 
  // dinámicamente en el html que imprima cada uno de los paises.
  
  const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
  let ulPaises = document.createElement('ul')
  let acumulador = ''
  for(let pais of countries) {
    acumulador += `<li>${pais}</li>`
  }
  ulPaises.innerHTML = acumulador
  document.body.appendChild(ulPaises)

  //1.2 Elimina el elemento que tenga la clase .fn-remove-me.

  let borrar = document.querySelector('.fn-remove-me')
  borrar.remove()

  //1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
  // en el div de html con el atributo data-function="printHere".

  const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
  let buscarDiv = document.querySelector('[data-function="printHere"]')
  let crearUl = document.createElement('ul')
  let crearLi = ''
  cars.forEach((item) => {
    crearLi += `<li>${item}</li>`
  })

  crearUl.innerHTML = crearLi
  buscarDiv.appendChild(crearUl)
  
  //1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
  // h4 para el titulo y otro elemento img para la imagen.
  
  const countries2 = [
	  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
  ]
  for(let pais of countries2) {
  let nuevoDiv = document.createElement('div')
  nuevoDiv.innerHTML += `<h4>${pais.title}</h4>
                        <img src='${pais.imgUrl}'>`
  
                        let btnBorrarDiv = document.createElement('button')
  btnBorrarDiv.innerText = 'Borrame!!'
  btnBorrarDiv.addEventListener('click', () => {
    nuevoDiv.remove()
    btnBorrarDiv.remove()
  })                      
  document.body.appendChild(nuevoDiv)
  document.body.appendChild(btnBorrarDiv)
}

  //1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
  // elemento de la lista.

  let listadoDiv = document.querySelectorAll('div')
  
  
  let btnBorrar = document.createElement('button')
  btnBorrar.innerText = 'Borrar'
  btnBorrar.addEventListener('click', () => {
    listadoDiv[listadoDiv.length - 1].remove()
  })
  document.body.appendChild(btnBorrar)


  //1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
  // elementos de las listas que elimine ese mismo elemento del html
  // Líneas de las 50 a la 57


}

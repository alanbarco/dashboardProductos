window.addEventListener("DOMContentLoaded",function(event){
  document.getElementById("selector").addEventListener('change', (event)=>{
    let nombre = document.getElementById("selector").value;
    fetch('https://dawm-b8599-default-rtdb.firebaseio.com/collection.json')
    .then(response => response.json())
    .then(data =>{
      document.getElementById("tablaComprador").innerHTML='';
      let result = data.filter(obj => obj.productoNombre == nombre)
      console.log(result[0].comprador.nombre)
      for(let element of result){
        let plantilla = `<tbody>  
          <tr>  
            <td>${element.comprador.nombre} ${element.comprador.apellido} </td>  
            <td>${new Date(element.fechaCompra).toISOString().slice(0, 10)}</td>   
            <td>${element.id}</td>  
            <td>${element.productoNombre}</td> 
            <td>${element.valor}</td>  
          </tr>  
    </tbody> `
      document.getElementById("tablaComprador").innerHTML +=plantilla;
      }
    }).catch(console.error);
  })
});
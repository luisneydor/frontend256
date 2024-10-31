
    function mostrarProductos() {
        let request = sendRequest('productos', 'GET', '');
        let table = document.getElementById('productos-table'); 
        table.innerHTML ="";
        request.onload = function () {
        let data = request.response;
        ///console.log(data)
        data.forEach(element => {
            table.innerHTML += 
    `        
            <tr>
                <td> ${element._id}</td>
                <td> ${element.referencia}</td>
                <td> ${element.nombre}</td>
                <td> ${element.proveedor}</td>
                <td> ${element.categoria}</td>
                <td> ${element.medida}</td>
                
            
            <td> 
            <button type = "button" class = "btn btn-primary" onclick = 'window.location ="/formProductos.html ? id = ${element._id}"'> Editar</button>
            <button type = "button" class = "btn btn-danger" onclick = 'deleteProducto("${element._id}")'> Eliminar</button>

            </td>
            
            </tr> 
        
    `
                
        } )
        }
     }
     
     function deleteProducto(id){
        let request = sendRequest( 'productos/' +id, 'DELETE', '');
        request.onload = function() {
        mostrarProductos();
        }
     }
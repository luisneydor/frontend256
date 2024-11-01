
    function mostrarProductos() {
        let request = sendRequest('productos', 'GET', '');
        let table = document.getElementById('productos-table'); 
        table.innerHTML ="";
        request.onload = function () {
        let data = request.response;
        console.log(data)
        data.forEach(element => {
            table.innerHTML += 
    `    "holaaa"    
            <tr>
                <td> ${element._id}</td>
                <td> ${element.referencia}</td>
                <td> ${element.nombre}</td>
                <td> ${element.proveedor}</td>
                <td> ${element.categoria}</td>
                <td> ${element.medida}</td>
                
            
            <td> 
            <button type = "button" class = "btn btn-primary" onclick = 'window.location ="/formProductos.html?id=${element._id}"'> Editar</button>
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

     ///////////////

     function guardarProductos(){
        let ref = document.getElementById('referencia-r').value
        let nom = document.getElementById('nombre-n').value
        let pro = document.getElementById('proveedor-p').value
        let cat = document.getElementById('categoria-c').value
        let med = document.getElementById('medida-m').value
       

        let data = {'referencia':ref, 'nombre':nom, 'proveedor':pro,  'categoria':cat, 'medida':med,}
        let request = sendRequest('productos/', 'POST', data)
        request.onload = function(){
        window.location = 'productos.html';
       }
        request.onerror = function() {
           alert ('Error al guardar los datos')
        }
     }

    
     function cargarDatos(id) {
        let request = sendRequest('productos/'+id, 'GET', '');
        let ref = document.getElementById('referencia-r')
        let nom = document.getElementById('nombre-n')
        let pro = document.getElementById('proveedor-p')
        let cat = document.getElementById('categoria-c')
        let med = document.getElementById('medida-m')


        request.onload = function() {
            let data = request.response;
            ref.value = data.referencia
            nom.value = data.nombre
            pro.value = data.proveedor
            cat.value = data.categoria
            med.value = data.medida
            console.log(data)

        }
        request.onerror = function(){
            alert("Error al guarda datos")
        }
    }
function modificarProductos(id){
       
        let ref = document.getElementById('referencia-r').value
        let nom = document.getElementById('nombre-n').value
        let pro = document.getElementById('proveedor-p').value
        let cat = document.getElementById('categoria-c').value
        let med = document.getElementById('medida-m').value


        let data = {'referencia':ref, 'nombre':nom, 'proveedor':pro,  'categoria':cat, 'medida':med,}
        let request = sendRequest('productos/'+id, 'PUT', data)
        console.log(request);
        request.onload = function(){
            window.location = 'productos.html';
       }
        request.onerror = function() {
           alert ('Error al guardar los datos')
        }
     }
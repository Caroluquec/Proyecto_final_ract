import React from 'react'

function Rowpro() {
    return(
        <>
            <div class="row">
                    <div class="col-6">
                                <form>
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <select id="productos-select" class="form-select form-control">
                                        <option selected>Seleccionar un producto</option>
                                        <option value="Hamburguesa">Hambruguesa</option>
                                        <option value="Picada">Picada</option>
                                        <option value="Pasta">Pasta</option>
                                        <option value="Perro">Perro</option>
                                        <option value="Sanchipapa">Sanchipapa</option>
                                        <option value="Chuzo">Chuzo</option>
                                        <option value="Pizza">Pizza</option>
                                        <option value="Pollo">Pollo</option>
                                        <option value="Tacos">Tacos</option>
                                        <option value="Burrito">Burrito</option>
                                        </select>
                                    <label class="form-label" for="form6Example3">Producto</label>
                                </div>
                                
                                
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <input type="number" id="precio-pro" class="form-control" />
                                    <label class="form-label" for="form6Example5">Precio</label>
                                </div>

                                
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <input type="number" id="stock-pro" class="form-control" />
                                    <label class="form-label" for="form6Example6">Stock</label>
                                </div>
                                
                                
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <textarea class="form-control" id="des-pro" rows="4"></textarea>
                                    <label class="form-label">Descripcion</label>
                                </div>
                            
                                
                                
                                <button data-mdb-ripple-init type="button" class="btn-create btn btn-primary btn-block mb-4">Crear Producto</button>
                                <button data-mdb-ripple-init type="button" class="d-none btn-update btn btn-success btn-block mb-4">Actualizar Producto</button>
                            </form>

                    </div>

                    
                    <div class="col-5">
                        <img id="imagen-pro" src="https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg" class="img-fluid" alt=""></img>
                    </div>
            </div>
            
        </>
    )
}

export default Rowpro
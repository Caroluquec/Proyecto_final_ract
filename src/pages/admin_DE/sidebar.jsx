import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

    return(
        <>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">Inventario</div>
                    </Link>

                    <hr class="sidebar-divider my-0"></hr>

                    <li class="nav-item active">
                        <Link class="nav-link" TO="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>

                        <hr class="sidebar-divider"></hr>

                        <div class="sidebar-heading">
                            Modulos
                        </div>

                        <li class="nav-item">
                            <Link class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i class="fas fa-fw fa-cog"></i>
                                <span>Productos</span>
                            </Link>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <h6 class="collapse-header">Acciones:</h6>
                                    <Link class="collapse-item" to="listado-pro.html">Ver Productos</Link>
                                    <Link class="collapse-item" to="crear-pro.html">Crear Productos</Link>
                                </div>
                            </div>
                        </li>

                        <hr class="sidebar-divider"></hr>

                        <div class="text-center d-none d-md-inline">
                            <button class="rounded-circle border-0" id="sidebarToggle"></button>
                        </div>

                     </li>
            </ul>
        </>
    )
      
}

export default Sidebar

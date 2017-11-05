import {Content, Home} from './app/AppContent'
import CategoriaList from './catalogo/categorias/List'
import CategoriaForm from './catalogo/categorias/Form'
import ProductoList from './catalogo/producto/List'
import ProductoForm from './catalogo/producto/Form'
import ClienteList from './catalogo/cliente/List'
import ClienteForm from './catalogo/cliente/Form'

import MesaList from './catalogo/mesa/List'
import MesaForm from './catalogo/mesa/Form'
import ReservaList from './catalogo/reserva/List'
import ReservaForm from './catalogo/reserva/Form'

import PedidoList from './catalogo/pedido/List'
import PedidoForm from './catalogo/pedido/Form'

import Login from './Login'



const routese = [
    {
        path: '/login',
        title: 'Login',
        icon: 'home',
        component: Login
    }
]
const routes = [
    {
        path: '/home',
        title: 'Home',
        icon: 'fa fa-dashboard fa-fw',
        exact: true,
        component: Home
    },
    {
        path: '/catalogo',
        title: 'Catalogo',
        icon: 'fa fa-bar-chart-o fa-fw',
        component: Content,
        routes: [
            {
                path: '/catalogo/categorias/list',
                exact: true,
                title: 'Categorias',
                icon: 'fa fa-list fa-fw',
                component: CategoriaList
            },
            {
                path: '/catalogo/categorias/new',
                exact: true,
                title: 'Categoria New',
                icon: 'send',
                component: CategoriaForm,
                novisible: true
            },
            {
                path: '/catalogo/categorias/edit/:id',
                exact: true,
                title: 'Categoria Edit',
                icon: 'send',
                component: CategoriaForm,
                novisible: true
            },{
                path: '/catalogo/productos/list',
                exact: true,
                title: 'Productos',
                icon: 'fa fa-list fa-fw',
                component: ProductoList
            },
            {
                path: '/catalogo/productos/new',
                exact: true,
                title: 'Producto New',
                icon: 'send',
                component: ProductoForm,
                novisible: true
            },
            {
                path: '/catalogo/productos/edit/:id',
                exact: true,
                title: 'Producto Edit',
                icon: 'send',
                component: ProductoForm,
                novisible: true
            },
            {
                path: '/catalogo/clientes/list',
                exact: true,
                title: 'clientes',
                icon: 'fa fa-list fa-fw',
                component: ClienteList
            },
            {
                path: '/catalogo/clientes/new',
                exact: true,
                title: 'cliente New',
                icon: 'send',
                component: ClienteForm,
                novisible: true
            },
            {
                path: '/catalogo/clientes/edit/:id',
                exact: true,
                title: 'cliente Edit',
                icon: 'send',
                component: ClienteForm,
                novisible: true
            },
            {

                path: '/catalogo/mesa/list',
                exact: true,
                title: 'mesa',
                icon: 'fa fa-list fa-fw',
                component: MesaList
            },
            {
                path: '/catalogo/mesa/new',
                exact: true,
                title: 'mesa New',
                icon: 'send',
                component: MesaForm,
                novisible: true
            },
            {
                path: '/catalogo/mesa/edit/:id',
                exact: true,
                title: 'mesa Edit',
                icon: 'send',
                component: MesaForm,
                novisible: true
            },
            {
                path: '/catalogo/reservas/list',
                exact: true,
                title: 'reserva',
                icon: 'fa fa-list fa-fw',
                component: ReservaList
            },
            {
                path: '/catalogo/reservas/new',
                exact: true,
                title: 'reserva New',
                icon: 'send',
                component: ReservaForm,
                novisible: true
            },
            {
                path: '/catalogo/reservas/edit/:id',
                exact: true,
                title: 'reserva Edit',
                icon: 'send',
                component: ReservaForm,
            },
            {
                path: '/catalogo/pedido/list',
                exact: true,
                title: 'pedido',
                icon: 'fa fa-list fa-fw',
                component: PedidoList
            },
            {
                path: '/catalogo/pedido/new',
                exact: true,
                title: 'pedido New',
                icon: 'send',
                component: PedidoForm,
                novisible: true
            },
            {
                path: '/catalogo/pedido/edit/:id',
                exact: true,
                title: 'pedido Edit',
                icon: 'send',
                component: PedidoForm,
                novisible: true
            },
        ]
    }
]

export {routes, routese}
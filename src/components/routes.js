import {Content, Home} from './app/AppContent'
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
import MenuList from './catalogo/menu/List'
import MenuForm from './catalogo/menu/Form'

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
                path: '/catalogo/productos/list',
                exact: true,
                title: 'productos',
                icon: 'fa fa-tree',
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
                icon: 'fa fa-tree',
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
                icon: 'fa fa-tree',
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
                icon: 'fa fa-tree',
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
                novisible: true
            },
            {
                path: '/catalogo/pedido/list',
                exact: true,
                title: 'pedido',
                icon: 'fa fa-tree',
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
            {
                path: '/catalogo/menu/list',
                exact: true,
                title: 'menu',
                icon: 'fa fa-tree',
                component: MenuList
            },
            {
                path: '/catalogo/menu/new',
                exact: true,
                title: 'menu New',
                icon: 'send',
                component: MenuForm,
                novisible: true
            },
            {
                path: '/catalogo/menu/edit/:id',
                exact: true,
                title: 'menu Edit',
                icon: 'send',
                component: MenuForm,
                novisible: true
            },
        ]
    }
]

export {routes, routese}
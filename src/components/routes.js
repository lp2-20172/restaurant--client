import {Content, Home} from './app/AppContent'
import CategoriaList from './catalogo/categorias/List'
import CategoriaForm from './catalogo/categorias/Form'
import ProductoList from './catalogo/producto/List'
import ProductoForm from './catalogo/producto/Form'
import ClienteList from './catalogo/cliente/List'
import ClienteForm from './catalogo/cliente/Form'
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
        ]
    }
]

export {routes, routese}
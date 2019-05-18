
import HomeLayout from '../components/Layout/HomeLayout';
import ProductLayout from '../components/Layout/ProductLayout';

import Home from '../components/Home';
import Product from '../components/Product'

const routes = [
    {
        path:"/",
        exact: true,
        component:Home,
        authNeed: false,
        layout: HomeLayout
    },
    {
        path:"/product",
        exact: true,
        component:Product,
        authNeed: false,
        layout: ProductLayout
    }
]
export default routes

import Home from '../components/Home';
import HomeLayout from '../components/Layout/HomeLayout';

const routes = [
    {
        path:"/",
        exact: true,
        component:Home,
        authNeed: false,
        layout: "HomeLayout"
    }
]
export default routes
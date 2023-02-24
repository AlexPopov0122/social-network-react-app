import {useLocation, useNavigate, useParams} from "react-router-dom";

const WithRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default WithRouter;

// Альтернативный вариант
// export const withRouter = (Component) =>{
//     let RouterComponent = (props) => {
//         const match = useMatch('/profile/:userId/');
//         return <Component {...props} match={match}/>;
//     }
//     return RouterComponent;
// }
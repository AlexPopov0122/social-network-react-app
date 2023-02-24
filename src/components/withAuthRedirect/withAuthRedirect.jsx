import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    const mapStateToProps = (state) => ({
        isUserAuth: state.authUserData.isUserAuth
    })
    const ComponentContainer = (props) => {
        if (!props.isUserAuth) return <Navigate to={"/login"}/>

        return <Component {...props}/>
    }

    const ConnectedComponentContainer = connect(mapStateToProps)(ComponentContainer);

    return ConnectedComponentContainer;
}
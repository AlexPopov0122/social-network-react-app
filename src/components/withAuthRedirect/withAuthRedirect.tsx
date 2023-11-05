import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import React, {ComponentType, FC} from "react";
import {TState} from "../../Redux/Reducers/redux-store";



function withAuthRedirect<WCP> (Component: ComponentType<WCP>) {
    type Props = {
        isUserAuth: boolean
    }
    const mapStateToProps = (state: TState) => ({
        isUserAuth: state.authUserData.isUserAuth
    })
    const ComponentContainer: FC<Props> = (props) => {

        let {isUserAuth, ...restProps} = props

        if (!isUserAuth) return <Navigate to={"/login"}/>

        return <Component {...restProps as React.JSX.IntrinsicAttributes & WCP}/>
    }

    return connect(mapStateToProps)(ComponentContainer);
}

export default withAuthRedirect
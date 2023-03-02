// import {Component} from "react";
// import styles from "./Status.module.css";
//
// class StatusWithLocalState extends Component {
//     state = {
//         editMode: false,
//         statusText: this.props.userStatus
//     }
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateUserStatus(this.state.statusText)
//     }
//
//     changeStatus(value) {
//         this.setState({
//             statusText: value
//         })
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.userStatus !== this.props.userStatus) {
//             this.setState({
//                 statusText: this.props.userStatus
//             })
//         }
//     }
//
//     render() {
//         return (
//             <div className={styles.status}>{this.props.userData}
//                 {
//                     this.state.editMode
//                         ? <input onBlur={this.deactivateEditMode} autoFocus={true} type={"text"}
//                                  value={this.state.statusText}
//                                  onChange={(e) => this.changeStatus(e.target.value)}/>
//                         : <div
//                             onDoubleClick={this.activateEditMode}>{this.state.statusText || "No StatusWithLocalState"}</div>
//                 }
//             </div>
//         )
//     }
// }
//
// export default StatusWithLocalState;
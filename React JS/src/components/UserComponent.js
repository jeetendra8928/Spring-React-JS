import React from 'react';
import UserService from '../Services/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.addUser=this.addUser.bind(this);
       this.UpdateUser=this.UpdateUser.bind(this);
       this.DeleteUser=this.DeleteUser.bind(this);
    }
    
  
   
    DeleteUser(id){
        UserService.DeleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    UpdateUser(id){
this.props.history.push(`/Update-User/${id}`);
    }
    
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    addUser()
        {
            this.props.history.push('/add-User');
    }

    

    render (){
        return (
            <div>
                <h1 className = "text-center"> Gmail Users List</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add user</button>
                </div>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Id</td>
                            <td> Action</td>
                            <td>Delete</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.firstName}</td>   
                                     <td> {user.lastName}</td>   
                                     <td> {user.email}</td>   
                                    <td> <button onClick={ () => this.UpdateUser(user.id)} className="btn btn-info">Update </button></td>
                                    <td> <button onClick={ () => this.DeleteUser(user.id)} className="btn btn-info">Delete </button></td>           
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent
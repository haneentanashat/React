import React from "react";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            names: '',
        }

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(DataList => {
                this.setState({ Data: DataList });
            });
    }
    handlechange = (e) => {
        this.setState({ names: e.target.value })
    }

    render() {
        return (

            <>
                
                <input type="text" id="search" placeholder='Search...' onChange={this.handlechange}></input>
             
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Data.filter((name) => name.name.includes(this.state.names)).map((user) => (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Data;
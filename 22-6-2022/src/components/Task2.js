import { getValue } from "@testing-library/user-event/dist/utils";

function Task2(){
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      
    return (
      <div>
       
       <table class="table">
                
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                    </tr>
                
                <tbody>
                    {
                        Fruits.map((value) =>
                            <tr>
                                <th scope="row">{value.id}</th>
                                <td>{value.name}</td>
                                <td>{value.color}</td>
                            </tr>
                        )}
                </tbody>
            </table>
            <hr/>
      </div>
    )
  }
  export default Task2;

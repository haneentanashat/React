function Map(){
    const people = [
        {
          name: 'James',
          age: 31,
        },
        {
          name: 'John',
          age: 45,
        },
        {
          name: 'Paul',
          age: 65,
        },
        {
          name: 'Ringo',
          age: 49,
        },
        {
          name: 'George',
          age: 34,
        }
      ];
  
    return (
      <div>
        { people.map((vlaue)=>
        <h4>Name: {vlaue.name}</h4>
       
        )
      }
      <hr/>
      </div>
    )
  }
  export default Map;

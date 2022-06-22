
const people = [
    {
      name: 'Haneen',
      age: 23,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    
   
  ];
function Filter() {
    
    return (
        <div>
        {people.filter(person => person.age < 60).map(filteredPerson => (
          <h4>
            {filteredPerson.name}
          </h4>
        ))}
        <hr/>
      </div>
  );
}

  export default Filter;
function Sort(){
    const points = [40, 100, 1, 5, 25, 10];
    const sortedArr=points.sort();
    return (
      <div>
        { sortedArr.map((value)=>
       <ul> {value}</ul>
       
        )
      }
      <hr/>
      </div>
    )
  }
  export default Sort;

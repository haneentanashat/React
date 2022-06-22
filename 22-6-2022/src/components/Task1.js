function Task1() {
    const symbol = ['Z', 'A', 'Q', 'B', 'C', 'Y', 'S', 'W'];
    const sortedArr = symbol.sort();
    return (
        <div>
        
            <h4> Array After sorting:</h4>
            <ul>

                {sortedArr.map((value) =>
                    < li >{value}</li>
                )}
            </ul>
            <hr />

        </div>
    )
}
export default Task1;

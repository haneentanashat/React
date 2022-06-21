import './Body.css';
function Img() {
    return (
        <>
        <ul className="list-group">
        <li class="list-group-item">
            <img src="https://picsum.photos/35" alt="img" />
            <input type="checkbox" className="check"></input>
            <label class="form-check-label" className="check" >HTML</label></li>
            <li class="list-group-item">
            <img src="https://picsum.photos/36" alt="img" />
            <input type="checkbox" className="check"></input>
            <label class="form-check-label" className="check" >PHP</label></li>
            <li class="list-group-item">
            <img src="https://picsum.photos/37" alt="img" />
            <input type="checkbox" className="check"></input>
            <label class="form-check-label" className="check" >CSS</label></li>
            </ul>
        </>
    )
}

export default Img;
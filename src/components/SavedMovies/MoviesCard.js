import film from "../../images/film.png";
function MoviesCard(props){
    return(
        <li className="content__movies-item">
            <div className="content__movies-item-header">
                <div className="content__movies-item-content">
                    <h3 className="content__movies-item-title">33 слова о дизайне</h3>
                    <span className="content__movies-item-duration">1ч 47м</span>
                </div>
                <button className="content__movies-item-del"></button>
            </div>
            <img src={film}/>
        </li>
    );
}
export default MoviesCard;
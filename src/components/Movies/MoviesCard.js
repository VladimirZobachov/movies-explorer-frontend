import film from "../../images/film.png";
function MoviesCard(){
    return(
        <li className="movies__card">
            <div className="movies__card-header">
                <h3 className="movies__card-title">33 слова о дизайне</h3>
                <button type="button" className="movies__card-save"></button>
                <span className="movies__card-duration">1ч 47м</span>
            </div>
            <img src={film} alt="карточка фильма"/>
        </li>
    );
}
export default MoviesCard;
function MoviesCard(props) {
  return (
    <li className="movies__card">
      <div className="movies__card-header">
        <h3 className="movies__card-title">{props.card.nameRU}</h3>
        <button type="button" className="movies__card-save" />
        <span className="movies__card-duration">{props.card.duration}</span>
      </div>
      <img src={`https://api.nomoreparties.co${props.card.image.formats.thumbnail.url}`} alt="карточка фильма" />
    </li>
  );
}
export default MoviesCard;

import React from 'react';
import {options} from "../../../utils/constants";

function MoviesCard(props) {
    const handleCardSave = ()=>{
      props.handleCardSave(props.card);
    }
    const handleCardDel = ()=>{
        props.handleCardDel(props.card);
    }

    return (
    <li className="movies__card">
      <div className="movies__card-header">
        <h3 className="movies__card-title">{props.card.nameRU}</h3>
        <button type="button" className={
            `movies__card-save ${props.isSaved ? 'movies__card-save-action' : ''}`
        } onClick={props.isSaved ? handleCardDel : handleCardSave}/>
        <span className="movies__card-duration">{props.card.duration}</span>
      </div>
      <img src={options.baseUrl + props.card.image.formats.thumbnail.url} alt={props.card.nameRU} />
    </li>
    );
}
export default MoviesCard;

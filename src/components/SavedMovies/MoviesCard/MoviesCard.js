import React from 'react';

function MoviesCard(props) {
    const handleCardDel = ()=>{
        props.handleCardDel(props.card);
    }
    return (
        <li className="movies__card">
            <div className="movies__card-header">
                <h3 className="movies__card-title">{props.card.nameRU}</h3>
                <button type="button" className="movies__card-save movies__card-save-action"
                 onClick={handleCardDel}/>
                <span className="movies__card-duration">{props.card.duration}</span>
            </div>
            <img src={props.card.thumbnail} alt={props.card.nameRU} />
        </li>
    );
}
export default MoviesCard;

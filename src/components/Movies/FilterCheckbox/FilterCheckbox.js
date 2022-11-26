import React from 'react';

function FilterCheckbox({handleShortMovie, shortMovies}){

    return (
        <div className="movies__search-form-switch">
            <label className="movies__search-switch">
                <input type="checkbox" name="shortMovie" id="shortMovie" onChange={handleShortMovie} checked={shortMovies ? true : false}/>
                <span className="movies__search-switch-slider movies__search-switch-slider_round" />
            </label>
            <span className="movies__search-switch-text">Короткометражки</span>
        </div>
    )
}

export default FilterCheckbox;

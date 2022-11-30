import React from 'react';

function FilterCheckbox(){

    return (
        <div className="movies__search-form-switch">
            <label className="movies__search-switch">
                <input type="checkbox" name="shortMovie" id="shortMovie" />
                <span className="movies__search-switch-slider movies__search-switch-slider_round" />
            </label>
            <span className="movies__search-switch-text">Короткометражки</span>
        </div>
    )
}

export default FilterCheckbox;

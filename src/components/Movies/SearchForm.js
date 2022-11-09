function SearchForm(){
    return (
        <form className="movies__search-form">
            <div className="movies__search-form-line">
                <input type="text" placeholder="Фильм" className="movies__search-form-input"/>
                    <button type="button" className="movies__search-button" value="search"></button>
            </div>
            <div className="movies__search-form-switch">
                <label className="movies__search-switch">
                    <input type="checkbox" />
                        <span className="movies__search-switch-slider movies__search-switch-slider_round"></span>
                </label>
                <span className="movies__search-switch-text">Короткометражки</span>
            </div>
        </form>
    );
}
export default SearchForm;
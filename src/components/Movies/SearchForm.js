function SearchForm(){
    return (
        <section className="header__search-section">
            <div className="header__searching-block">
                <input type="text" placeholder="Фильмы" className="header__field-search-films"/>
                    <input type="submit" className="header__field-search-button" value=""/>
                        <label className="header__field-search-switch">
                            <input type="checkbox"/>
                                <span className="header__field-search-slider header__field-search-slider_round"></span>
                        </label>
                        <span className="header__field-search-switch-text">Короткометражки</span>
            </div>
        </section>
    );
}
export default SearchForm;
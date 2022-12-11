import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({onSubmitForm, movie, handleMovie, shortMovies, handleShortMovie}) {
    return (
        <form className="movies__search-form" onSubmit={onSubmitForm}>
            <div className="movies__search-form-line">
                <input type="text" name="movie" id="movie" placeholder="Фильм" value={movie ? movie : ''} className="movies__search-form-input" onChange={handleMovie} required />
                <button type="submit" className="movies__search-button" value="search" />
            </div>
            <FilterCheckbox
                handleShortMovie={handleShortMovie}
                shortMovies={shortMovies}
            />
        </form>
    );
}
export default SearchForm;

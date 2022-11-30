import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({handleMovie, onSubmitForm, movie}) {
    return (
    <form className="movies__search-form" onSubmit={onSubmitForm}>
      <div className="movies__search-form-line">
        <input type="text" name="movie" id="movie" placeholder="Фильм" className="movies__search-form-input" value={movie ? movie : ''}
               onChange={handleMovie} required />
        <button type="submit" className="movies__search-button" value="search" />
      </div>
      <FilterCheckbox/>
    </form>
    );
}
export default SearchForm;

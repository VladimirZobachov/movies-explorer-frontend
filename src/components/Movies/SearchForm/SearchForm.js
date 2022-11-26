import React, {useState} from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({onSearch, handleMovie, handleShortMovies}) {
    const [searchData, setSearchData] = useState(
        {
            movie: '',
            shortMovie: '',
        },
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchData({
            ...searchData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchData.movie) {
            return;
        }
        onSearch(searchData.movie, searchData.shortMovie);
        console.log('submit');
    };

    return (
    <form className="movies__search-form" onSubmit={handleSubmit}>
      <div className="movies__search-form-line">
        <input type="text" name="movie" id="movie" placeholder="Фильм" value={handleMovie ? handleMovie : searchData.movie} className="movies__search-form-input" onChange={handleChange} required />
        <button type="submit" className="movies__search-button" value="search" />
      </div>
      <FilterCheckbox/>
    </form>
    );
}
export default SearchForm;

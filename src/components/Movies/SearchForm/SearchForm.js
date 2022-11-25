import React, {useState} from 'react';

function SearchForm({onSearch}) {
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
        <input type="text" name="movie" id="movie" placeholder="Фильм" className="movies__search-form-input" onChange={handleChange} required />
        <button type="submit" className="movies__search-button" value="search" />
      </div>
      <div className="movies__search-form-switch">
        <label className="movies__search-switch">
          <input type="checkbox" name="shortMovie" id="shortMovie" onChange={handleChange}/>
          <span className="movies__search-switch-slider movies__search-switch-slider_round" />
        </label>
        <span className="movies__search-switch-text">Короткометражки</span>
      </div>
    </form>
    );
}
export default SearchForm;

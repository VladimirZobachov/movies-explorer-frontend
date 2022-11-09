import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props){
    return (
        <section className="movies">
            <ul className="movies__card-list">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </ul>
            <button type="button" className="movies__card-list-more">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
import MoviesCard from "./MoviesCard";

function MoviesCardList(){
    return (
        <section className="movies">
            <ul className="movies__card-list">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </ul>
        </section>
    );
}

export default MoviesCardList;
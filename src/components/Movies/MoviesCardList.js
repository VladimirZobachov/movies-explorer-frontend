import MoviesCard from "./MoviesCard";

function MoviesCardList(props){
    return (
        <main className="content">
            <section className="content__movies">
                <ul className="content__movies-list">
                    <MoviesCard/><MoviesCard/><MoviesCard/><MoviesCard/><MoviesCard/><MoviesCard/>
                </ul>
                <input type="button" value="Ещё" className="content__button-more-movies"/>
            </section>
        </main>
    );
}

export default MoviesCardList;
import MoviesCard from "./MoviesCard";

function MoviesCardList(){
    return (
        <main className="content">
            <section className="content__movies">
                <ul className="content__movies-list">
                    <MoviesCard/><MoviesCard/><MoviesCard/>
                </ul>
            </section>
        </main>
    );
}

export default MoviesCardList;
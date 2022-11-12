function Profile(){
    return(
        <main className="content">
            <ul className="content__profile-information-list">
                <li className="content__profile-information-item"><h3
                    className="content__profile-information-title">Привет, Владимир!</h3></li>
                <li className="content__profile-information-item content__profile-information-item_underline"><span
                    className="content__profile-information-title-name">Имя</span><span
                    className="content__profile-information-name">Владимир</span></li>
                <li className="content__profile-information-item"><span
                    className="content__profile-information-title-email">Email</span><span
                    className="content__profile-information-email">zobachov@gmail.com</span></li>
                <li className="content__profile-information-item"><span
                    className="content__profile-information-edit">Редактировать</span></li>
                <li className="content__profile-information-item"><span className="content__profile-information-exit">Выйти из аккаунта</span>
                </li>
            </ul>
        </main>
    );
}
export default Profile;
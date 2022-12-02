import status_ok from '../../images/union_ok.svg';
import status_err from '../../images/union_err.svg';

function InfoTooltip({onClose, status: {isOpen, statusOk, textStatus}}) {

    const handleClose = onClose;

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__content-info">
                <button aria-label="Close" type="button"
                        className="popup__close-button" onClick={handleClose}/>
                <img src={statusOk ? status_ok : status_err} alt="статус"/>
                <h2 className="popup__infotooltip-title">{textStatus}</h2>
            </div>
        </div>
    );

}

export default InfoTooltip;

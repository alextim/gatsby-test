import FormStatusEnum from './FormStatusEnum';


const getTitle = (status, title) => {
    switch(status) {
        case FormStatusEnum.Error:
            return 'Ошибка';

        case FormStatusEnum.Success:
            return 'Выполнено';

        case FormStatusEnum.Sending:
        case FormStatusEnum.Cancelled:
            return 'Отправка данных';
            
        default:
            return title;
    }
};

const MODAL_CLOSE_DELAY = 5000;

export { getTitle, MODAL_CLOSE_DELAY };
import FormStatusEnum from './FormStatusEnum';

export const getTitle = (status: number, title: string): string => {
  switch (status) {
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

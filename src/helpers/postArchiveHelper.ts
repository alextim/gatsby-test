import Utils from './../lib/utils';
/**
 * excpect s as YYYYMM
 * i.e.         202001
 * year - 2020
 * month -Jan
 */
const postArchiveHelper = {
  getTitle: (s: string): string => {
    const y = s.substr(0, 4);
    const m = s.substr(4);
    const d = new Date(`${y}-${m}-01`);
    const month = Utils.upperFirst(d.toLocaleString('ru-RU', { month: 'long' }));
    return `${month} ${y}`;
  },

  getPath: (s: string): string => `${s.substr(0, 4)}/${s.substr(5)}`,
};

export default postArchiveHelper;

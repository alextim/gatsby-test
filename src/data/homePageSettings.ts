const homePageSettings = {
  CTA: {
    title: 'Адреналин - путешествия и восхождения',
    subTitle: null,
    text:
      '<p>Клуб Адреналин – путешествия на профессиональном уровне! Поможем подготовиться к походу или восхождению, выбрать снаряжение, сделаем все, чтобы вам было интересно и безопасно пройти красивые маршруты. Любим горы, и вы полюбите их 😉</p>' + 
      '<p>Будьте готовы к приключениям и горным красотам - ведь все маршруты пройдены и проверены, а опытные гиды всегда помогут в любой ситуации.</p>' + 
      '<p>У нас обширная география путешествий. С нами вы подберете себе поездку на любой вкус и сложность, от начинающего до продвинутого.<br/>Не уверен, но хочешь попробовать - приходи, и мы вместе свернем горы!</p>',
    actions: {
      primary: { title: 'Узнать больше', url: '/trips' },
      secondary: null,
    },
  },

  stickyNews: {
    trip: 'news',
    title: 'Фрирайд в Куршевеле',
    subTitle:
      'Лыжная поездка для всех на лучший горнолыжный курорт - от начинающих до опытных фрирайдеров. Начинайте готовится к зиме летом!',
    text:
      'Фрирайд на лучшем горнолыжном курорте в мире, катание по подготовленным трассам для начинающих и опытных лыжников и сноубордистов.',
  },

  features: {
    title: 'Почему выбирают нас?',
    subTitle: 'У нас хорошо продуманные программы, лучшие направления, индивидуальный подход к путешественнику!',
    text: null,

    items: [
      {
        title: 'С нами безопасно',
        text:
          'Безопасность для нас - превыше всего! Все наши инструктора имеют большой технический опыт, позволяющий безопасно проводить поход/восхождение, в который Вы идете.',
        url: '/trips',
        icon: 'shield-alt',
      },
      {
        title: 'С нами весело',
        text:
          'Наши гиды увлечены горами и знают всё про свой маршрут, поэтому раскроют все секреты той местности, в которой проходит маршрут. Ведь в походе помимо прохожодения запланированных километров надо ещё не забыть расслабиться и отдохнуть, верно?',
        url: '/trips',
        icon: ['far', 'smile-wink'],
      },
      {
        title: 'Цена/Качество',
        text:
          'Мы постарались сделать вашу поездку незабываемой, не забывая при этом и про её стоимость. Тщательно проверенная лучшая цена на уникальные поездки - это результат многолетнего вождения походов, чтобы Вы не потратили лишних денег.',
        url: '/trips',
        icon: 'euro-sign',
      },
    ],
  },

  latestNews: {
    title: 'Последние новости',
    actions: {
      primary: { title: 'Посмотреть больше', url: '/news' },
    },
  },
};

export default homePageSettings;

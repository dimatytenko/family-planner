import React from 'react';

import {PrivacyPolicy} from '../../components/Static/PrivacyPolicy';
import {useLanguage} from '../../hooks/language';

const data = {
  en: {
    title: 'Privacy Policy',
    description: [
      'Last Updated: 25.02.2024',
      'Thank you for visiting our website family-planner-x.netlify.app. We understand the importance of your privacy and are committed to collecting, using, and protecting your personal data with utmost care and responsibility.',
    ],
    list: [
      {
        title: 'Collection and Use of Information',
        list: [
          'We may collect personal data such as name, email, phone number, etc., if you choose to voluntarily provide this information during registration or interaction with our website. We use this data to improve the functionality of the site.',
        ],
      },
      {
        title: 'Data Storage',
        list: ['We store your data on our server and may use third-party services for data storage.'],
      },
      {
        title: 'Disclosure of Personal Information',
        list: ['We do not disclose personal information of our users to third parties.'],
      },
      {
        title: 'Cookies and Other Technologies',
        list: [
          'Our website may use cookies and other technologies to collect information to enhance your user experience. You can opt out of using cookies by adjusting your browser settings.',
        ],
      },
      {
        title: 'Changes to the Privacy Policy',
        list: ['We may update this policy from time to time.'],
      },
    ],
  },
  ua: {
    title: 'Політика конфіденційності',
    description: [
      'Дата останнього оновлення: 25.02.2024',
      'Дякуємо за відвідування нашого веб-сайту family-planner-x.netlify.app. Ми розуміємо важливість вашої конфіденційності та зобов`язуємося збирати, використовувати і захищати ваші особисті дані з величезною турботою та відповідальністю.',
    ],
    list: [
      {
        title: 'Збір та використання інформації',
        list: [
          'Ми можемо збирати особисті дані, такі як ім`я, електронна пошта, номер телефону тощо, якщо ви виберете добровільно надати цю інформацію при реєстрації чи взаємодії з нашим веб-сайтом. Ми використовуємо ці дані для покращення роботи сайту.',
        ],
      },
      {
        title: 'Зберігання даних',
        list: [
          'Ми зберігаємо ваші дані на нашому сервері, а також використовуємо сторонні сервіси для зберігання даних.',
        ],
      },
      {
        title: 'Розкриття особистої інформації',
        list: ['Ми не розкриваємо особисту інформацію наших користувачів третім особам.'],
      },
      {
        title: 'Куки та інші технології',
        list: [
          'Наш веб-сайт може використовувати куки та інші технології для збору інформації, щоб покращити ваш досвід використання. Ви можете відмовитися від використання кук, налаштувавши налаштування вашого браузера.',
        ],
      },
      {
        title: 'Зміни в політиці конфіденційності',
        list: ['Ми можемо оновлювати цю політику час від часу.'],
      },
    ],
  },
};

const PrivacyPolicyContainer = () => {
  const {language} = useLanguage();

  return <PrivacyPolicy data={data[language ?? 'en']} />;
};

export default PrivacyPolicyContainer;

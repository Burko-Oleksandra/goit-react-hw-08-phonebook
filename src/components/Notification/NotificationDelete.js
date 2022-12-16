import Notiflix from 'notiflix';

export default function NotificationRemoved(name) {
  return Notiflix.Report.info(`${name}`, 'removed from the phonebook', 'ok', {
    width: '200px',
    height: '200px',
    backgroundColor: '#ba8afa',
    borderRadius: '16px',
    titleFontSize: '18px',
    messageFontSize: '16px',
    buttonFontSize: '12px',
    cssAnimationStyle: 'zoom',

    info: {
      svgColor: '#57209F',
      titleColor: 'black',
      messageColor: 'black',
      buttonBackground: '#57209F',
      buttonColor: 'black',
      backOverlayColor: 'rgba(220, 220, 220, 0.6)',
    },
  });
}

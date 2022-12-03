import Notiflix from 'notiflix';

export default function Notification(name) {
  return Notiflix.Report.info(
    `${name} Is already in contacts`,
    'Check the correct entry!',
    'Ok',
    {
      width: '500px',
      backgroundColor: '#e6e6fa',
      borderRadius: '16px',
      titleFontSize: '32px',
      messageFontSize: '24px',
      buttonFontSize: '35px',
      cssAnimationStyle: 'zoom',

      info: {
        svgColor: '#483d8b',
        titleColor: '#483d8b',
        messageColor: '#000000',
        buttonBackground: 'rgba(72,61,139,0.8)',
        buttonColor: '#000000',
        backOverlayColor: 'rgba(72,61,139,0.5)',
      },
    }
  );
}

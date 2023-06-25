import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialMedia}>
        {/* <a href='#' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a> */}
        <a href='#' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div>Updated  Q2 - 2023</div>
      {/* <small>
        Icons by{' '}
        <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer'>
          Flaticon
        </a>{' '}
        &{' '}
        <a href='https://fontawesome.com/' target='_blank' rel='noreferrer'>
          Font Awesome
        </a>
      </small> */}
    </footer>
  );
};
export default Footer;

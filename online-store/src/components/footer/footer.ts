class Footer {
  create(): void {
    const footerContainer = <HTMLDivElement>document.querySelector('.footer__container');
    const footerInner = `
    <div class="github">
      <span>© 2022</span>
      <a class="github__link" href="https://github.com/KristiBo" target="_blank" rel="noopener noreferrer">
        <img src="./assets/icons/github.svg" alt="Github" class="github__logo">
      </a>
    </div>
    <a class="rs__link" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
      <img src="./assets/icons/rsschool.svg" alt="RSSchool" class="rs__logo">
    </a>
    `;
    footerContainer.innerHTML = footerInner;
  }
}

export default Footer;

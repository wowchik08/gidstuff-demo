<template>
  <footer class="footer">
    <div class="footer__inner container">
      <a class="logo footer__logo" href="#">
        <img
          src="@/assets/images/gidstuff-logo-rev.svg"
          alt="Логотип gidstuff"
        />
      </a>
      <div class="footer__content">
        <address class="footer__contact">
          <ul class="footer__list">
            <li class="footer__item footer__item--title">контакты</li>
            <li class="footer__item">
              <a href="tel:+380674235501" class="footer__link footer__link--tel"
                >+ 38 067 423 55 01</a
              >
            </li>
            <li class="footer__item">
              <a href="tel:+380500012115" class="footer__link footer__link--tel"
                >+ 38 050 001 21 15</a
              >
            </li>
            <li class="footer__item">
              <a href="tel:+380739894412" class="footer__link footer__link--tel"
                >+ 38 073 989 44 12</a
              >
            </li>
            <li class="footer__item footer__item--social d-flex">
              <a class="footer__link" href="#">
                <img
                  class="footer__img"
                  src="@/assets/images/social/viber.svg"
                  alt="social vider"
                />
              </a>
              <a class="footer__link" href="#">
                <img
                  class="footer__img"
                  src="@/assets/images/social/telegram.svg"
                  alt="social telegram"
                />
              </a>
              <a class="footer__link" href="#">
                <img
                  class="footer__img"
                  src="@/assets/images/social/facebook.svg"
                  alt="social facebook"
                />
              </a>
              <a class="footer__link" href="#">
                <img
                  class="footer__img"
                  src="@/assets/images/social/instagram.svg"
                  alt="social instagram"
                />
              </a>
            </li>
            <li class="footer__item">
              Время работы
              <span class="footer__item--mod">Круглосуточно без выходных</span>
            </li>
          </ul>
        </address>
        <div class="footer__category">
          <p class="footer__item--title">Категории</p>
          <ul class="footer__list footer__list-category">
            <li class="footer__item">
              <a class="footer__link" href="#">Новинки</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Одежда</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Обувь</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Аксессуары</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Сумки</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Спорт</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Бренды</a>
            </li>
          </ul>
        </div>
        <div class="footer__info">
          <p class="footer__item--title">Информация</p>
          <ul class="footer__list footer__list-info">
            <li class="footer__item">
              <a class="footer__link" href="#">О нас</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Доставка и оплата</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Гарантия и возврат</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <form class="footer__subsribe" action="#">
          <label class="footer__form footer__item--title">
            Подписка
            <span class="footer__text">
              Чтобы быть в курсе всех акций и новинок, подпишитесь на нашу
              рассылку
            </span>
            <input
              class="footer__subsribe-input"
              type="email"
              placeholder="Ваш email"
              required
            />
          </label>
          <button class="footer__btn" type="submit">подписаться</button>
        </form>
      </div>
      <div class="footer__down d-flex space-between">
        <div class="footer__privat d-flex">
          <a class="footer__privat-link" href="#"
            >Политика конфиденциальности</a
          >
          <a class="footer__privat-link" href="#">Условия и положения</a>
        </div>
        <div class="footer__payment d-flex">
          <a class="footer__payment-link" href="#">
            <img
              src="@/assets/images/footer/mastercard.png"
              alt="master-carg логотип"
            />
          </a>
          <a class="footer__payment-link" href="#">
            <img src="@/assets/images/footer/visa.png" alt="visa логотип" />
          </a>
          <a class="footer__payment-link" href="#">
            <img src="@/assets/images/footer/liqpay.png" alt="liqpay логотип" />
          </a>
          <a class="footer__payment-link" href="#">
            <img
              src="@/assets/images/footer/new-post.png"
              alt="новая почта логотип"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "@/styles/components/the-footer.scss";
</style>

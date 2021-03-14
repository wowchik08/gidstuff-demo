<template>
  <main>
    <section class="order container">
      <div class="d-flex">
        <form action="#" class="order__form">
          <h2 class="order__title">Оформление заказа</h2>
          <div class="order__your-contact">
            <p class="order__form-title">Ваши контактные данные</p>
            <div class="custom-input order__form-tel">
              <input
                type="tel"
                class="custom-input__input order__form--tel"
                id="my-tel"
                placeholder=" "
                required
              />
              <label class="custom-input__placeholder" for="tel"
                >Контактный телефон</label
              >
            </div>
            <div class="custom-input order__form-name">
              <input
                type="email"
                class="custom-input__input"
                id="my-name"
                placeholder=" "
                required
              />
              <label class="custom-input__placeholder" for="my-name">Имя</label>
            </div>
            <div class="custom-input order__form-surname">
              <input
                type="email"
                class="custom-input__input"
                id="my-surname"
                placeholder="  "
                required
              />
              <label class="custom-input__placeholder" for="my-surname"
                >Фамилия</label
              >
            </div>
            <div class="custom-input order__form-email">
              <input
                type="email"
                class="custom-input__input"
                id="email"
                placeholder=" "
                required
              />
              <label class="custom-input__placeholder" for="email">Email</label>
            </div>
          </div>
          <div class="order__delivery-payment">
            <p class="order__form-title">Выбор доставки и оплаты</p>
            <div class="order__info d-flex">
              <span class="order__info-num">Заказ №1</span>
              <span class="order__info-delivery">7-10 дней</span>
              <span class="order__info-total">
                на сумму:
                <span class="order__info-total-price"> 4 199 &#8372; </span>
              </span>
            </div>
            <div class="order-card d-flex">
              <button type="button" class="order-card__delete"></button>
              <div class="order-card__wrapper">
                <img
                  class="order-card__img"
                  src="/public/images/product/1-1.jpg"
                  alt=""
                />
              </div>
              <div class="order-card__info">
                <span class="order-card__brand">Zara</span>
                <span class="order-card__name">Трикотажные брюки джоггеры</span>
                <div class="order-card__size-color d-flex">
                  <span class="order-card__size">
                    Размер:
                    <span class="order-card__size-name"> L </span>
                  </span>
                  <span class="order-card__color">
                    Цвет:
                    <span class="order-card__color-name"> Фиолетовый </span>
                  </span>
                </div>
              </div>
              <div class="order-card__number">
                <input class="order-card__amount" type="number" value="1" />
              </div>
              <div class="order-card__price">
                <span class="order-card__price-now">3 999 &#8372;</span>
                <span class="order-card__old-price">4500 &#8372;</span>
                <span class="order-card__sale">-10%</span>
              </div>
            </div>
            <div class="order-card d-flex">
              <button type="button" class="order-card__delete"></button>
              <div class="order-card__wrapper">
                <img
                  class="order-card__img"
                  src="/public/images/product/1-1.jpg"
                  alt=""
                />
              </div>
              <div class="order-card__info">
                <span class="order-card__brand">Zara</span>
                <span class="order-card__name">Трикотажные брюки джоггеры</span>
                <div class="order-card__size-color d-flex">
                  <span class="order-card__size">
                    Размер:
                    <span class="order-card__size-name"> L </span>
                  </span>
                  <span class="order-card__color">
                    Цвет:
                    <span class="order-card__color-name"> Фиолетовый </span>
                  </span>
                </div>
              </div>
              <div class="order-card__number">
                <input class="order-card__amount" type="number" value="1" />
              </div>
              <div class="order-card__price">
                <span class="order-card__price-now">3 999 &#8372;</span>
                <span class="order-card__old-price">4500 &#8372;</span>
                <span class="order-card__sale">-10%</span>
              </div>
            </div>
            <div class="order__city">
              <div>
                <span class="input__title">Выберите город доставки</span>
                <select
                  name="city"
                  id="my-city"
                  class="order__city-select custom-select"
                >
                  <option value="Выберите город">Выберите город</option>
                  <option value="Харьков">Харьков</option>
                  <option value="Киев">Киев</option>
                  <option value="Днепр">Днепр</option>
                  <option value="Львов">Львов</option>
                  <option value="Одесса">Одесса</option>
                  <option value="Запорожье">Запорожье</option>
                </select>
              </div>
              <div class="order__city-list">
                <span class="order__city-choice">Харьков</span>
                <span class="order__city-choice">Киев</span>
                <span class="order__city-choice">Днепр</span>
                <span class="order__city-choice">Львов</span>
                <span class="order__city-choice">Одесса</span>
                <span class="order__city-choice">Запорожье</span>
              </div>
            </div>
            <div class="order__delivery">
              <span class="order__delivery-title">Способ доставки</span>
              <div class="order__delivery-new-post">
                <label for="new-post" class="order__label--mod d-flex">
                  <input
                    type="radio"
                    id="new-post"
                    class="order__input order__input-new-post"
                    name="delivery-metod"
                  />
                  <span class="order__method-name"
                    >Отделение, Новая Почта
                  </span>
                  <span class="order__delivery-date">07.12.2020</span>
                  <span class="order__delivery-cost">Бесплатно</span>
                </label>
                <div class="order__new-post-inner">
                  <span class="input__title">Отделение</span>
                  <select name="new-post" class="order__select custom-select">
                    <option value="121">Отделение №1 ул. Зерновая 123</option>
                    <option value="121">Отделение №1 ул. Зерновая 123</option>
                    <option value="121">Отделение №1 ул. Зерновая 123</option>
                  </select>
                </div>
              </div>
              <div class="order__delivery-courier">
                <label for="new-post-courier" class="order__label--mod d-flex">
                  <input
                    type="radio"
                    id="new-post-courier"
                    class="order__input"
                    name="delivery-metod"
                  />
                  <span class="order__method-name">Курьер, Новая Почта</span>
                  <span class="order__delivery-date">07.12.2020</span>
                  <span class="order__delivery-cost">100 &#8372;</span>
                </label>
                <div class="order__new-post-courier-inner d-flex">
                  <div class="custom-input order__courier-street">
                    <input
                      type="email"
                      class="custom-input__input"
                      id="street"
                      placeholder=" "
                      required
                    />
                    <label class="custom-input__placeholder" for="street"
                      >Улица</label
                    >
                  </div>
                  <div class="custom-input order__courier-home">
                    <input
                      type="email"
                      class="custom-input__input"
                      id="home"
                      placeholder=" "
                      required
                    />
                    <label class="custom-input__placeholder" for="home"
                      >№ дома</label
                    >
                  </div>
                  <div class="custom-input order__courier-room">
                    <input
                      type="email"
                      class="custom-input__input"
                      id="room"
                      placeholder=" "
                      required
                    />
                    <label class="custom-input__placeholder" for="room"
                      >Квартира</label
                    >
                  </div>
                </div>
              </div>
              <div class="order__delivery-ukr-post">
                <label for="ukr-post" class="order__label--mod d-flex">
                  <input
                    type="radio"
                    id="ukr-post"
                    class="order__input"
                    name="delivery-metod"
                  />
                  <span class="order__method-name"
                    >Отделение, Новая Почта
                  </span>
                  <span class="order__delivery-date">07.12.2020</span>
                  <span class="order__delivery-cost">100 &#8372;</span>
                </label>
              </div>
            </div>
            <div class="order__payment">
              <span class="order__payment-title">Оплата</span>
              <label for="cash" class="order__cash">
                <input
                  type="radio"
                  id="cash"
                  class="order__input"
                  name="payment-method"
                />
                <span class="order__method-name">Наличные при получении</span>
              </label>
              <label for="card" class="order__card">
                <input
                  type="radio"
                  id="card"
                  class="order__input"
                  name="payment-method"
                />
                <span class="order__method-name">Картой на сайте</span>
              </label>
            </div>

            <div class="order__no-call">
              <label for="no-call" class="order__no-call-inner d-flex">
                <input
                  class="order__input"
                  name="no-call"
                  id="no-call"
                  type="checkbox"
                />
                <span class="order__method-name">Не перезванивать мне</span>
              </label>
            </div>
          </div>
          <div class="order__total-info">
            <ul class="order__list">
              <li class="order__list-title">Итого</li>
              <li class="order__item d-flex space-between">
                2 товара на сумму:
                <span class="order__product-total">2 100 ₴</span>
              </li>
              <li class="order__item d-flex space-between">
                Стоимость доставки:
                <span class="order__delivery-total">2 100 ₴</span>
              </li>
              <li class="order__item d-flex space-between">
                К оплате: <span class="order__cost-total">2 200 ₴</span>
              </li>
            </ul>
          </div>
          <div class="order__attention d-flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3756 21H2.62451C2.40127 21 2.19512 20.8775 2.08343 20.6783C1.97219 20.4789 1.97219 20.2338 2.08343 20.0346L11.4591 3.29899C11.6822 2.90034 12.3178 2.90034 12.5409 3.29899L21.9166 20.0346C22.0278 20.2338 22.0278 20.4789 21.9166 20.6783C21.805 20.8775 21.5987 21 21.3756 21ZM3.70621 19.7127H20.2938L12 4.9082L3.70621 19.7127Z"
                fill="black"
              />
              <path
                d="M12.2077 18.4499C12.0355 18.4499 11.8762 18.3857 11.755 18.265C11.6337 18.1436 11.5701 17.9841 11.5701 17.8123C11.5701 17.6466 11.6402 17.4804 11.755 17.3595C11.8186 17.3024 11.889 17.2575 11.9651 17.2257C12.2011 17.1235 12.4817 17.1809 12.6603 17.3595C12.775 17.4804 12.8452 17.6466 12.8452 17.8123C12.8452 17.9841 12.7815 18.1435 12.6603 18.265C12.5393 18.3857 12.3798 18.4499 12.2077 18.4499Z"
                fill="black"
              />
              <path
                d="M12.2077 15.8996C11.8556 15.8996 11.5701 15.6144 11.5701 15.262V8.24883C11.5701 7.8965 11.8556 7.6113 12.2077 7.6113C12.5598 7.6113 12.8452 7.8965 12.8452 8.24883V15.262C12.8452 15.6144 12.5598 15.8996 12.2077 15.8996Z"
                fill="black"
              />
            </svg>
            <p class="order__attention-text">
              После завершении заказа вы перейдете на сервис оплаты
            </p>
          </div>
          <div class="order__btn-wrapper d-flex">
            <button class="order__btn">Оформить заказ</button>
            <div class="order__total">
              К оплате: <span class="order__total-price">2 200 ₴</span>
            </div>
          </div>
        </form>
        <div class="order__fixed-wrapper">
          <div class="order__fixed">
            <ul class="order__list">
              <li class="order__list-title">Итого</li>
              <li class="order__item d-flex space-between">
                2 товара на сумму:
                <span class="order__product-total">2 100 ₴</span>
              </li>
              <li class="order__item d-flex space-between">
                Стоимость доставки:
                <span class="order__delivery-total">2 100 ₴</span>
              </li>
              <li class="order__item d-flex space-between">
                К оплате: <span class="order__cost-total">2 200 ₴</span>
              </li>
            </ul>
            <button class="order__btn">Оформить заказ</button>
            <p class="order__text">
              Подтверждая заказ, я принимаю условия
              <a href="#" class="order__text-link"
                >пользовательского соглашения</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>
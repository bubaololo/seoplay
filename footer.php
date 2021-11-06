<footer class="footer">
    <div class="container wide_container">
        <div class="footer__wrapper">
            <img id="footer_logo" src="/img/footer_logo.svg" alt="logo">
            <div class="footer__services">
                <div class="footer__services__title title">
                    Servicios
                </div>
                <div class="footer__services_text">
                    desarrollo de sitios web<br>seo integral<br>seo local <br>auditoría de sitios seo<br>construcción de enlaces<br>google ADS<br>portafolio<br>casos de éxito en seo<br>contactos<br> <a href="/confidencialidad/">confidencialidad</a></div>
            </div>
            <div class="footer__contacts">
                <div class="contacts__title title">
                    Contactos
                </div>
                <div class="contacts__text">
                    España, Alicante y Barcelona <br>(34) 685 725 727<br>mail@seoplay.es<br><a href="#" class="footer__feedback_link" data-hystmodal="#myModal">Solicita una consulta</a></div>
            </div>
            <div class="footer__social">
                <div class="social__title title">
                    Social
                </div>
                <div class="social__text">
                    <a href="https://www.instagram.com/seoplay.es/" class="insta__link "><img src="/img/inst.svg" class="social_icon" alt="seoplay.es"></a>

                    <a href="https://www.facebook.com/seoplay.es/" class="face__link"><img src="/img/face.svg" class="social_icon" alt="seoplay.es"></a>

                    <a href="https://www.linkedin.com/company/72453866/" class="linked__link"><img src="/img/linked.svg" class="social_icon" alt="72453866"></a>

                    <a href="https://t.me/seoplayes" class="teleg__link"><img src="/img/teleg.svg" class="social_icon tgicon" alt="@seoplayes"></a>

                    <a href="https://api.whatsapp.com/send/?phone=34722218466" class="whats__link"><img src="/img/whats.svg" class="social_icon" alt="34722218466"></a>
                </div>
            </div>
            <div class="ticker-wrap">
                <div class="ticker">
                    <div class="ticker__item">#iloveseo</div>
                    <div class="ticker__item">#seoplay</div>
                    <div class="ticker__item">#iloveseo</div>
                    <div class="ticker__item">#seoplay</div>
                    <div class="ticker__item">#iloveseo</div>
                    <div class="ticker__item">#seoplay</div>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="hystmodal" id="myModal" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close" id="main_form_close">Close</button>
            <section class="form">
                <div class="container">
                    <div class="form__wrapper">
                        <form enctype="multipart/form-data" method="post" id="form" onsubmit="send(event, 'send.php')">
                            <div class="form__top">
                                <h2 class="form__title title">
                                    Envía tu solicitud
                                </h2>
                                <div class="form__input_wrapper">
                                    <div class="form__item">
                                        <label for="name" class="form_label">¿Como te llamas?</label>
                                        <input id="name" type="text" name="name" class="form_input">
                                    </div>

                                    <div class="form__item">
                                        <label for="phone" class="form_label ">Tu número de teléfono</label>
                                        <input id="phone" type="tel" name="phone" class="form_input _req">
                                    </div>

                                    <div class="form__item">
                                        <label for="email" class="form_label">Tu correo electrónico*</label>
                                        <input id="email" type="email" name="email" required class="form_input _req">
                                    </div>

                                    <div class="form__item">
                                        <label for="site" class="form_label">El sitio de la empresa</label>
                                        <input id="site" type="text" name="site" class="form_input">
                                    </div>

                                    <div class="form__item">
                                        <label for="message" class="form_label">Descripción</label>
                                        <textarea id="message" name="message" class="form_input"></textarea>
                                    </div>
                                </div>
                                <div class="form__radio_wrapper">
                                    <div class="form__radio_budget">
                                        <div class="form_label">Presupuesto planificado</div>
                                        <div class="form__options_wrapper">
                                            <input type="radio" id="100" value="100" name="budget" class="options_input _100">
                                            <label for="100" class="options_label">100€</label>

                                            <input type="radio" id="300" value="300" name="budget" class="options_input _300">
                                            <label for="300" class="options_label">300€</label>

                                            <input type="radio" id="500" value="500" name="budget" class="options_input _500">
                                            <label for="500" class="options_label">500€</label>

                                            <input type="radio" id="1000" value="1000" name="budget" class="options_input _1000">
                                            <label for="1000" class="options_label">1000€</label>

                                        </div>
                                    </div>
                                    <div class="form__radio_know">
                                        <div class="form_label">¿Cómo se enteró de seoplay?</div>
                                        <div class="form__options_wrapper">
                                            <input type="radio" id="#seoplay" value="#seoplay" name="know" class="options_input">
                                            <label for="#seoplay" class="options_label">#seoplay</label>
                                            <input type="radio" id="google" value="google" name="know" class="options_input">
                                            <label for="google" class="options_label">google</label>
                                            <input type="radio" id="instagram" value="instagram" name="know" class="options_input">
                                            <label for="instagram" class="options_label">instagram</label>
                                            <input type="radio" id="facebook" value="facebook" name="know" class="options_input">
                                            <label for="facebook" class="options_label">facebook</label>
                                        </div>
                                        <div class="form__file">
                                            <!-- <div class="form_label">Прикрепить файл</div> -->
                                            <div class="file__item">
                                                <!-- <input type="hidden" name="MAX_FILE_SIZE" value="300000" /> -->
                                                <label for="formFile" class="file__button">
                                                            Adjuntar archivo
                                                        </label>
                                                <input type="file" name="myfile[]" multiple class="file_input" id="formFile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__bottom">
                                <div class="form__send">
                                    <div class="form__send_button">
                                        <div class="form_submit">
                                            Enviar mensaje
                                            <svg class="img-arrow-form">
                                            <path fill="##4A4A4A" d="M29.7204 7.07638C30.0456 6.75118 30.0456 6.22392 29.7204 5.89871L24.4208 0.599184C24.0956 0.273979 23.5684 0.273979 23.2432 0.599184C22.918 0.924389 22.918 1.45165 23.2432 1.77686L27.9539 6.48755L23.2432 11.1982C22.918 11.5234 22.918 12.0507 23.2432 12.3759C23.5684 12.7011 24.0956 12.7011 24.4208 12.3759L29.7204 7.07638ZM0.818359 7.32029L29.1315 7.32029L29.1315 5.65481L0.818359 5.65481L0.818359 7.32029Z"></path>
                                        </svg>
                                        </div>
                                        <input type="submit" class="submit_button">
                                    </div>
                                    <div class="form__send_disclaimer">
                                        Al hacer clic en el botón, acepta el procesamiento de datos personales.
                                    </div>
                                </div>
                                <div class="form__logo">
                                    <img id="form_logo" src="/img/logo.svg" alt="logo">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
<div class="hystmodal" id="confirm" aria-hidden="true">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Close</button>
            <div class="confirm__wrapper">
                <div class="confirm_text">
                    Thanks for contacting seoplay <span id="notify_name"></span>, your message has been sent
                </div>
                <button data-hystclose class="confirm_ok" aria-label="0">Ok</button>
            </div>

        </div>
    </div>
</div>
<!-- Start of txt.me widget code -->
<script src="https://v2.txt.me/livechat/js/wrapper/763a26b6b94c40288f9aa8bb76d17072" async></script>
<noscript><a href="https://txt.me/reviews/763a26b6b94c40288f9aa8bb76d17072" rel="nofollow">Rate 123 customer support</a>, powered by <a href="https://txt.me" rel="noopener nofollow" target="_blank">txt.me</a></noscript>
<!-- End of txt.me widget code -->
// REVEAL HIDDEN TYPED STRINGS AS ALL IS LOADED________________________________
window.onload = function() {
    let typedStrings = document.querySelector('.type-wrap');
    typedStrings.classList.add('visible');
}

// BURGER________________________________

document.querySelector('.menu__icon').addEventListener('click', event => {
    document.querySelectorAll('.line, .header__menu').forEach(element => element.classList.toggle('active'));
    document.querySelector('body').classList.toggle('lock');
});

document.querySelectorAll('.header__link').forEach(element => element.addEventListener('click', event => {
        document.querySelectorAll('.line, .header__menu').forEach(element => element.classList.remove('active'));
        document.querySelector('body').classList.remove('lock');
    })

);

// GOOGLE TRANSLATE__________________________

const googleTranslateConfig = {
    lang: "es",
};

function TranslateInit() {

    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    $('[data-google-lang="' + code + '"]').addClass('language__img_active');

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateClearCookie();
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function() {
        TranslateSetCookie($(this).attr("data-google-lang"))
            // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.substr(-2);
}

function TranslateClearCookie() {
    $.cookie('googtrans', null);
    $.cookie("googtrans", null, {
        domain: "." + document.domain,
    });
}

function TranslateSetCookie(code) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    $.cookie('googtrans', "/auto/" + code);
    $.cookie("googtrans", "/auto/" + code, {
        domain: "." + document.domain,
    });
}

// _________________ANIMATIONS______________________

// const images = document.querySelectorAll('.mobile_animation');

// const images = document.querySelectorAll('.mobile_animation');

// observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {


//         if (entry.isIntersecting == true) {
//             entry.target.classList.add('go');
//         } else {
//             entry.target.classList.remove('go');
//         }
//         console.log(entry)
//     })
// });

// images.forEach(image => {
//     observer.observe(image)
// })

// *************************************************

// const mediaQuery = window.matchMedia('(max-width: 1023px)')
//     // Check if the media query is true
// if (mediaQuery.matches) {
//     // Then trigger an alert


//     // (function(document) {
//     //     const animItems = [...document.querySelectorAll('.mobile_animation')];

//     //     const observer = new IntersectionObserver(entries => {
//     //         entries.forEach((entry) => {
//     //             if (entry.intersectionRatio > 0.9) {
//     //                 entry.target.classList.add('go');
//     //                 console.log(entry)

//     //             }
//     //         });
//     //     }, {
//     //         threshold: 1.0,
//     //         rootMargin: '-150px',
//     //     });

//     //     animItems.forEach(item => {
//     //         observer.observe(item);
//     //     });
//     // })(document);
// }

// (function(document) {
//     const animItems = [...document.querySelectorAll('.animation')];

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach((entry) => {
//             if (entry.intersectionRatio > 0.5) {
//                 entry.target.classList.add('go');
//                 console.log(entry)

//             }
//         });
//     }, {
//         threshold: 1.0,

//     });

//     animItems.forEach(item => {
//         observer.observe(item);
//     });
// })(document);




// Services_animations

ScrollTrigger.matchMedia({
    "(min-width: 320px) and (max-width: 414px)": function() {
        // gsap.to(".services__title::after", {
        //     scrollTrigger: {
        //         trigger: "top__title",
        //         start: "top center", // when the top of the trigger hits the top of the viewport
        //         end: "+=20%",
        //         markers: true,
        //         scrub: 0.5

        //     },
        //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        // })
        gsap.to("._1 .services__item_top-title", {
            scrollTrigger: {
                trigger: "._1",
                start: "top-=20% center", // when the top of the trigger hits the top of the viewport
                end: "+=10%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "circle(130% at 40px 0)",
            
        })

        gsap.to("._1 .services__item_top-subtitle", {
            scrollTrigger: {
                trigger: "._1",
                start: "top+=20% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "perspective(600px) rotateX(0deg)",
            // filter: "blur(0px)",
            // opacity: "1"
        })
        gsap.to("._1 .services__item_text", {
            scrollTrigger: {
                trigger: "._1",
                start: "top+=35% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            // transform: "perspective(600px) rotateX(0deg)",
            filter: "blur(0px)",
            // opacity: "1"
        })




        gsap.to(".services__item_wrapper-1 .services__line", {
            scrollTrigger: {
                trigger: "._1",
                start: "top+=35% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })

        // gsap.to(".bgnd1", {
        //     scrollTrigger: {
        //         trigger: "._1",
        //         start: "top-=20% center", // when the top of the trigger hits the top of the viewport
        //         end: "+=20%",
        //         markers: false,
        //         scrub: 0.5

        //     },

        //     filter: "blur(60px)",

        // })

// _____________2___________________________

        gsap.to("._2 .services__item_top-title", {
            scrollTrigger: {
                trigger: "._2",
                start: "top-=20% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "circle(130% at 40px 0)"
        })

        gsap.to("._2 .services__item_top-subtitle", {
            scrollTrigger: {
                trigger: "._2",
                start: "top+=20% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "perspective(600px) rotateX(0deg)",
            // filter: "blur(0px)",
            // opacity: "1"
        })
        gsap.to("._2 .services__item_text", {
            scrollTrigger: {
                trigger: "._2",
                start: "top+=35% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            // transform: "perspective(600px) rotateX(0deg)",
            filter: "blur(0px)",
            // opacity: "1"
        })




        gsap.to(".services__item_wrapper-2 .services__line", {
            scrollTrigger: {
                trigger: "._2",
                start: "top+=35% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })


// _____________3___________________________


        gsap.to("._3 .services__item_top-title", {
            scrollTrigger: {
                trigger: "._3",
                start: "top-=20% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "circle(115% at 240px 0)"
        })


        gsap.to("._3 .services__item_top-subtitle", {
            scrollTrigger: {
                trigger: "._3",
                start: "top+=20% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "perspective(600px) rotateX(0deg)",
            // filter: "blur(0px)",
            // opacity: "1"
        })
        gsap.to("._3 .services__item_text", {
            scrollTrigger: {
                trigger: "._3",
                start: "top+=35% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            // transform: "perspective(600px) rotateX(0deg)",
            filter: "blur(0px)",
            // opacity: "1"
        })



        gsap.to(".services__item_wrapper-3 .services__line", {
            scrollTrigger: {
                trigger: "._3",
                start: "top+=35% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })





// _____________4___________________________




gsap.to("._4 .services__item_top-title", {
    scrollTrigger: {
        trigger: "._4",
        start: "top-=20% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "circle(115% at 240px 0)"
})


gsap.to("._4 .services__item_top-subtitle", {
    scrollTrigger: {
        trigger: "._4",
        start: "top+=20% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    transform: "perspective(600px) rotateX(0deg)",
    // filter: "blur(0px)",
    // opacity: "1"
})
gsap.to("._4 .services__item_text", {
    scrollTrigger: {
        trigger: "._4",
        start: "top+=35% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    // transform: "perspective(600px) rotateX(0deg)",
    filter: "blur(0px)",
    // opacity: "1"
})



gsap.to(".services__item_wrapper-4 .services__line", {
    scrollTrigger: {
        trigger: "._4",
        start: "top+=35% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})


// ____________________5___________________________


gsap.to("._5 .services__item_top-title", {
    scrollTrigger: {
        trigger: "._5",
        start: "top-=20% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "circle(115% at 240px 0)"
})


gsap.to("._5 .services__item_top-subtitle", {
    scrollTrigger: {
        trigger: "._5",
        start: "top+=20% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    transform: "perspective(600px) rotateX(0deg)",
    // filter: "blur(0px)",
    // opacity: "1"
})
gsap.to("._5 .services__item_text", {
    scrollTrigger: {
        trigger: "._5",
        start: "top+=35% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    // transform: "perspective(600px) rotateX(0deg)",
    filter: "blur(0px)",
    // opacity: "1"
})



gsap.to(".services__item_wrapper-5 .services__line", {
    scrollTrigger: {
        trigger: "._5",
        start: "top+=35% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})


// ________________________6________________________


gsap.to("._6 .services__item_top-title", {
    scrollTrigger: {
        trigger: "._6",
        start: "top-=20% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "circle(115% at 240px 0)"
})


gsap.to("._6 .services__item_top-subtitle", {
    scrollTrigger: {
        trigger: "._6",
        start: "top+=20% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    transform: "perspective(600px) rotateX(0deg)",
    // filter: "blur(0px)",
    // opacity: "1"
})
gsap.to("._6 .services__item_text", {
    scrollTrigger: {
        trigger: "._6",
        start: "top+=35% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    // transform: "perspective(600px) rotateX(0deg)",
    filter: "blur(0px)",
    // opacity: "1"
})



gsap.to(".services__item_wrapper-6 .services__line", {
    scrollTrigger: {
        trigger: "._6",
        start: "top+=35% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})


//   ________________APPROACH____________________________________

        gsap.to(".approach__wrapper", {
            scrollTrigger: {
                trigger: ".approach__wrapper",
                start: "top-=50% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1"
        })
        gsap.to(".experience__wrapper", {
            scrollTrigger: {
                trigger: ".experience__wrapper",
                start: "top-=50% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1"
        })

    },
    "(min-width: 415px) and (max-width: 1024px)": function() {
        gsap.to("._1 .services__item_top-title", {
            scrollTrigger: {
                trigger: "._1",
                start: "top-=120% center", // when the top of the trigger hits the top of the viewport
                end: "+=10%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "circle(130% at 40px 0)",
            
        })

        gsap.to("._1 .services__item_top-subtitle", {
            scrollTrigger: {
                trigger: "._1",
                start: "top-=80% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "perspective(600px) rotateX(0deg)",
            // filter: "blur(0px)",
            // opacity: "1"
        })
        gsap.to("._1 .services__item_text", {
            scrollTrigger: {
                trigger: "._1",
                start: "top-=75% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            // transform: "perspective(600px) rotateX(0deg)",
            filter: "blur(0px)",
            // opacity: "1"
        })




        gsap.to(".services__item_wrapper-1 .services__line", {
            scrollTrigger: {
                trigger: "._1",
                start: "top-=75% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })

        // gsap.to(".bgnd1", {
        //     scrollTrigger: {
        //         trigger: "._1",
        //         start: "top-=20% center", // when the top of the trigger hits the top of the viewport
        //         end: "+=20%",
        //         markers: false,
        //         scrub: 0.5

        //     },

        //     filter: "blur(60px)",

        // })

// _____________2___________________________

        gsap.to("._2 .services__item_top-title", {
            scrollTrigger: {
                trigger: "._2",
                start: "top-=120% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "circle(130% at 40px 0)"
        })

        gsap.to("._2 .services__item_top-subtitle", {
            scrollTrigger: {
                trigger: "._2",
                start: "top-=80% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "perspective(600px) rotateX(0deg)",
            // filter: "blur(0px)",
            // opacity: "1"
        })
        gsap.to("._2 .services__item_text", {
            scrollTrigger: {
                trigger: "._2",
                start: "top-=75% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            // transform: "perspective(600px) rotateX(0deg)",
            filter: "blur(0px)",
            // opacity: "1"
        })




        gsap.to(".services__item_wrapper-2 .services__line", {
            scrollTrigger: {
                trigger: "._2",
                start: "top-=75% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })


// _____________3___________________________


        gsap.to("._3 .services__item_top-title", {
            scrollTrigger: {
                trigger: "._3",
                start: "top-=120% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "circle(115% at 240px 0)"
        })


        gsap.to("._3 .services__item_top-subtitle", {
            scrollTrigger: {
                trigger: "._3",
                start: "top-=80% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "perspective(600px) rotateX(0deg)",
            // filter: "blur(0px)",
            // opacity: "1"
        })
        gsap.to("._3 .services__item_text", {
            scrollTrigger: {
                trigger: "._3",
                start: "top-=75% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            // transform: "perspective(600px) rotateX(0deg)",
            filter: "blur(0px)",
            // opacity: "1"
        })



        gsap.to(".services__item_wrapper-3 .services__line", {
            scrollTrigger: {
                trigger: "._3",
                start: "top-=75% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })





// _____________4___________________________




gsap.to("._4 .services__item_top-title", {
    scrollTrigger: {
        trigger: "._4",
        start: "top-=120% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "circle(115% at 240px 0)"
})


gsap.to("._4 .services__item_top-subtitle", {
    scrollTrigger: {
        trigger: "._4",
        start: "top-=80% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    transform: "perspective(600px) rotateX(0deg)",
    // filter: "blur(0px)",
    // opacity: "1"
})
gsap.to("._4 .services__item_text", {
    scrollTrigger: {
        trigger: "._4",
        start: "top-=75% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    // transform: "perspective(600px) rotateX(0deg)",
    filter: "blur(0px)",
    // opacity: "1"
})



gsap.to(".services__item_wrapper-4 .services__line", {
    scrollTrigger: {
        trigger: "._4",
        start: "top-=75% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})


// ____________________5___________________________


gsap.to("._5 .services__item_top-title", {
    scrollTrigger: {
        trigger: "._5",
        start: "top-=120% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "circle(115% at 240px 0)"
})


gsap.to("._5 .services__item_top-subtitle", {
    scrollTrigger: {
        trigger: "._5",
        start: "top-=80% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    transform: "perspective(600px) rotateX(0deg)",
    // filter: "blur(0px)",
    // opacity: "1"
})
gsap.to("._5 .services__item_text", {
    scrollTrigger: {
        trigger: "._5",
        start: "top-=75% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    // transform: "perspective(600px) rotateX(0deg)",
    filter: "blur(0px)",
    // opacity: "1"
})



gsap.to(".services__item_wrapper-5 .services__line", {
    scrollTrigger: {
        trigger: "._5",
        start: "top-=75% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})


// ________________________6________________________


gsap.to("._6 .services__item_top-title", {
    scrollTrigger: {
        trigger: "._6",
        start: "top-=120% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "circle(115% at 240px 0)"
})


gsap.to("._6 .services__item_top-subtitle", {
    scrollTrigger: {
        trigger: "._6",
        start: "top-=80% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    transform: "perspective(600px) rotateX(0deg)",
    // filter: "blur(0px)",
    // opacity: "1"
})
gsap.to("._6 .services__item_text", {
    scrollTrigger: {
        trigger: "._6",
        start: "top-=75% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    // transform: "perspective(600px) rotateX(0deg)",
    filter: "blur(0px)",
    // opacity: "1"
})



gsap.to(".services__item_wrapper-6 .services__line", {
    scrollTrigger: {
        trigger: "._6",
        start: "top-=75% center", // when the top of the trigger hits the top of the viewport
        end: "+=20%",
        markers: false,
        scrub: 0.5

    },
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})

        gsap.to(".approach__wrapper", {
            scrollTrigger: {
                trigger: ".approach__wrapper",
                start: "top-=150% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1"
        })
        gsap.to(".experience__wrapper", {
            scrollTrigger: {
                trigger: ".experience__wrapper",
                start: "top-=150% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1"
        })
    },
    "(min-width: 1025px)": function() {




        gsap.to("._1", {
            scrollTrigger: {
                trigger: ".clip_path",
                start: "top+=10% top", // when the top of the trigger hits the top of the viewport
                end: "+=50%",
                markers: false,
                scrub: 0.5

            },
            filter: "blur(0px)",
            transform: "translateX(0%) translateY(0%)",
            // outline: "1px solid #4A4A4A",
            borderRadius: "0px"
        })
        gsap.to("._2", {
            scrollTrigger: {
                trigger: ".clip_path",
                start: "top+=10% top", // when the top of the trigger hits the top of the viewport
                end: "+=50%",
                markers: false,
                scrub: 0.5

            },
            filter: "blur(0px)",
            transform: "translateX(0%) translateY(0%)",
            borderRadius: "0px"
        })
        gsap.to("._3", {
            scrollTrigger: {
                trigger: ".clip_path",
                start: "top+=10% top", // when the top of the trigger hits the top of the viewport
                end: "+=50%",
                markers: false,
                scrub: 0.5

            },
            filter: "blur(0px)",
            transform: "translateX(0%) translateY(0%)",
            borderRadius: "0px"
        })





        gsap.to("._4", {
            scrollTrigger: {
                trigger: "._4",
                start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                end: "+=50%",
                markers: false,
                scrub: 0.5

            },
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            
            borderRadius: "0px"
            
        })
        gsap.to("._5", {
            scrollTrigger: {
                trigger: "._5",
                start: "bottom bottom", // when the top of the trigger hits the top of the viewport
                end: "+=50%",
                markers: false,
                scrub: 0.5

            },
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            
            borderRadius: "0px"
        })
        gsap.to("._6", {
            scrollTrigger: {
                trigger: ".services__items_wrapper-bottom",
                start: "bottom+=15% bottom", // when the top of the trigger hits the top of the viewport
                end: "+=30%",
                markers: false,
                scrub: 0.5

            },
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            
            borderRadius: "0px"
        })
        gsap.to(".clip_path", {
            scrollTrigger: {
                trigger: ".services__items_wrapper-top",
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=60%",
                markers: false,
                scrub: 0.5,
                pin: true,
                // ease: "slow"

            },
            scale: 20,
            // filter: "blur(10px)",
            display: "none"
        })
        gsap.to(".services__color_lens", {
            scrollTrigger: {
                trigger: ".services__items_wrapper-top",
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=60%",
                markers: false,
                scrub: 0.5,
                pin: true,
                toggleClass: { targets: ".services__color_lens", className: "active" }
                // ease: slow

            }, 
            backgroundColor: "rgba(242, 1, 148, 0)",
            scale: 7,
                // display: "none"
        })
        gsap.to(".approach__wrapper", {
            scrollTrigger: {
                trigger: ".approach__wrapper",
                start: "top-=50% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1"
        })
        gsap.to(".experience__wrapper", {
            scrollTrigger: {
                trigger: ".experience__wrapper",
                start: "top-=50% center", // when the top of the trigger hits the top of the viewport
                end: "+=20%",
                markers: false,
                scrub: 0.5

            },
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1"
        })
        gsap.to(".handwritten_stroke", {
            scrollTrigger: {
                trigger: ".footer",
                start: "bottom-=5% bottom",
                end: "bottom bottom",
                markers: false,
            },
            // animation: "5s forwards dash"
            display: "inline-block"
        })
        gsap.to(".hand", {
            scrollTrigger: {
                trigger: ".footer",
                start: "bottom-=5% bottom",
                end: "bottom bottom",
                markers: false,
            },
            // animation: "5s forwards dash"
            display: "inline-block"
        })

    }
});



// SHARE ARTICLE ICON ANIMATION_______________________________________

let soc_links = document.querySelectorAll('.article_social');

let soc_icon = document.querySelectorAll('.article__share_icon')
soc_icon.item(0).addEventListener('click', (e) => {
    if (soc_links.item(0).classList.contains('closed')) {
        soc_links.item(0).classList.remove('closed');
        soc_links.item(1).classList.remove('closed');
    } else {
        soc_links.item(0).classList.add('closed');
        soc_links.item(1).classList.add('closed');
    }

})
soc_icon.item(1).addEventListener('click', (e) => {
    if (soc_links.item(2).classList.contains('closed')) {
        soc_links.item(2).classList.remove('closed');
        soc_links.item(3).classList.remove('closed');
    } else {
        soc_links.item(2).classList.add('closed');
        soc_links.item(3).classList.add('closed');
    }
})



// CONTACT FORM MODAL WINDOW__________________________________

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});



// PHP_MAILER______________________

function send(event, php) {
    // console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // Ебанный internet explorer 11
            

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                document.getElementById("form").reset();
                document.getElementById("main_form_close").click()
                myModal.open('#confirm');
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else { alert("Ошибка сервера. Номер: " + req.status); }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() { alert("Ошибка отправки запроса"); };
    req.send(new FormData(event.target));
};
var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 15,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
});


// FORM FILE COUNTER_________________________________________

let formInput = document.querySelector('.file_input');

formInput.addEventListener('change', (event) => {

    if (formInput.value != "") {

        inputLabeltext = ('Archivos seleccionados: ' + `${formInput.files.length}`);

        formInput.previousElementSibling.textContent = inputLabeltext;

    } else {
        formInput.previousElementSibling.textContent = 'Adjuntar archivo';
    }

});


// FAQ ACCORDEON________________________________________

const faqTitles = document.querySelectorAll(".faq__item_wrapper");

faqTitles.forEach(item => item.addEventListener('click', toggleAccordion));

function toggleAccordion() {
    const faqText = this.querySelector('.faq__item_text');
    

    faqText.classList.toggle('closed');

}



// __________________________________________________________________________

// new Glider(document.querySelector('.glider__top'), {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     duration: 15,
//     draggable: true,
//     dots: '.dots',
//     arrows: {
//         prev: '.glider-prev',
//         next: '.glider-next'
//     }
// });

// new Glider(document.querySelector('.glider__bottom'), {
//     slidesToShow: 2,
//     scrollLock: true,
//     duration: 5,
//     draggable: true,
//     rewind: true,

//     arrows: {
//         prev: '.glider__bottom-prev',
//         next: '.glider__bottom-next'
//     }
// });


// _________CITATION_______________________________________

const display = document.querySelector('.list')
clearList();




document.addEventListener('DOMContentLoaded', () => {

    const ajaxSend = async(formData) => {
        clearList();
        display.classList.add('_active');

        const fetchResp = await fetch('app.php', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
        }
        return await fetchResp.text();
    };

    const form = document.getElementById('cite_form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {

                    form.reset(); // очищаем поля формы
                    clearList();
                    display.classList.remove('_active');
                    printList();


                })
                .catch((err) => console.error(err))
        });
    });



function clearList() {
    display.textContent = '';

}


async function printList() {
    let getData = await fetch('t.json')
    let readyJson = await getData.json()

    // let readyData = JSON.stringify(readyJson)
    // document.querySelector('.list').textContent = readyJson;

    var p = document.createElement("p");

    if (readyJson === null) {
        p.innerText = "no links";
    } else {
        
            p.innerText = `Ссылок на сайт: ${readyJson}`;
            // target = list.lastChild;
            

        }
        display.appendChild(p);
    }

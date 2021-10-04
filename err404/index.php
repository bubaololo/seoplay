<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/img/favicon.png">
    <link rel="icon" type="image/png" href="/img/favicon32.png">
    <title>seoplay | Desarrollo de y promoción seo sitios web en Barcelona</title>
    <meta name="description" content="Creación y promoción de sitios en Barcelona y en toda España. Cree y optimice un sitio web con todas las reglas de SEO y UX / UI para obtener tráfico estable a su sitio web.">
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/slider.css">
    <link rel="stylesheet" href="/css/hystmodal.min.css">
    <!-- <link rel="stylesheet" href="css/glider.css"> -->
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/media.css">
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PKL2CBQ');
    </script>
    <!-- End Google Tag Manager -->
</head>




<body class="page_fix">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKL2CBQ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <?php
    include_once($_SERVER['DOCUMENT_ROOT'].'/header.php');
    ?>


<div class="scroll-content">
<p class="text_404">Página no encontrada
La página que intenta acceder no existe.
<br>
<a href="/" >  Puede volver a la página de inicio.</a></p>
</div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>

<script>
    var target = $('.scroll-content').get(0);
    var observer = new MutationObserver(function(mutation) {
        if (mutation[0].addedNodes.length) {
            $('.loading-text').removeClass('loading');
            $('.loading-text').css('display', 'none');
            var getEl = $('body').find('#get').get(0)
            if (getEl) {
                getEl.remove();
                canRender = true;
                loaded = false;
                forceReloadJS('https://uploads-ssl.webflow.com/');
            }

        }
    });
    var config = {
        attributes: true,
        childList: true,
        characterData: true
    }
    observer.observe(target, config);
</script>






<style>
    .blob-canvas {
        position: relative;
        margin-top: -120px;
        top: -1px;
    }
</style>

<script>
    let canvas, ctx;
    let render, init;
    let blob;

    class Blob {
        constructor() {
            this.points = [];
        }

        init() {
            for (let i = 0; i < this.numPoints; i++) {
                let point = new Point(this.divisional * (i + 1), this);
                // point.acceleration = -1 + Math.random() * 2;
                this.push(point);
            }
        }

        render() {
            let canvas = this.canvas;
            let ctx = this.ctx;
            let position = this.position;
            let pointsArray = this.points;
            let radius = this.radius;
            let points = this.numPoints;
            let divisional = this.divisional;
            let center = this.center;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

            let p0 = pointsArray[points - 1].position;
            let p1 = pointsArray[0].position;
            let _p2 = p1;

            ctx.beginPath();
            ctx.moveTo(center.x, center.y);
            ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

            for (let i = 1; i < points; i++) {

                pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

                let p2 = pointsArray[i].position;
                var xc = (p1.x + p2.x) / 2;
                var yc = (p1.y + p2.y) / 2;
                ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
                // ctx.lineTo(p2.x, p2.y);

                ctx.fillStyle = '#FF00FF';
                // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

                p1 = p2;
            }

            var xc = (p1.x + _p2.x) / 2;
            var yc = (p1.y + _p2.y) / 2;
            ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
            // ctx.lineTo(_p2.x, _p2.y);

            // ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = '#FF00FF';
            // ctx.stroke();

            /*
                ctx.fillStyle = '#000000';
                if(this.mousePos) {
                  let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
                  ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
                }
            */
            requestAnimationFrame(this.render.bind(this));
        }

        push(item) {
            if (item instanceof Point) {
                this.points.push(item);
            }
        }

        set color(value) {
            this._color = value;
        }
        get color() {
            return this._color || '#FF00FF';
        }

        set canvas(value) {
            if (value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
                this._canvas = canvas;
                this.ctx = this._canvas.getContext('2d');
            }
        }
        get canvas() {
            return this._canvas;
        }

        set numPoints(value) {
            if (value > 2) {
                this._points = value;
            }
        }
        get numPoints() {
            return this._points || 32;
        }

        set radius(value) {
            if (value > 0) {
                this._radius = value;
            }
        }
        get radius() {
            let rd = (window.innerWidth > 1000) ? window.innerHeight * 0.38 : window.innerWidth * 0.4;
            return this._radius || rd;
        }

        set position(value) {
            if (typeof value == 'object' && value.x && value.y) {
                this._position = value;
            }
        }
        get position() {
            return this._position || {
                x: 0.5,
                y: 0.5
            };
        }

        get divisional() {
            return Math.PI * 2 / this.numPoints;
        }

        get center() {
            return {
                x: this.canvas.width * this.position.x,
                y: this.canvas.height * this.position.y
            };
        }

        set running(value) {
            this._running = value === true;
        }
        get running() {
            return this.running !== false;
        }
    }


    class Point {
        constructor(azimuth, parent) {
            this.parent = parent;
            this.azimuth = Math.PI - azimuth;
            this._components = {
                x: Math.cos(this.azimuth),
                y: Math.sin(this.azimuth)
            };


            this.acceleration = -0.3 + Math.random() * 0.6;
        }

        solveWith(leftPoint, rightPoint) {
            this.acceleration = (-0.3 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
        }

        set acceleration(value) {
            if (typeof value == 'number') {
                this._acceleration = value;
                this.speed += this._acceleration * 2;
            }
        }
        get acceleration() {
            return this._acceleration || 0;
        }

        set speed(value) {
            if (typeof value == 'number') {
                this._speed = value;
                this.radialEffect += this._speed * 5;
            }
        }
        get speed() {
            return this._speed || 0;
        }

        set radialEffect(value) {
            if (typeof value == 'number') {
                this._radialEffect = value;
            }
        }
        get radialEffect() {
            return this._radialEffect || 0;
        }

        get position() {
            return {
                x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
                y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect)
            };

        }

        get components() {
            return this._components;
        }

        set elasticity(value) {
            if (typeof value === 'number') {
                this._elasticity = value;
            }
        }
        get elasticity() {
            return this._elasticity || 0.001;
        }
        set friction(value) {
            if (typeof value === 'number') {
                this._friction = value;
            }
        }
        get friction() {
            return this._friction || 0.0085;
        }
    }


    blob = new Blob();

    init = function() {
        canvas = document.createElement('canvas');
        canvas.setAttribute('class', 'blob-canvas');
        canvas.setAttribute('touch-action', 'none');

        //document.body.appendChild(canvas);
        $('.scroll-content').append(canvas);
        let resize = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        let oldMousePoint = {
            x: 0,
            y: 0
        };
        let hover = false;
        let mouseMove = function(e) {

            let pos = blob.center;
            let diff = {
                x: e.clientX - pos.x,
                y: e.clientY - pos.y
            };
            let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
            let angle = null;

            blob.mousePos = {
                x: pos.x - e.clientX,
                y: pos.y - e.clientY
            };

            if (dist < blob.radius && hover === false) {
                let vector = {
                    x: e.clientX - pos.x,
                    y: e.clientY - pos.y
                };
                angle = Math.atan2(vector.y, vector.x);
                hover = true;
                // blob.color = '#77FF00';
            } else if (dist > blob.radius && hover === true) {
                let vector = {
                    x: e.clientX - pos.x,
                    y: e.clientY - pos.y
                };
                angle = Math.atan2(vector.y, vector.x);
                hover = false;
                blob.color = null;
            }

            if (typeof angle == 'number') {

                let nearestPoint = null;
                let distanceFromPoint = 100;

                blob.points.forEach(point => {
                    if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                        // console.log(point.azimuth, angle, distanceFromPoint);
                        nearestPoint = point;
                        distanceFromPoint = Math.abs(angle - point.azimuth);
                    }

                });

                if (nearestPoint) {
                    let strength = {
                        x: oldMousePoint.x - e.clientX,
                        y: oldMousePoint.y - e.clientY
                    };
                    strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
                    if (strength > 100) strength = 100;
                    nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
                }
            }

            oldMousePoint.x = e.clientX;
            oldMousePoint.y = e.clientY;
        };
        // window.addEventListener('mousemove', mouseMove);
        window.addEventListener('pointermove', mouseMove);

        blob.canvas = canvas;
        blob.init();
        blob.render();
    };

    init();
</script>


        <?php
    include_once($_SERVER['DOCUMENT_ROOT'].'/footer.php');
    ?>
            <script src="/js/hystmodal.min.js"></script>

            <script src="/js/main.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
            <script src="//translate.google.com/translate_a/element.js?cb=TranslateInit"></script>
            

</body>

</html>
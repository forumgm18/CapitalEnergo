let baloon = '<div class="contact-info baloon">\n' +
    '                <div class="contact-title">\n' +
    '                  <svg class="icon"><use xlink:href="#icon-logo-only"></use></svg>\n' +
    '                  <span>ООО «КЭПИТАЛ-ЭНЕРГО»</span>\n' +
    '                </div>\n' +
    '                <div class="contact-info-content">\n' +
    '                  <a href="#" class="contact-item">\n' +
    '                    <svg class="icon"><use xlink:href="#icon-location"></use></svg>\n' +
    '                    <span>г. Москва,<br> ул. Салтыковская, д. 8, офис 208</span>\n' +
    '                  </a>\n' +
    '                  <div class="contact-item">\n' +
    '                    <svg class="icon"><use xlink:href="#icon-phone"></use></svg>\n' +
    '                    <span class="phone">\n' +
    '                      <span>\n' +
    '                        <span>тел.: </span>\n' +
    '                        <a href="tel:84953801078">(495) 380-10-78, </a>\n' +
    '                      </span>\n' +
    '                      <span>\n' +
    '                        <span>факс: </span>\n' +
    '                        <a href="tel:84992703888">(499) 270-38-88</a>\n' +
    '                      </span>\n' +
    '                    </span>\n' +
    '                  </div>\n' +
    '                  <a href="mailto:info@capital-energo.ru" class="contact-item">\n' +
    '                    <svg class="icon"><use xlink:href="#icon-mail"></use></svg>\n' +
    '                    <span>info@capital-energo.ru</span>\n' +
    '                  </a>\n' +
    '\n' +
    '                </div>\n' +
    '              </div>\n'

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.72701906902205,37.86047699999994],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
        controls:['zoomControl']
    });
    myMap.geoObjects
        .add(new ymaps.Placemark([55.72701906902205,37.86047699999994], {
            balloonContent: baloon
        }, {
            preset: 'islands#icon',
            iconColor: '#6bc02f'
        }));

}
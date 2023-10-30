function init() {
	let map = new ymaps.Map('detail_geo_map', {
		center: [55.770629, 49.187660],
		zoom: 17
	});

   map.geoObjects.removeAll();

   let placemark = new ymaps.Placemark([55.770370, 49.187703], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/mark.png',
		iconImageSize: [60, 68],
		iconImageOffset: [-20, -90]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
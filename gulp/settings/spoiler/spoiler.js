'use strict';

const $spoilerBtns = document.querySelectorAll('._spoiler__btn');
const $spoilerDropliist = document.querySelectorAll('._spoiler__droplist');

$spoilerBtns.forEach(el => {
	el.addEventListener('click', (e)=>{
		//текущее нажатие кнопки
		let currentBtn = e.currentTarget;
		//находим сам выпадающий текущий список через родителя
		let droplist = currentBtn.closest('._spoiler').querySelector('._spoiler__droplist');

		//console.log(currentBtn);//покажет на какой button нажали
		//console.log(droplist)//покажет droplist в этом button

		$spoilerBtns.forEach(el =>{
			//удалить все классы у кнопок которые уже есть активный класс
			if(el !== currentBtn){
				el.classList.remove('_spoiler__btn--active');
			}
		});

		$spoilerDropliist.forEach(el => {
			if (el !== droplist) {
				el.classList.remove('_spoiler__droplist--active')
			}
		});

		droplist.classList.toggle('_spoiler__droplist--active');
		//добавили класс активной кнопки
		currentBtn.classList.toggle('_spoiler__btn--active');
	});

	//удаляет все классы кнопки и выпадающего списка при клике на любую часть страницы
	document.addEventListener('click',(e)=>{
		//если у кнопок есть родитель то в условие можно поставить родительский класс вместо ._spoiler
		if (!e.target.closest('._spoiler')){
			$spoilerBtns.forEach(el =>{
					el.classList.remove('_spoiler__btn--active');
			});
	
			$spoilerDropliist.forEach(el => {
					el.classList.remove('_spoiler__droplist--active')
			});
		}
	});
});
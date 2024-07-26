export function modal() {
	let scrollPosition = 0 // Глобальная переменная для хранения позиции прокрутки

	// Для открытия модалок
	function open(socialID, modalID) {
		const social = document.querySelector(`#${socialID}`)
		const modal = document.querySelector(`#${modalID}`)
		
		social.addEventListener('click', () => {
			scrollPosition = window.pageYOffset // Сохраняем текущую позицию прокрутки
			modal.classList.add(`${modalID}_active`) // Добавляем класс - открываем модалку
			document.body.style.overflow = 'hidden' // Останавливаем прокрутку сайта
		})
	}

	// Для закрытия модалок
	function close(modalID) {
		const modal = document.querySelector(`#${modalID}`)
		const cross = document.querySelector(`#${modalID}__cross`)
		
		cross.addEventListener('click', () => {
			window.scrollTo(0, scrollPosition) // Восстанавливаем позицию прокрутки
			modal.classList.remove(`${modalID}_active`) // Убирает класс - закрывает модалку
			document.body.style.overflow = '' // Восстанавливает прокрутку сайта
		})
	}

	// Старт - Для раскрытия номера в modal-call
	const bg = document.querySelector('.modal-call__bg')
	const btn = document.querySelector('.modal-call__btn')
	btn.addEventListener('click', () => {
		bg.classList.add('modal-call__bg_active')
		btn.classList.add('modal-call__btn_active')

		setTimeout(() => {
			bg.style.display = 'none'
			btn.style.display = 'none'
		}, 1000)
	})

	function hideElements() {
		const screenWidth = window.innerWidth
		const modalNumberBg = document.querySelector('.modal-call__bg')
		const modalNumberBtn = document.querySelector('.modal-call__btn')

		if (screenWidth < 768) {
			modalNumberBg.style.display = 'none'
			modalNumberBtn.style.display = 'none'
		} else {
			modalNumberBg.style.display = ''
			modalNumberBtn.style.display = ''
		}
	}
	// Вызов функции при загрузке страницы и изменении размера окна
	window.addEventListener('load', hideElements)
	window.addEventListener('resize', hideElements)
	// Конец - Для раскрытия номера в modal-call

	// Открытие модалок
	open('phone-1', 'modal-order')
	open('phone-2', 'modal-order')

	open('order-1', 'modal-order')
	open('order-2', 'modal-order')

	open('call-1', 'modal-call')
	open('call-2', 'modal-call')

	open('ws', 'modal-ws')
	open('tg', 'modal-tg')

	// Закрытие модалок
	close('modal-call')
	close('modal-order')
	close('modal-ws')
	close('modal-tg')
	close('modal-thanks')
}
export function modal() {

	// Для закрытия модалок
	function open(socialID, modalID) {
		const social = document.querySelector(`#${socialID}`)
		const modal = document.querySelector(`#${modalID}`)

		social.addEventListener('click', () => {
			modal.classList.add(`${modalID}_active`) // Добавляем класс - открываем модалку
			document.body.style.overflow = 'hidden' // Останавливаем прокрутку сайта
		})
	}

	// Для закрытия модалок
	function close(modalID) {
		const modal = document.querySelector(`#${modalID}`)
		const cross = document.querySelector(`#${modalID}__cross`)

		cross.addEventListener('click', () => {
			modal.classList.remove(`${modalID}_active`) // Убирает класс - закрывает модалку
			document.body.style.overflow = '' // Восстанавливает прокрутку сайта
		})
	}

	open('order-1', 'modal-order')
	open('order-2', 'modal-order')
	open('viber', 'modal-viber')
	open('ws', 'modal-ws')
	open('tg', 'modal-tg')
	
	close('modal-order')
	close('modal-viber')
	close('modal-ws')
	close('modal-tg')
}
const link = document.getElementById('link'),
	themeBtn = document.getElementById('themeBtn'),
	iconBg = document.getElementById('icon-bg')

const currDisplay = document.getElementById('curr-display'),
	prevDisplay = document.getElementById('prev-display'),
	numbers = document.querySelectorAll('.number'),
	operators = document.querySelectorAll('.operator'),
	clear = document.querySelector('.clear'),
	ac = document.querySelector('.ac'),
	equally = document.querySelector('.equally')

let operation

const getNumber = num => {
	currDisplay.innerText += num
}

numbers.forEach(number => {
	number.addEventListener('click', e => {
		const keyValue = e.target.innerText
		getNumber(keyValue)
	})
})

const getOperator = operator => {
	if (currDisplay.innerText === '') return
	operation = operator
	currDisplay.innerText += operator
	prevDisplay.innerText = currDisplay.innerText
	currDisplay.innerText = ''
}

operators.forEach(button => {
	button.addEventListener('click', e => {
		const keyValue = e.target.innerText
		getOperator(keyValue)
	})
})

const compute = () => {
	let result
	const previousValue = parseFloat(prevDisplay.innerText)
	const currentValue = parseFloat(currDisplay.innerText)

	if (isNaN(previousValue) || isNaN(currentValue)) return
	switch (operation) {
		case '+':
			result = previousValue + currentValue
			break
		case '-':
			result = previousValue - currentValue
			break
		case '*':
			result = previousValue * currentValue
			break
		case '/':
			result = previousValue / currentValue
			break
		default:
			return
	}
	currDisplay.innerText = result
}

ac.addEventListener('click', () => {
	currDisplay.innerText = ''
	prevDisplay.innerText = ''
})

clear.addEventListener('click', () => {
	currDisplay.innerText = currDisplay.innerText.slice(0, -1)
})

equally.addEventListener('click', () => {
	compute()
	prevDisplay.innerText = ''
})

const changeTheme = () => {}
themeBtn.addEventListener('click', () => {
	if (link.getAttribute('href') === '/css/light-theme.css') {
		link.href = '/css/dark-theme.css'
		iconBg.classList.remove('icon-bg-initial')
		iconBg.classList.add('icon-bg-final')
	} else {
		link.href = '/css/light-theme.css'
		iconBg.classList.remove('icon-bg-final')
		iconBg.classList.add('icon-bg-initial')
	}
})
changeTheme()

// seleção de elemetos
const multiplicationform = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplicator')

const multiplicationTitle = document.querySelector('#multiplication-title span')

const multiplicationTable = document.querySelector('#multiplication-operations')

// funçoes
const createTable = (number, multiplicatornumber) => {
    multiplicationTable.innerHTML = ''

    for (i = 1; i <= multiplicatornumber; i++) {
        const result = number * i

        const template = `<div class="row">
            <div class="operation">${number} x ${i}=</div>
            <div class="result">${result}</div>
        </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, 'text/html')
        const row = htmlTemplate.querySelector('.row')

        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = number
}

// eventos
multiplicationform.addEventListener('submit', (e) => {
    e.preventDefault()

    const multiplicationnumber = +numberInput.value

    const multiplicatornumber = +multiplicationInput.value

    if (!multiplicationnumber || !multiplicatornumber) return

    createTable(multiplicationnumber, multiplicatornumber)
})

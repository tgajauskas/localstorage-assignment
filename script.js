const fullNameInput = document.getElementById('fullName')
const submitButton = document.getElementById('submitButton')
const container = document.querySelector('.container')

submitButton.addEventListener('click', function() {
    const fullName = fullNameInput.value.trim()

    if (fullName !== '') {
        const [firstName, lastName] = fullName.split(' ')

        if (firstName && lastName) {
            const person = { firstName, lastName }
            const savedData = JSON.parse(localStorage.getItem('people')) || []
            savedData.push(person)
            localStorage.setItem('people', JSON.stringify(savedData))

            fullNameInput.value = ''
            displayData()
            
        } else {
            alert('Įveskite ir vardą, ir pavardę.')
        }
    } else {
        alert('Įveskite savo vardą ir pavardę.')
    }
});

function displayData() {
    const savedData = JSON.parse(localStorage.getItem('people')) || []
    const table = document.createElement('table')
    const headerRow = table.insertRow()
    const firstNameHeader = headerRow.insertCell(0)
    const lastNameHeader = headerRow.insertCell(1)

    firstNameHeader.textContent = 'Vardas'
    lastNameHeader.textContent = 'Pavardė'

    savedData.forEach(person => {
        const row = table.insertRow()
        const nameCell = row.insertCell(0)
        const lastNameCell = row.insertCell(1)
        nameCell.textContent = person.firstName
        lastNameCell.textContent = person.lastName
    })

    const tableContainer = document.createElement('div')
    tableContainer.id = 'table-container'
    tableContainer.appendChild(table)

    container.insertAdjacentElement('afterend', tableContainer)
}

displayData()
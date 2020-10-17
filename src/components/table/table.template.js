const CODES = {
    A: 65,
    Z: 90
}

function createCell() {
    return `
         <div class="cell" contenteditable></div>
    `
}

function createColumn(column) {
    return `
     <div class="column">${column}</div>
     `
}

function createRow(index, content) {
    return `
    <div class="row">
       <div class="row-info">${index ? index : ''}</div>
       <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)

}

export function creteTable(rowsCount = 15) {
    const amountCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(amountCount)
        .fill('')
        .map(toChar)
        .map(createColumn)
        .join('')

    rows.push(createRow(null, cols))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(amountCount).fill('')
            .map(createCell)
            .join('')

        rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}
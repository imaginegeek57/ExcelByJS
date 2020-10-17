import {ExcelComponent} from '@core/ExcelComponent'
import {creteTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
    static className= 'excel__table'

    toHTML() {
        return creteTable(30)
    }
}

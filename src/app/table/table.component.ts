import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {

  tableRows = [
    {
      id: 1,
      img: 'user-01.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: 200,
      status: 'active',
      showMenu: false
    },
    {
      id: 2,
      img: 'user-02.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: 200,
      status: 'active',
      showMenu: false
    },
    {
      id: 3,
      img: 'user-03.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: 200,
      status: 'signature pending',
      showMenu: false
    }
  ]

  showMenu(rowId: number) {
    this.tableRows.find(row => row.id == rowId).showMenu = true
  }

  hideMenu(rowId: number) {
    this.tableRows.find(row => row.id == rowId).showMenu = false
  }

}

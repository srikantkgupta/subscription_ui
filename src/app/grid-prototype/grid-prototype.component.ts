import { Component, OnInit } from '@angular/core';
// import { ModalsService } from '../modal.service';

@Component({
  selector: 'app-grid-prototype',
  templateUrl: './grid-prototype.component.html',
  styleUrls: ['./grid-prototype.component.css']
})
export class GridPrototypeComponent implements OnInit {
  //grid
  //   columnDefs = [
  //     {headerName: 'Make', field: 'make'},
  //     {headerName: 'Model', field: 'model'},
  //     {headerName: 'Price', field: 'price'}
  // ];

  // rowData = [
  //     {make: 'Toyota', model: 'Celica', price: 35000},
  //     {make: 'Ford', model: 'Mondeo', price: 32000},
  //     {make: 'Porsche', model: 'Boxter', price: 72000}
  // ];

  // constructor(private modalService: ModalsService) { }
  // //open popup code start
  // openModal(id: string) {
  //   this.modalService.open(id);

  // }
  // //open popup code end

  // //close popup code start
  // closeModal(id: string) {
  //   this.modalService.close(id);
  // }
  // //close popup code end
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', editable: true }
  ];

  rowData = [];

  ngOnInit() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }


}

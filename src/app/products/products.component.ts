import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  // private rowData: [];
  private rowData;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "XYZ",
        field: "age"
      },
      {
        headerName: "Country",
        field: "country"
      },
      {
        headerName: "Year",
        field: "year"
      },
      {
        headerName: "Date",
        field: "date"
      },
      {
        headerName: "Sport",
        field: "sport"
      },
      {
        headerName: "Gold",
        field: "gold"
      },
      {
        headerName: "Silver",
        field: "silver"
      },
      {
        headerName: "Bronze",
        field: "bronze"
      },
      {
        headerName: "price",
        field: "total"
      }
    ];
    this.defaultColDef = {
      resizable: true,
      width: 110
    };
    this.rowSelection = "multiple";
  }

  onQuickFilterChanged() {
    var inputElement= <HTMLInputElement>document.getElementById("quickFilter");
    this.gridApi.setQuickFilter(inputElement.value);
  }







// export to Csv code start
  onBtExport() {
    // var inputElements= <HTMLInputElement>document.getElementById("#fileName");
    var params = {
     
      // fileName: inputElements.value,
    };
    this.gridApi.exportDataAsCsv(params);
  }
// export to Csv code end












  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}
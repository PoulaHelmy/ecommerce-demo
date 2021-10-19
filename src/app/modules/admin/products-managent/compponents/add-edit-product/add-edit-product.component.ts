import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) date: {},
    private dialogRef: MatDialogRef<AddEditProductComponent>
  ) {
  }

  ngOnInit(): void {
  }

}

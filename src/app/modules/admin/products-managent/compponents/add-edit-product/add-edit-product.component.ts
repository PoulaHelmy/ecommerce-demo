import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductsService} from "@core/http/services/products.service";
import {ToasterService} from "@shared/services/toastr.service";
import {Observable, of} from "rxjs";
import {CategoryService} from "@core/http/services/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductModel} from "@core/data/interface/product.model";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  categories$: Observable<string[]> = of([]);
  ItemForm!: FormGroup;
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean; id: number; item: ProductModel },
    private dialogRef: MatDialogRef<AddEditProductComponent>,
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private toasterService: ToasterService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.ItemForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    if (this.data.isEdit) {
      this.ItemForm.controls.title.patchValue(this.data.item.title);
      this.ItemForm.controls.price.patchValue(this.data.item.price);
      this.ItemForm.controls.description.patchValue(this.data.item.description);
      this.ItemForm.controls.image.patchValue(this.data.item.image);
      this.ItemForm.controls.category.patchValue(this.data.item.category);
    }
    console.log(this.data);
  }


  onSubmit() {
    this.loading = true;
    if (this.data.isEdit) {
      const data: ProductModel = {
        ...this.ItemForm.value,
        id: this.data.id
      }
      this.productsService.updateProduct(this.data.id, data).subscribe((res) => {
        this.loading = false;
        this.dialogRef.afterClosed().pipe(
          take(1),
          map((res) => {
            return res;
          })
        );
        this.dialogRef.close({statue: true, data: res});
      }, (error) => {
        this.dialogRef.close({statue: false, data: null});
      })
    } else {
      this.productsService.addNewProduct(this.ItemForm.value).subscribe((res) => {
        this.loading = false;
        this.dialogRef.afterClosed().pipe(
          take(1),
          map((res) => {
            return res;
          })
        );
        this.dialogRef.close({statue: true, data: res});
      }, (error) => {
        this.dialogRef.close({statue: false, data: null});
      });
    }
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}

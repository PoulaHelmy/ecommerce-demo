import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProductModel} from "@core/data/interface/product.model";
import {ProductsService} from "@core/http/services/products.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEditProductComponent} from "@app/modules/admin/products-managent/compponents/add-edit-product/add-edit-product.component";
import {ConfirmDialogService} from "@shared/components/confirm-dialog/confirm.service";
import {ToasterService} from "@shared/services/toastr.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'category', 'price', 'title', 'description', 'actions'];
  dataSource: MatTableDataSource<ProductModel> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  loading = false;

  constructor(private productsService: ProductsService,
              private dialog: MatDialog,
              private confirmDialogService: ConfirmDialogService,
              private toasterService: ToasterService
  ) {
  }


  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.dataSource = new MatTableDataSource<ProductModel>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OpenDialog(isEdit: boolean = false, id: number = 0, item: ProductModel = {} as ProductModel): void {
    console.log('OpenDialog');
    this.dialog.open(AddEditProductComponent, {
      data: {
        isEdit,
        id,
        item
      }
    }).afterClosed().subscribe((res) => {
      const index = this.dataSource.data.indexOf(item);
      if (isEdit) {
        this.dataSource.data[index] = res;
        this.dataSource._updateChangeSubscription();
        this.toasterService.showSuccess('Item Updated Successfully');
      } else {
        this.dataSource.data.push(res);
        this.dataSource._updateChangeSubscription();
        this.toasterService.showSuccess('Item Created Successfully');
      }
    });
  }

  DeleteItem(item: ProductModel): void {
    this.confirmDialogService.open({
      title: 'Are you sure to delete this item',
      cancelText: 'Cancel',
      confirmText: 'Delete'
    });
    this.confirmDialogService.confirmed().subscribe((confirm) => {
      if (confirm) {
        this.loading = true;
        this.productsService.deleteProduct(item.id).subscribe((_) => {
          const index = this.dataSource.data.indexOf(item);
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
          this.loading = false;
          this.toasterService.showSuccess('Item Deleted Successfully');
        });
      }
    })
  }
}

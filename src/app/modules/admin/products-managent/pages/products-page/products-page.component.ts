import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProductModel} from "@core/data/interface/product.model";
import {ProductsService} from "@core/http/services/products.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEditProductComponent} from "@app/modules/admin/products-managent/compponents/add-edit-product/add-edit-product.component";

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

  constructor(private productsService: ProductsService, private dialog: MatDialog,
  ) {
  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource<ProductModel>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OpenDialog(isEdit: boolean = false, id: number = 0): void {
    console.log('OpenDialog');
    this.dialog.open(AddEditProductComponent, {
      data: {
        isEdit,
        id
      }
    })
  }

  DeleteItem(id: number): void {
    console.log('DeleteItem');
  }
}

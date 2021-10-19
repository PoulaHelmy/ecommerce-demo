import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "@core/http/services/category.service";

@Component({
  selector: 'app-categories-header',
  templateUrl: './categories-header.component.html',
  styleUrls: ['./categories-header.component.scss']
})
export class CategoriesHeaderComponent implements OnInit {
  AllCategories: string[] = [];

  constructor(private http: HttpClient, private CategoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe((res) => {
      this.AllCategories = res;
    })
  }

}

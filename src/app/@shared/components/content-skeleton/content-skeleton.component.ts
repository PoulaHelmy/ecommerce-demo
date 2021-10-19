import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-skeleton',
  templateUrl: './content-skeleton.component.html',
  styleUrls: ['./content-skeleton.component.scss']
})
export class ContentSkeletonComponent implements OnInit {
  @Input() type!: string;
  @Input() speed = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}

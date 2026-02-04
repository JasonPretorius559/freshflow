import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface StockResponse {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  records: any[];
}

@Component({
  selector: 'app-stock-grid',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  standalone: false
})
export class StockGridComponent implements OnInit {
  records: any[] = [];
  page = 1;
  pageSize = 50;
  totalCount = 0;
  totalPages = 0;
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    
    const params = new HttpParams()
      .set('page', this.page.toString())
      .set('pageSize', this.pageSize.toString());

    this.http
      .get<StockResponse>(`http://localhost:5001/api/stock`, { params })
      .pipe(
        catchError(error => {
          console.error('Error loading stock data:', error);
          this.loading = false;
          return of(null);
        })
      )
      .subscribe(res => {
        if (res) {
          this.records = res.records;
          this.totalCount = res.totalCount;
          this.totalPages = res.totalPages;
        }
        this.loading = false;
      });
  }

  onOptionChanged(e: any): void {
    let shouldLoad = false;

    if (e.name === 'paging.pageIndex') {
      this.page = e.value + 1;
      shouldLoad = true;
    }

    if (e.name === 'paging.pageSize') {
      this.pageSize = e.value;
      this.page = 1; // Reset to first page on page size change
      shouldLoad = true;
    }

    if (shouldLoad) {
      this.load();
    }
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ENDPOINTS from '../enviroment/endpoints';

@Injectable({
  providedIn: 'root',
})
export class IntakeService {
  private readonly baseUrl = ENDPOINTS.intakes;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  uploadPo(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(ENDPOINTS.uploadPoFile, formData);
  }

  getAvailablePos() {
    return this.http.get<any[]>(ENDPOINTS.getLoadedPoFiles);
  }

  loadPo(id: number) {
  return this.http.post(`${ENDPOINTS.loadPoFileId}/${id}`, {});
}

  getIntakeById(id: number) {
      return this.http.get(`${ENDPOINTS.EditIntake}/${id}`, {});
  }

}
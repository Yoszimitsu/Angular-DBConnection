import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const url = 'http://localhost:9000/api'

@Injectable({
  providedIn: 'root'
})
export class UidService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(url)
  }

  get(uid) {
    return this.http.get(`${url}/${uid}`);
  }

  create(uid, data) {
    return this.http.post(`${url}/${uid}`, data);
  }

  update(uid, data) {
    return this.http.put(`${url}/${uid}`, data);
  }

  delete(uid) {
    return this.http.delete(`${url}/${uid}`);
  }

  deleteAll() {
    return this.http.delete(url);
  }
}

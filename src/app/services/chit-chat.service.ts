import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {ChitChat} from "../models/ChitChat.model";

const controller = "chitChat";

@Injectable({
  providedIn: 'root'
})
export class ChitChatService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(): Observable<ChitChat[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<ChitChat[]>;
  }

  public getSingle(id: string): Observable<ChitChat> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: id,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<ChitChat>;
  }

  public getRandom(): Observable<ChitChat> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "random",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<ChitChat>;
  }

  public create(chitChat: ChitChat): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "unhidden"
    });
    return this.http.post(url, chitChat, CookieHelper.authHeaders) as Observable<any>;
  }

  public suggest(chitChat: ChitChat): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, chitChat, CookieHelper.authHeaders) as Observable<any>;
  }

  public update(chitChat: ChitChat): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, chitChat, CookieHelper.authHeaders) as Observable<any>;
  }

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}

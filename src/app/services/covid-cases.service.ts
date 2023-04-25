import {Injectable} from '@angular/core';
import {Country} from "../models/country";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {MinMaxCases} from "../models/min-max-cases";

@Injectable({
    providedIn: 'root'
})
export class CovidCasesService {

    constructor(private httpClient: HttpClient) {
    }

    getCountryList() {
        return this.httpClient.get<Country[]>(`${environment.baseUrl}/countries`)
    }

    getMinMaxCases(country: string, from: string, to: string) {
        const url = `${environment.baseUrl}/country/${country}`;
        const params = new HttpParams()
            .set("from", from)
            .set("to", to);

        return this.httpClient.get<MinMaxCases>(url, {params})
    }
}

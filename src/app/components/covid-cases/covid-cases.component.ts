import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Country} from "../../models/country";
import {CovidCasesService} from "../../services/covid-cases.service";
import {MinMaxCases} from "../../models/min-max-cases";

@Component({
    selector: 'app-covid-cases',
    templateUrl: './covid-cases.component.html',
    styleUrls: ['./covid-cases.component.css']
})
export class CovidCasesComponent implements OnInit {
    covidCasesForm: FormGroup;
    countryList: Country[];
    minMaxCases: MinMaxCases;

    constructor(private formBuilder: FormBuilder,
                private covidCasesService: CovidCasesService) {
    }

    ngOnInit(): void {
        this.covidCasesService.getCountryList().subscribe({
            next: countries => this.countryList = countries
        });

        this.covidCasesForm = this.formBuilder.group({
            country: [null, Validators.required],
            from: [null, Validators.required],
            to: [null, Validators.required]
        });
    }

    get selectedCountry() {
        return this.covidCasesForm.controls['country'];
    }

    get from() {
        return this.covidCasesForm.controls['from'];
    }

    get to() {
        return this.covidCasesForm.controls['to'];
    }

    submit() {
        const country = this.selectedCountry.value;
        const from = this.from.value;
        const to = this.to.value;

        this.covidCasesService.getMinMaxCases(country, from, to).subscribe({
            next: minMaxCases => {
                this.minMaxCases = minMaxCases;
            },
            error: err => console.log(err)
        });
    }
}

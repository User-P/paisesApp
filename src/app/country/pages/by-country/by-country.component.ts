import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  termino = 'Hola Mundo';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(termino: string) {
    this.error = false;
    this.termino = termino;

    this.countryService.searchCountry(this.termino).subscribe(
      (resp) => {
        console.log(resp);
        this.countries = resp;
      },
      (err) => {
        this.error = true;
        console.log(err);
        this.countries = [];
      }
    );
  }

  suggest(termino: string) {
    this.error = false;
  }
}

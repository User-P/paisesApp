import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  termino = 'Hola Mundo';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(termino: string) {
    this.error = false;
    this.termino = termino;

    this.countryService.searchCapital(this.termino).subscribe(
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

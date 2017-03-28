import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { PlanetsService } from './planets.service';
import { API_URL } from './../tokens/core.tokens';

describe('UsersService', () => {
  let service: PlanetsService;
  let response$: BehaviorSubject<any>;

  const responsePage1 = {
    results: [ { id: 1 }, { id: 2 } ]
  };

  const responsePage2 = {
    results: [ { id: 3 }, { id: 4 } ]
  }

  const HttpStub = {
    get() {}
  };

  beforeEach(() => {
    response$ = new BehaviorSubject({});

    spyOn(HttpStub, 'get').and.returnValue(response$);

    const testBed = TestBed.configureTestingModule({
      providers: [
        PlanetsService,
        { provide: Http, useValue: HttpStub },
        { provide: API_URL, useValue: 'www.fake-url.com' }
      ]
    });

    service = testBed.get(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPlanets method:', () => {

    describe('when no page number is passed:', () => {
      let request$;

      beforeEach(() => {
        request$ = service.getPlanets();
        response$.next({ json: () => responsePage1 });
      })

      it('calls the get method on the Http service with the default page number set to 1:', () => {
        expect(HttpStub.get).toHaveBeenCalledWith(`www.fake-url.com/planets?page=1`);
      });

      it('shoud fetch data from the api', done => {
        request$.subscribe(res => {
          expect(res).toEqual(responsePage1.results);
          done();
        });
      });

    });

    describe('when the page number is passed:', () => {
      let request$;

      beforeEach(() => {
        request$ = service.getPlanets(2);
        response$.next({ json: () => responsePage2 });
      })

      it('calls the get method on the Http service:', () => {
        expect(HttpStub.get).toHaveBeenCalledWith(`www.fake-url.com/planets?page=2`);
      });

      it('shoud fetch data from the api', done => {
        request$.subscribe(res => {
          expect(res).toEqual(responsePage2.results);
          done();
        });
      });
    });

  });

});

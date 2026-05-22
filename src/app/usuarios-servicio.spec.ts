import { TestBed } from '@angular/core/testing';

import { UsuariosServicio } from './usuarios-servicio';

describe('UsuariosServicio', () => {
  let service: UsuariosServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TienditaPage } from './tiendita.page';

describe('TienditaPage', () => {
  let component: TienditaPage;
  let fixture: ComponentFixture<TienditaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TienditaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TienditaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

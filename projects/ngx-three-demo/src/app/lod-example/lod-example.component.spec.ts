import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LODExampleComponent } from './lod-example.component';
import { AppModule } from '../app.module';


describe('LODExampleComponent', () => {
  let component: LODExampleComponent;
  let fixture: ComponentFixture<LODExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LODExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

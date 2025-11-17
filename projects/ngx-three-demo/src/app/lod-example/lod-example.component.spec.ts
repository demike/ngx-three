import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LODExampleComponent } from './lod-example.component';


describe('LODExampleComponent', () => {
  let component: LODExampleComponent;
  let fixture: ComponentFixture<LODExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LODExampleComponent]
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

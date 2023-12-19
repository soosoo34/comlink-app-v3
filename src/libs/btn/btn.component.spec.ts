import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BtnComponent} from 'src/app/libs/btn/btn.component';

describe('BtnComponent', () => {
    let component: BtnComponent;
    let fixture: ComponentFixture<BtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BtnComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should disable button when isLoading is true', () => {
        component.isLoading = true;
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector('button');
        expect(button.disabled).toBe(true); // Jest utilise toBe pour les assertions
    });

    it('should display spinner when isLoading is true', () => {
        component.isLoading = true;
        fixture.detectChanges();
        const spinner = fixture.nativeElement.querySelector('.spinner');
        expect(spinner).toBeDefined(); // Jest utilise toBeDefined pour vérifier l'existence
    });

    // D'autres tests pour isLoading = false, etc.
});

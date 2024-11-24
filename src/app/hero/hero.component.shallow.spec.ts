// TestBed test both the component and template together
// Test one unit at a time
// Takes a single parameter which is a object and match the same parameter as the 
// in the appModule

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent (shallow tests)', () => {
    // fixture is a wrapper for an component and use in testing
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            // Do try to validate the template/ schema
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 1};
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });

    it('should render the hero naem in the anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        fixture.detectChanges();
        // Gets a handle to the DOM element that represents the container for the template
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');

        let deA = fixture.debugElement.query(By.css('a'));
        expect(deA.nativeElement.textContent).toContain('SuperDude');
    });
});
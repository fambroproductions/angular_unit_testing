import { HeroesComponent } from "./heroes.component";
import { Hero } from '../hero';

import { of } from 'rxjs';
describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 3, name: 'SuperDude', strength: 55}
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    });

    describe('getHeroes', () => {
        it('should have initial hero list', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));
            component.heroes = HEROES;

            component.getHeroes();

            expect(component.heroes.length).toBe(3);
        });
    });

    describe('add', () => {
        it('should add an hero to the hero list', () => {
            mockHeroService.addHero.and.returnValue(of(HEROES));
            component.heroes = HEROES;

            const newHero: Hero = {id: 4, name: "John Doe", strength: 1};

            component.add(newHero.name);

            expect(component.heroes.length).toBe(4);
        });
    });

    describe('delete', () => {
        it('should remove the indicated hero from the hero list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
            expect(component.heroes[0].name).toEqual('SpiderDude');
            expect(component.heroes[1].name).toEqual('Wonderful Woman');
            expect(component.heroes[2]).toBeUndefined();
        });
    });


})
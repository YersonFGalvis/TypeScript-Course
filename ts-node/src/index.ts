import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Charmander';

charmander.savePokemonToDB(1);

charmander.publicApi = 'https://www.youtube.com/watch?v=LkOA07F9ZCs&ab_channel=midulive';
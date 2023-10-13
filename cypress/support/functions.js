export class PetCounter {
    constructor(pets) {
      this.pets = pets;
    }

    sameNamePetCounter() {
      const nameCounts = {};
  
      this.pets.forEach((pet) => {
        const name = pet.name;
  
        if (nameCounts[name]) {
          nameCounts[name]++;
        } else {
          nameCounts[name] = 1;
        }
      });
  
      return nameCounts;
    }
  }
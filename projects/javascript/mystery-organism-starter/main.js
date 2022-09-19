// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (idNo, dnaArr) => {
  return idNo = {
    specinmenNum: idNo,
    dna: dnaArr,
    mutate() {
      let randomBase = Math.floor(Math.random() * dnaArr.length);
      let randomMut = Math.floor(Math.random() * 3);
      if (this.dna[randomBase] === 'A') {
        let basePool = ['T', 'C', 'G'];
        this.dna.splice(randomBase, 1, basePool[randomMut]);
      } else if (this.dna[randomBase] === 'T') {
        let basePool = ['A', 'C', 'G'];
        this.dna.splice(randomBase, 1, basePool[randomMut]);
      } else if (this.dna[randomBase] === 'C') {
        let basePool = ['T', 'A', 'G'];
        this.dna.splice(randomBase, 1, basePool[randomMut]);
      } else if (this.dna[randomBase] === 'G') {
        let basePool = ['T', 'C', 'A'];
        this.dna.splice(randomBase, 1, basePool[randomMut]);
      }
    },

    compareDNA(pAequor) {
      let similarityCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < pAequor.dna.length; j++) {
          if (this.dna[i] === pAequor.dna[j]) {
            similarityCounter++;
          }
        }
      }
      let percentage = `The two specimen have ${similarityCounter / dnaArr.length}% DNA in common.`;
      return percentage;
    },

    willLikelySurvive() {
      let baseCounter = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          baseCounter++;
        }
      }
      if (baseCounter / dnaArr.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  };
}

const org1 = pAequorFactory(001, mockUpStrand());
org1.mutate();
console.log(org1.dna);






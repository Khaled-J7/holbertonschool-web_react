// Define MajorCredits interface with brand property
interface MajorCredits {
  credits: number;
  readonly _majorBrand: unique symbol;
}

// Define MinorCredits interface with brand property
interface MinorCredits {
  credits: number;
  readonly _minorBrand: unique symbol;
}

// Sum major credits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

// Sum minor credits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

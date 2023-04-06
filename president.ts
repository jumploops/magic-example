// president.ts
type President = {
  name: string;
  birthState: string;
  birthDate: Date;
  deceasedDate: Date;
  termStart: number;
  termEnd: number;
};

type PresidentArray = [];

function sameBirthState(president1: President, president2: President): boolean {
  return president1.birthState === president2.birthState;
}

function contemporaries(president1: President, president2: President): boolean {
  return (
    (president1.birthDate <= president2.deceasedDate) &&
    (president2.birthDate <= president1.deceasedDate)
  );
}

// Simulate an async request to fetch president information
async function fetchPresidentInfo(id: number): Promise<President> {
  const mockData: President[] = [
    {
      name: "George Washington",
      birthState: "Virginia",
      birthDate: new Date(1732, 1, 22),
      deceasedDate: new Date(1799, 11, 14),
      termStart: 1789,
      termEnd: 1797,
    },
    {
      name: "John Adams",
      birthState: "Massachusetts",
      birthDate: new Date(1735, 9, 30),
      deceasedDate: new Date(1826, 6, 4),
      termStart: 1797,
      termEnd: 1801,
    },
    {
      name: "Abraham Lincoln",
      birthState: "Kentucky",
      birthDate: new Date(1809, 1, 12),
      deceasedDate: new Date(1865, 3, 15),
      termStart: 1861,
      termEnd: 1865,
    },
  ];

  // Simulated delay
  await new Promise<void>(resolve => setTimeout(() => resolve(), 1000));

  return mockData[id];
}

// @ts-ignore
// @magic
async function fetchOneRandomPresident(): Promise<President> {
  // Return one random president, not George Washington, John Adamns, or Abraham Lincoln
}

// @ts-ignore
// @magic
async function fetchTwoRandomPresidents(): Promise<[President, President]> {
  // Return two random presidents 
}

// Example usage
async function main() {
  const president1: President = await fetchPresidentInfo(0);
  const president2: President = await fetchPresidentInfo(1);

  console.log(`Were ${president1.name} and ${president2.name} born in the same state? ${sameBirthState(president1, president2)}`);
  console.log(`Were ${president1.name} and ${president2.name} contemporaries? ${contemporaries(president1, president2)}`);

  const president5 = await fetchOneRandomPresident();
  console.log(president5);
  console.log(`Were ${president1.name} and ${president5.name} born in the same state? ${sameBirthState(president1, president5)}`);

  /*
  const [president3, president4] = await fetchTwoRandomPresidents();
  console.log(`Were ${president3.name} and ${president4.name} born in the same state? ${sameBirthState(president1, president2)}`);
  console.log(`Were ${president3.name} and ${president4.name} contemporaries? ${contemporaries(president1, president2)}`);
  */
}

main();

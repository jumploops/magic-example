# Typescript AI Presidency Project

This example Typescript project uses [@jumploops/magic](https://github.com/jumploops/magic) to simulate the use of AI functions on a simple set of presidential data.

## Features

* Fetch information about US presidents
* Determine if two presidents were born in the same state
* Determine if two presidents were contemporaries
* Fetch one random president (AI-powered)
* Fetch two random presidents (AI-powered)

## Installation

1. Clone this repository
   ```sh
   git clone https://github.com/jumploops/magic-example.git
   ```
2. Install dependencies using `npm`
   ```sh
   cd magic example
   npm install
   ```

## Usage

1. Run the example using the following command:
   
   ```sh
   npx ts-node president.ts
   ```
2. The output will display information about the presidents, whether they shared the same birth state, and if they were contemporaries.

## Example Output

```
Were George Washington and John Adams born in the same state? false
Were George Washington and John Adams contemporaries? true
{ name: 'Thomas Jefferson', birthState: 'Virginia', birthDate: '1743-04-12T22:35:06.343Z', deceasedDate: '1826-07-03T22:35:06.343Z', termStart: 1801, termEnd: 1809 }
Were George Washington and Thomas Jefferson born in the same state? true
```

Note: Uncomment the lines related to `fetchTwoRandomPresidents` function in the `president.ts` file to try fetching two random presidents using the AI-powered function.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](https://choosealicense.com/licenses/mit/)

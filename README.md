# Electrical Engineering Toolbag
The EE toolbag provides calculators for common electrical engineering problems for electronics design.

## Installation
1. Install [NPM](https://www.npmjs.com/get-npm)
2. Install EE Toolbag using npm:
```
npm install eetoolbag
```

## Usage
List all available commands
```
ee -h
```

### Find Voltage Divider
Finds the best voltage divider using standard resistances and the specified tolerance and max output impedance. 
```
ee getvdiv
```

### Calculate led current-limiting resistor
Calculates the size of a current-limiting resistor for a specified LED current and voltage
```
ee ledres
```

### Non-inverting Amplifier
Calculates the op amp resistors for a non-inverting amplifier with a specified gain
```
ee ampres
```

## Development
```
git clone https://github.com/JBaczuk/eetoolbag.git
npm run test
npm run build-all
npm install -g
```

## Bugs
Bugs are managed using Github Issues.  Use the following format to submit bugs:  
#### Issue description

#### Steps to reproduce the issue
1.  
2. 
3. 


#### What's the expected result?
-

#### What's the actual result?
-

#### Additional details / screenshot
- ![Screenshot]()

## Future Requests
Please submit feature requests as issues, or create your own and submit a pull request!
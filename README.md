# Tandem Trivia!
## Screenshots
 Included in screenshots folder.

## Description
 Multiple choice quiz! See how many you can get right! Go through a series of Trivia Questions to test out your ability to guess XD!

## Installation
 1. Clone Repository
 2. Install Dotnet Core 5 Sdk
 3. Install nodejs with npm
 4. Run in Terminal: dotnet tool install --global dotnet-ef
 5. Drop Database: dotnet ef database drop
 6. Start API from API folder by running from CLI: dotnet run
 6a. Might need to run, as well: Dotnet dev-certs https --trust
 7. In Angular side within client folder run: ng serve
 8. Data is automatically seeded to sqlite db
 9. Go to http://localhost:4200/ (DO NOT USE HTTPS - no certs available sadly)

## Usage
 Made for practicing purposes. To restart simply hit reload button.

## Credentials
 Make your own! Though there is a minimum of 4 characterfs and max 8 for Username.
 
## Project Status
 Complete for version 1. Needs work on reiterating instead of statically creating tabs in Angular.

## License
 [MIT](https://choosealicense.com/licenses/mit/)
 
## Known Bug
 When first loading into Visual Studio you might have to reinstall the Microsoft.EntityFrameworkCore.Analyzers 5.0.0-rc.2.20475.6 package.

let bob = new Child('Bob', 5, 'Brooklyn', true);
let david = new Child('David', 7, 'Bronx', true);

let carl = new Child('Carl', 8, 'Manhattan', true);
let rick = new Child('Rick', 1, 'Queens', true);

let bobDaycare = new DayCare('Bobs Daycare', 1, true, 5);
let johnDaycare = new DayCare('Johns Daycare', 2, false, 7)


bobDaycare.addChild(bob);
bobDaycare.addChild(david)

johnDaycare.addChild(carl);
johnDaycare.addChild(rick);

let dayCareStore = [bobDaycare, johnDaycare]

bobDaycare.renderDayCare();
johnDaycare.renderDayCare();


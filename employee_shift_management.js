//TASK 1: Create an Employees Array of Employee Objects

const employees = [
    {name: 'John', shifts: [{day: 'Monday', hours: 8}, {day: 'Wednesday', hours: 6}]}, //0
    {name: 'Sara', shifts: [{day: 'Tuesday', hours: 5}, {day: 'Thursday', hours: 7 }]}, //1
    {name: 'David', shifts: [{day: 'Monday', hours: 8}]}, //2
    {name: 'Emily', shifts: [{day: 'Friday', hours: 8}]} //3
];


//TASK 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    employee.shifts.forEach((shift) => {
        console.log(`Shifts for ${employee.name}: ${shift.day}, ${shift.hours} hours`);
    }); //employee INDEX as input, outputs shifts
}
// console.log(displayEmployeeShifts(employees[2]));


//TASK 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find((employee) => employee.name === employeeName);
    //if employee doesn't exist
    if (!employee) {
        console.log("Employee name not found.");
        return;
    }
    //check if they're already scheduled for that day
    const shiftExists = employee.shifts.some((shift) => shift.day === day);
    if (shiftExists) {
        console.log(`This employee has already been scheduled for ${day}.`);
    //if they are available that day
    } else {
        employee.shifts.push({day, hours});
        console.log(`Scheduled ${employeeName} for ${hours} hours on ${day}.`);
    }
}

//console.log(assignShift("David", "Monday", 8));
//console.log(assignShift("Sara", "Monday", 8));


//TASK 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    //make sure employee exists
    const employee = employees.find((employee) => employee.name === employeeName);
    if (!employee) {
        console.log("Employee name not found.");
        return;
    } else {
    //add up hours
    let total = 0;
    const totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0);
    console.log(`${employeeName} has worked ${totalHours} hours this wwek.`);
    return totalHours;
    }
}

//console.log(calculateTotalHours("David"));
//console.log(calculateTotalHours("Marina"));


//TASK 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    //filter to find employees NOT (using !) scheduled on a certain day
    let availableEmployees = employees.filter((employee) => !employee.shifts.some((shift) => shift.day === day));
    //use forEach to console.log each employee as it loops thru the array
    console.log(`Employees available on ${day}:`);
    availableEmployees.forEach((employee) => {
      console.log(employee.name);
    });
  }

// console.log(listAvailableEmployees("Monday"));
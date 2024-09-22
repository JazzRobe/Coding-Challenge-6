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
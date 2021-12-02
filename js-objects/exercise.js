class DailyWork {
    /**
     * create an object from class DailyWork 
     * @param {String} day 
     * @param {Number} startTime 
     * @param {Number} endTime 
     */
    constructor(day, startTime, endTime) {
        this.day = day;
        this.startTime = startTime;
        this. endTime = endTime;
    }

    /**
     * calculate the daily work time by Hours
     * @returns  Number of the hours between end and start work time
     */
    getWorkHours() {
        // write the code to return daily work hours
        return this.endTime - this.startTime
    }
}

const mondayWork = new DailyWork('Monday', 9, 17);
console.log(mondayWork.getWorkHours());

class Worker {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
        this.workDays = [];
    }
    addWorkDay(day) {
        // task: push the day inside the workDays array
        this.workDays.push(day);
    }
    getTotalWorkHours() {
        // write the code to return the total work hours 
        // for the all days in workDays array
        // for loop solution
        // let sum = 0;
        // for (let i = 0; i < this.workDays.length; i++)  {
        //     sum += this.workDays[i].getWorkHours()
        // }
        // return sum;

        // solution using forEach
        // let sum = 0;
        // this.workDays.forEach((item) => {
        //     sum += item.getWorkHours()
        // })
        // return sum;

        // solution using reduce
        return this.workDays.reduce((acc, item) => acc + item.getWorkHours(), 0);


    }
}
const ahmad = new Worker('Ahmad', 'Osman');
ahmad.addWorkDay(mondayWork);
ahmad.addWorkDay(new DailyWork('Tuesday', 9, 12));
ahmad.addWorkDay(new DailyWork('Wednesday', 12, 16));
ahmad.addWorkDay(new DailyWork('Thursday', 10, 15));
ahmad.addWorkDay(new DailyWork('Friday', 9, 14));
console.log(ahmad)
console.log(ahmad.workDays[2].getWorkHours());
console.log(ahmad.getTotalWorkHours());

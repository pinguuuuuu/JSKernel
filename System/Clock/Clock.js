export class Clock {
    
    static sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

}
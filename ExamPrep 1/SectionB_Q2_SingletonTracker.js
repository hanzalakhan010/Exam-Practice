"use strict";
// Section B - Q2: Singleton Analytics Tracker
// Design a Tracker class that can log and retrieve events
// Ensure that only one __instance of the class can be created
class Tracker {
    static __instance;
    events;
    constructor() {
        this.events = [];
        if (!Tracker.__instance) {
            Tracker.__instance = this;
        }
        return Tracker.__instance;
    }
    logEvent(event) {
        this.events.push(event);
    }
    getAllEvents() {
        return this.events;
    }
}
const tracker = new Tracker();
const tracker2 = new Tracker();
const tracker3 = new Tracker();
const tracker4 = new Tracker();
tracker.logEvent("click");
tracker2.logEvent("click");
tracker3.logEvent("click");
tracker4.logEvent("click");
tracker.logEvent("click");
console.log(tracker.getAllEvents());
console.log(tracker2 == tracker4);

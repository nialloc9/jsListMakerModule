var pubsub = {
    pubsub: {}, //no events at default

    subscribe: function (eventName, fn) { //get event name and what function you want to happen
        this.pubsub[eventName] = this.pubsub[eventName] || []; //if event already exists
        this.pubsub[eventName].push(fn); //add event to array
    },
    unsubscribe: function(eventName, fn) { //get event name and what function you want to happen
        if (this.pubsub[eventName]) { //check if event is present
            for (var i = 0; i < this.pubsub[eventName].length; i++) {
                if (this.pubsub[eventName][i] === fn) {
                    this.pubsub[eventName].splice(i, 1);
                    break;
                }
            }
        }
    },
    publish: function (eventName, data) {
        if (this.pubsub[eventName]) { //check if eventName exists
            this.pubsub[eventName].forEach(function(fn) { //do function for each event
                fn(data);
            });
        }
    }
};

module.exports = pubsub;
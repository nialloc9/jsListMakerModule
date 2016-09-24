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


var list = (function () {

    //default list
    var list = ['a', 'b'];

    //cache DOM
    var $el = $('#addToListModule');
    var $input = $el.find('input');
    var $btn = $el.find('#addToListBtn');
    var $ul = $el.find('ul');
    var template = $el.find('#addToListTemplate').html();

    //bind events
    $btn.on('click', addToList);
    $ul.on('click', 'i.del', deleteFromList);

    _render();

    function addToList(listItem) {
        var item = (typeof listItem === "string") ? listItem: $input.val();
        list.push(item);
        _render();
        pubsub.publish("listChanged", list.length);
        $input.val('');
    }

    function deleteFromList(e){
        var i;
        if(typeof e === "number"){
            i = e;
        }else{
            var $remove = $(e.target).closest('li');
            i = $ul.find('li').index($remove);
        }

        list.splice(i, 1); //remove 1 with index of i

        _render();
        pubsub.publish("listChanged", list.length);

    }

    function subscribe(functionName){
        pubsub.subscribe("listChanged", functionName);
    }

    function unsubscribe(functionName){
        pubsub.unsubscribe("listChanged", functionName);
    }

    function returnList(){
        return list;
    }

    //private function
    function _render() {
        $ul.html(Mustache.render(template, {list: list}));
    }

    //api
    return{
        addToList: addToList,
        deleteFromList: deleteFromList,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        returnList: returnList
    }
})();
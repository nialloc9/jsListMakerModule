var list = (function () {

    //dependencies
    var $ = require('jquery');
    var Mustache = require('mustache');
    var pubsub = require('./pubsub');

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

    function _render() {
        $ul.html(Mustache.render(template, {list: list}));
    }

    return{
        addToList: addToList,
        deleteFromList: deleteFromList,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        returnList: returnList
    }
})();

module.exports = list;
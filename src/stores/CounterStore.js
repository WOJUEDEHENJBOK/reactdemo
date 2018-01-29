import AppDispatcher from "../AppDispatcher.js";
const counterValues = {
    'First': 0 ,
    'Second': 10 ,
    'Third': 30
}

const counterValues = Object.assign( {}, EventEmitter.prototype, {
    getCounterValues : function() {
        return counterValues;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
})
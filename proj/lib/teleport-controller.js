AFRAME.registerComponent('touch-listener',{
    init: function(){
        var targetEl = this.el;

        document.querySelector('a-scene').addEventListener('triggerdown', function(){
            targetEl.emit('starttouch')
            console.log("beam on")
        })

        document.querySelector('a-scene').addEventListener('triggerup', function(){
            targetEl.emit('endtouch')
            console.log("beam off")
        })

       
    }
});
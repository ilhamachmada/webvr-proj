AFRAME.registerComponent('touch-listener',{
    init: function(){
        var targetEl = this.el;

        document.querySelector('#left-hand').addEventListener('triggerdown', function(){
            targetEl.emit('starttouch')
            console.log("beam on")
        })

        document.querySelector('#left-hand').addEventListener('triggerup', function(){
            targetEl.emit('endtouch')
            console.log("beam off")
        })

       
    }
});
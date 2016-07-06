import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$ngRedux', 'stepsActions', 'addressActions'];

function MainController($ngRedux, stepsActions, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            currentStep: state.steps.currentStep,
            stepIndex: state.steps.index,
            fetchedAddress:state.address.address,
            address:state.address
        };
    }, Object.assign({}, stepsActions, addressActions))(vm);

    vm.$onInit = $onInit;


    function $onInit(){

    }

    vm.gotoNext = function(){
        if(vm.fetchedAddress) {
            vm.nextStep();
        }
    }


}

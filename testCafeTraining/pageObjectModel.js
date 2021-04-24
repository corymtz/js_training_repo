import {Selector} from 'testcafe';

class Page{
    constructor(){
        this.nameDev = Selector('#developer-name');
        this.checkRemoteTest= Selector('#remote-testing');    
        this.radioLinux=Selector('#linux');
        this.listInterfaces= Selector('#preferred-interface');
        this.listElementBoth=Selector('#preferred-interface > option:nth-child(3)');
        this.textBoxComments=Selector('#comments');
        this.buttonTried=Selector('#tried-test-cafe'); 
        this.sliderObject=Selector('#slider');
        this.slider={
            handle: Selector('.ui-slider-handle'),
            tick : Selector('.slider-value')
        };
        this.sliderRateValue=Selector('div.slider-value:nth-child(4)');
    }
}

export default new Page();
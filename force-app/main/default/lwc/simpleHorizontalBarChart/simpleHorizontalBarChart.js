import { LightningElement, track, api } from 'lwc';

export default class SimpleHorizontalBarChart extends LightningElement {

    @api flexipageRegionWidth;

    @api min;
    @api max;
    @api value;
    @api low;
    @api high;

    @api color;
    @api animated;

    constructor(){
        super();
        this.value = 40;
        this.max= 100;
    }




}
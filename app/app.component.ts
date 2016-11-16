import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Alan';
    wardsColor = 'blue';
    customers = [
        {id: 1, name:'Ward'},
        {id: 2, name:'Ken'},
        {id: 3, name:'Eric'},
        {id: 4, name:'Sally'},
        {id: 5, name:'Emmet'}
    ];
    changeSuitColor() {
        this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
    }
}

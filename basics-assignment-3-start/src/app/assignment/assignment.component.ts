import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styles: [`
        .highlighted {
            color: white;
        }
    `]
})
export class AssignmentComponent {
    paragraphs = [];

    getColor(index) {
        return index >= 4 ? 'blue' : 'white';
    }

    onCreateParagraph() {
        this.paragraphs.push(`Secret Password = tuna - ${new Date()}`);
    }
}
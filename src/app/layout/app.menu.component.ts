import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Cursos',
                items: [
                    { label: 'Materias', icon: 'pi pi-fw pi-book', routerLink: ['/management/subject'] },
                    { label: 'Estudiantes', icon: 'pi pi-fw pi-users', routerLink: ['/management/student'] },
                    { label: 'Notas', icon: 'pi pi-fw pi-pencil', routerLink: ['/management/professor'] }
                ]
            },
        ];
    }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateComponent} from './template.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

@NgModule({
    declarations: [TemplateComponent],
    imports: [
        CommonModule,
        NzDropDownModule,
    ]
})
export class TemplateModule {
}

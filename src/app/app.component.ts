import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    Please <strong style="color:red;">FORK</strong> this stackblitz to reproduce your issue.
    <br>
    <br>
    请 <strong style="color:red;">FORK</strong> 这个链接来重现你碰到的问题。
    <br>
    <br>
    <button nz-button nzType="primary">
      <i nz-icon nzType="trophy"></i>
      NG-ZORRO-ANTD Playgroud
    </button>
  `
})
export class AppComponent {
}


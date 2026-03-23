export class LoginPage {
    constructor(page) {
        this.page = page
    }

    async acessarPagina() {
        await this.page.goto('http://paybank-mf-auth:3000/');
    }
}
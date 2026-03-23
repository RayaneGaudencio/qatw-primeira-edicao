import { test, expect } from '@playwright/test';
import { obterCpf } from '../support/db';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({ page }) => {

  const loginPage = new LoginPage(page)

  await loginPage.acessarPagina()
  const senha = "123456"
  await page.getByRole('textbox', { name: 'Digite seu CPF' }).click();

  const cpf = await obterCpf();
  await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf.cpf);
  await page.getByRole('button', { name: 'Continuar' }).click();

  for (const digito of senha) {
    await page.getByRole('button', { name: digito }).click();
  }

  await page.getByRole('button', { name: 'Continuar' }).click();
  expect(await page.locator('#root')).toContainText('Acesso negado. Por favor, tente novamente.');
});
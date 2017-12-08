/*
  OSIO EE test - Page object model - The page hierarchy is:
  * landing.page.ts - User starts here - User selects "Log In" and is moved to the login page
  * login.page.ts - At this page the user selects the log in path, enters name/password
  * main_dashboard.page.ts - Account dashboard page - This is the user's top level page insisde of OSIO
  * space_dashboard.page.ts - Space dashboard page - From here the user is able to perform tasks inside the space
*/
// tslint:disable:max-line-length
import { browser, element, by, By, ExpectedConditions as until, $, $$, ElementFinder, ElementArrayFinder } from 'protractor';
// tslint:ensable:max-line-length
import { AppPage } from './app.page';
import { TextInput, Button } from '../ui';

export class SpaceCheWorkspacePage extends AppPage {

  // tslint:disable:max-line-length

  recentProjectRootByName (projectName: string): ElementFinder {
    let xpathString = './/*[@id=\'gwt-debug-projectTree\']/div[contains(@name,\'' + projectName + '\')]';
    return element(by.xpath(xpathString));
  }

// tslint:enable:max-line-length


}

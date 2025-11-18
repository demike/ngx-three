// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

@NgModule({
  imports: [BrowserTestingModule],
  providers: [provideZonelessChangeDetection()],
})
class TestModule {}

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(TestModule, platformBrowserTesting(), {
  teardown: { destroyAfterEach: false },
});

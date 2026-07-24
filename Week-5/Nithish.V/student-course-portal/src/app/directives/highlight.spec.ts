import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  template: `<p appHighlight>Test</p>`
})
class TestComponent {}

describe('HighlightDirective', () => {

  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

  });

  it('should create', () => {

    expect(fixture).toBeTruthy();

  });

});
// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test ('valid phone number1 ', () => {
  expect(isPhoneNumber('123-867-5309')).toBe(true);
});
test ('valid phone number2 ', () => {
  expect(isPhoneNumber('(412)-313-3333')).toBe(true);
});
test ('invalid phone number1 ', () => {
  expect(isPhoneNumber('123-867-530')).toBe(false);
});
test ('invalid phone number2 ', () => {
  expect(isPhoneNumber('(412)-313-333')).toBe(false);
});

test ('valid email1 ', () => {
  expect(isEmail('david@email.com')).toBe(true);
});
test ('valid email2 ', () => {
  expect(isEmail('blah@gmail.com')).toBe(true);
});
test ('invalid email1 ', () => {
  expect(isEmail('davidemail.com')).toBe(false);
});
test ('invalid email2 ', () => {
  expect(isEmail('blah@gmail,com')).toBe(false);
});

test ('valid password1 ', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});
test ('valid password2 ', () => {
  expect(isStrongPassword('b1234')).toBe(true);
});
test ('invalid password1 ', () => {
  expect(isStrongPassword('1234')).toBe(false);
});
test ('invalid password2 ', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test ('valid date1 ', () => {
  expect(isDate('12/12/1212')).toBe(true);
});
test ('valid date2 ', () => {
  expect(isDate('1/2/3456')).toBe(true);
});
test ('invalid date1 ', () => {
  expect(isDate('12/12/12')).toBe(false);
});
test ('invalid date2 ', () => {
  expect(isDate('1/2/345')).toBe(false);
});

test ('valid hex color1 ', () => {
  expect(isHexColor('#123456')).toBe(true);
});
test ('valid hex color2 ', () => {
  expect(isHexColor('#123')).toBe(true);
});
test ('invalid hex color1 ', () => {
  expect(isHexColor('NOTACOLOR')).toBe(false);
});
test ('invalid hex color2 ', () => {
  expect(isHexColor('#ff')).toBe(false);
});
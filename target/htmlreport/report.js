$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Testcase1/feature1.feature");
formatter.feature({
  "name": "Test Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User registration with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user open application newtours.demoaut.com",
  "keyword": "Given "
});
formatter.match({
  "location": "testcase2.user_open_application_newtours_demoaut_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on registration",
  "keyword": "When "
});
formatter.match({
  "location": "testcase2.user_clicks_on_registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "testcase2.user_validates_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter firstname",
  "keyword": "When "
});
formatter.match({
  "location": "testcase2.user_enter_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter lastname",
  "keyword": "And "
});
formatter.match({
  "location": "testcase2.user_enter_lastname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password",
  "keyword": "And "
});
formatter.match({
  "location": "testcase2.user_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "testcase2.user_enter_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "testcase2.user_click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates registration page successed",
  "keyword": "Then "
});
formatter.match({
  "location": "testcase2.user_validates_registration_page_successed()"
});
formatter.result({
  "status": "passed"
});
});
package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Testcase1\\junit.feature",
                 glue="Testcase2",
                 //plugin="html:target\\htmlreport")
                 //plugin="junit:target\\xmlreport.xml")
                 plugin="json:target\\jsonreport.json",
                 tags={"@payment"})
                 



public class RunnerClass
{

}

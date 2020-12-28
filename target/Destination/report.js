$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NHScostcheck.feature");
formatter.feature({
  "line": 1,
  "name": "User from wales checks NHS cost",
  "description": "",
  "id": "user-from-wales-checks-nhs-cost",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigate to NHS Costs checker tool",
  "keyword": "Given "
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_navigate_to_NHS_Costs_checker_tool()"
});
formatter.result({
  "duration": 3072814000,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 85\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BPNON4T\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00D6D383+3134339]\n\tOrdinal0 [0x00C5A171+2007409]\n\tOrdinal0 [0x00AFAEE8+569064]\n\tOrdinal0 [0x00A8139F+70559]\n\tOrdinal0 [0x00A7CC63+52323]\n\tOrdinal0 [0x00AA0DFC+200188]\n\tOrdinal0 [0x00AA0C1D+199709]\n\tOrdinal0 [0x00A9EB0B+191243]\n\tOrdinal0 [0x00A82E77+77431]\n\tOrdinal0 [0x00A83E3E+81470]\n\tOrdinal0 [0x00A83DC9+81353]\n\tOrdinal0 [0x00C70CD9+2100441]\n\tGetHandleVerifier [0x00EDB75A+1396954]\n\tGetHandleVerifier [0x00EDB3D9+1396057]\n\tGetHandleVerifier [0x00EE7126+1444518]\n\tGetHandleVerifier [0x00EDBCE8+1398376]\n\tOrdinal0 [0x00C67F51+2064209]\n\tOrdinal0 [0x00C722EB+2106091]\n\tOrdinal0 [0x00C72411+2106385]\n\tOrdinal0 [0x00C849C4+2181572]\n\tBaseThreadInitThunk [0x76116359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77858944+228]\n\tRtlGetAppContainerNamedObjectPath [0x77858914+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Base.BaseClass.setup(BaseClass.java:64)\r\n\tat StepDefinitions.CostCheckerEndtoEndJourney.user_navigate_to_NHS_Costs_checker_tool(CostCheckerEndtoEndJourney.java:21)\r\n\tat ✽.Given User navigate to NHS Costs checker tool(NHScostcheck.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 7,
  "name": "User checks NHS cost providing circumstances as YES",
  "description": "",
  "id": "user-from-wales-checks-nhs-cost;user-checks-nhs-cost-providing-circumstances-as-yes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters circumstances into the Checker tool as YES",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User get a result of whether User will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_is_from_Wales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_enters_circumstances_into_the_Checker_tool_as_YES()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_get_a_result_of_whether_User_will_get_help_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigate to NHS Costs checker tool",
  "keyword": "Given "
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_navigate_to_NHS_Costs_checker_tool()"
});
formatter.result({
  "duration": 1637477200,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 85\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BPNON4T\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00D6D383+3134339]\n\tOrdinal0 [0x00C5A171+2007409]\n\tOrdinal0 [0x00AFAEE8+569064]\n\tOrdinal0 [0x00A8139F+70559]\n\tOrdinal0 [0x00A7CC63+52323]\n\tOrdinal0 [0x00AA0DFC+200188]\n\tOrdinal0 [0x00AA0C1D+199709]\n\tOrdinal0 [0x00A9EB0B+191243]\n\tOrdinal0 [0x00A82E77+77431]\n\tOrdinal0 [0x00A83E3E+81470]\n\tOrdinal0 [0x00A83DC9+81353]\n\tOrdinal0 [0x00C70CD9+2100441]\n\tGetHandleVerifier [0x00EDB75A+1396954]\n\tGetHandleVerifier [0x00EDB3D9+1396057]\n\tGetHandleVerifier [0x00EE7126+1444518]\n\tGetHandleVerifier [0x00EDBCE8+1398376]\n\tOrdinal0 [0x00C67F51+2064209]\n\tOrdinal0 [0x00C722EB+2106091]\n\tOrdinal0 [0x00C72411+2106385]\n\tOrdinal0 [0x00C849C4+2181572]\n\tBaseThreadInitThunk [0x76116359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77858944+228]\n\tRtlGetAppContainerNamedObjectPath [0x77858914+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Base.BaseClass.setup(BaseClass.java:64)\r\n\tat StepDefinitions.CostCheckerEndtoEndJourney.user_navigate_to_NHS_Costs_checker_tool(CostCheckerEndtoEndJourney.java:21)\r\n\tat ✽.Given User navigate to NHS Costs checker tool(NHScostcheck.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "User checks NHS cost providing circumstances as NO",
  "description": "",
  "id": "user-from-wales-checks-nhs-cost;user-checks-nhs-cost-providing-circumstances-as-no",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters circumstances into the Checker tool as NO",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User get a result of whether User will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_is_from_Wales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_enters_circumstances_into_the_Checker_tool_as_NO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_get_a_result_of_whether_User_will_get_help_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigate to NHS Costs checker tool",
  "keyword": "Given "
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_navigate_to_NHS_Costs_checker_tool()"
});
formatter.result({
  "duration": 1463694000,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 85\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BPNON4T\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00D6D383+3134339]\n\tOrdinal0 [0x00C5A171+2007409]\n\tOrdinal0 [0x00AFAEE8+569064]\n\tOrdinal0 [0x00A8139F+70559]\n\tOrdinal0 [0x00A7CC63+52323]\n\tOrdinal0 [0x00AA0DFC+200188]\n\tOrdinal0 [0x00AA0C1D+199709]\n\tOrdinal0 [0x00A9EB0B+191243]\n\tOrdinal0 [0x00A82E77+77431]\n\tOrdinal0 [0x00A83E3E+81470]\n\tOrdinal0 [0x00A83DC9+81353]\n\tOrdinal0 [0x00C70CD9+2100441]\n\tGetHandleVerifier [0x00EDB75A+1396954]\n\tGetHandleVerifier [0x00EDB3D9+1396057]\n\tGetHandleVerifier [0x00EE7126+1444518]\n\tGetHandleVerifier [0x00EDBCE8+1398376]\n\tOrdinal0 [0x00C67F51+2064209]\n\tOrdinal0 [0x00C722EB+2106091]\n\tOrdinal0 [0x00C72411+2106385]\n\tOrdinal0 [0x00C849C4+2181572]\n\tBaseThreadInitThunk [0x76116359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77858944+228]\n\tRtlGetAppContainerNamedObjectPath [0x77858914+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Base.BaseClass.setup(BaseClass.java:64)\r\n\tat StepDefinitions.CostCheckerEndtoEndJourney.user_navigate_to_NHS_Costs_checker_tool(CostCheckerEndtoEndJourney.java:21)\r\n\tat ✽.Given User navigate to NHS Costs checker tool(NHScostcheck.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "User checks NHS cost as aged under sixteen",
  "description": "",
  "id": "user-from-wales-checks-nhs-cost;user-checks-nhs-cost-as-aged-under-sixteen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User is from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters circumstances into the Checker tool as aged under sixteen",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User get a result of whether User will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_is_from_Wales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_enters_circumstances_into_the_Checker_tool_as_aged_under_sixteen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CostCheckerEndtoEndJourney.user_get_a_result_of_whether_User_will_get_help_or_not()"
});
formatter.result({
  "status": "skipped"
});
});
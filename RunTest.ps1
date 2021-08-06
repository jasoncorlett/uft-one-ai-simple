# https://admhelp.microfocus.com/uft/en/all/AutomationObjectModel/Content/AutomationIntro/Output/AutoObjModel.htm

$testPath = "$PSScriptRoot\SimpleTest"

$uft = New-Object -ComObject “QuickTest.Application"
$uft.Launch()
# $uft.Visible = $True
$uft.Open($testPath, $False, $False)

$test = $uft.Test
$test.Run(0, $True, $0)
$test.Close()

$uft.Quit()
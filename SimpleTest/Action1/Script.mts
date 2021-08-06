While Browser("CreationTime:=0").Exist
	Browser("CreationTime:=0").Close
Wend

SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe" ,"","","",3

set b=Browser("CreationTime:=0")
b.ClearCache
b.Navigate "http://nimbusserver.aos.com:8000"
b.Sync
' wait(2)
b.Maximize

AIUtil.SetContext b 	
AIUtil.FindText("SPEAKERS").Click


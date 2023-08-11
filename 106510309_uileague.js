/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Performance By Bookie</font></H5>    
*/

function buildLeaguePerformanceUI_106510309 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_LeaguePerformance);
    var arrNodes = UDModule.DOM.convertNodesToArray (nodeList);
    
    var objBookiePerf = new BookiePerformanceObj_AC ();
    objBookiePerf.ArrNodes = arrNodes;
    objBookiePerf.IsShowBookiePerf = false;
	objBookiePerf.IsShowAccountPerf = false;
	objBookiePerf.IsShowLeaguePerf = true;
	objBookiePerf.IsShowBookiePerf_Popup = false;	
    UDModule.COMP.replaceDynamicHtml ("tdView", objBookiePerf.buildPerformanceUI (objBookiePerf));
}
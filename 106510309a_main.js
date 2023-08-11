/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Performance By Bookie - League Performance</font></H5>
*/

/**
    Creates an object of League Performance and initializes all member variables.
	Invokes init function.

    @author     Vinod
    @version    1.0.0
*/

var m_oLeagueIds	= -1;
var m_oBetTypeIds	= 0;

function onload_106510309a ()
{
	Constructor_106510309a ();
	init_106510309a ();
}

function init_106510309a ()
{
	window.focus ();
	UDModule.PROJ.loadDefaultTheme ();

	var oURL = unescape (window.location.href);
	var arrURL = oURL.split ("?");
	m_arrFilters = arrURL [1].split (UDModule.Gk_DATA_SEP);			
		
	var arrLeagueIds = window.opener.getSelectedIds_LL_106510309 ();
    m_oLeagueIds = arrLeagueIds.length > 0 ? arrLeagueIds.join (",") : "-1";
    
    var arrBetTypeIds = window.opener.getSelectedIds_BT_106510309 ();
    m_oBetTypeIds = arrBetTypeIds.length > 0 ? arrBetTypeIds.join (",") : "0";

	initData_106510309a ();	
}

function initData_106510309a ()
{
	var xmlDoc = getProcessRequest_106510309a (getInitParam_106510309a ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))
	{
		if (isValidStatus_T11_106510309a (xmlDoc))		
			showLeaguePerformance_106510309a (xmlDoc);
	}
}

function getFilterValue_106510309a (nTypeId)
{
	return m_arrFilters [nTypeId];
}

function getProcessRequest_106510309a (oParam)
{
	return window.opener.getProcessRequest_106510309 (oParam);
}
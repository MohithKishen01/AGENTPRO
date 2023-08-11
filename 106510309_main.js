﻿/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Performance By Bookie</font></H5>    
*/

var m_arrPopups = new Array (null, null);

/**
    Creates an object of Performance By Bookie and initializes all member variables.
	Invokes init function.
    
    @author     Vinod
    @version    1.0.0               
*/ 

function onload_106510309 ()
{
    Constructor_106510309 ();
	du_datePicker ();
    init_106510309 ();    
}

function unload_106510309 ()
{	
    UDModule.PROJ.closeHelp ();

	for (var nIndex = 0; nIndex < m_arrPopups.length; nIndex++)
		UDModule.COMP.closeWindow (m_arrPopups [nIndex]);	
}

function init_106510309 ()
{
	UDModule.PROJ.loadDefaultTheme ();
    initData_106510309 ();
    UDModule.COMP.setFocus_DD ("cbCompanyUnits");
	setFilterPosition_106510309 ();

	UDModule.COMP.getElement ("txtFromDate").value = UDModule.DATE.getCurrentDate ();
	UDModule.COMP.getElement ("txtToDate").value = UDModule.DATE.getCurrentDate ();
}

function initFilters_106510309 ()
{
}

function initData_106510309 ()
{
    m_arrNodes_BT = new Array (), m_arrNodes_LL = new Array ();
    
    var xmlDoc = UDModule.PROJ.processRequest (getInitParam_106510309 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T1_106510309 (xmlDoc))
        {
            UDModule.PROJ.setFunction_PM (xmlDoc);            
			fillCurrencies_106510309 (xmlDoc);
            fillCompanyUnits_106510309 (xmlDoc);                  
        }
    }
}

function fillCompanyUnits_106510309 (xmlDoc)
{
	var nodeList = xmlDoc.getElementsByTagName (kSR_CompanyUnits);
    UDModule.COMP.fillDropDown (nodeList, "cbCompanyUnits", 1, 0);
    
    if (UDModule.COMP.getElement ("cbCompanyUnits").options.length > 1)
        UDModule.COMP.getElement ("cbCompanyUnits").selectedIndex = 1;
}

function fillCurrencies_106510309 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Currencies);
    UDModule.COMP.fillDropDown (nodeList, "cbCurrencies", 1, 0);
}

function getCompanyUnitId_106510309 () 
{
    return parseInt (UDModule.COMP.getElement ("cbCompanyUnits").value);
}

function getReportTypeId_106510309 ()
{
    return parseInt (UDModule.COMP.getElement ("cbReportBy").value);
}

function getWinLoseTypeId_106510309 ()
{
    return parseInt (UDModule.COMP.getElement ("cbWinLoseType").value);
}

function getPtBetsOptionId_106510309 ()
{
    return UDModule.COMP.getElement ("chkPTBetsOption").checked ? 1 : 0;
}

function getFromDate_106510309 ()
{
	return UDModule.COMP.getElement ("txtFromDate").value;
}

function getToDate_106510309 ()
{
	return UDModule.COMP.getElement ("txtToDate").value;
}

function getLiveStatusId_106510309 ()
{
    return parseInt (UDModule.COMP.getElement ("cbLiveStatus").value);
}

function getCurrencyId_106510309 ()
{
    return parseInt (UDModule.COMP.getElement ("cbCurrencies").value);
}

function getProcessRequest_106510309 (oParam)
{
    return UDModule.PROJ.processRequest (oParam);
}

function isValidDate_106510309 ()
{
	var bStatus = false;

	if (getCompanyUnitId_106510309 () == 0)
	{
	    alert (m_arrMessages [iM_CompanyUnit]);
		UDModule.COMP.setFocus_DD ("cbCompanyUnits");
	}
	else if (!UDModule.DATE.isDate (getFromDate_106510309 ()))
		UDModule.COMP.setFocus ("txtFromDate");
	else if (!UDModule.DATE.isDate (getToDate_106510309 ()))
		UDModule.COMP.setFocus ("txtToDate");	
	else
		bStatus = true;

	return bStatus;
}
